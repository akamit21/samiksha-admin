/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import _ from 'lodash';
import {
  CREATE,
  DELETE,
  DELETE_MANY,
  GET_LIST,
  GET_MANY,
  GET_MANY_REFERENCE,
  GET_ONE,
  UPDATE,
  UPDATE_MANY,
} from './fetchActions';

import getFinalType from './getFinalType';

const checkForNesting = (filter, filterObj, key) => {
  const temp = {};
  for (const innerKey in filterObj[key]) {
    temp[key] = {};
    if (typeof filterObj[key][innerKey] === 'object') {
      for (const innerInnerKey in filterObj[key][innerKey]) {
        temp[key][innerInnerKey] = {};
        if (typeof filterObj[key][innerKey][innerInnerKey] === 'object') {
          // todo: implement recursion
        } else {
          temp[key][innerKey][innerInnerKey] = {
            _eq: filterObj[key][innerKey][innerInnerKey],
          };
        }
      }
    } else {
      temp[key][innerKey] = { _eq: filterObj[key][innerKey] };
    }
  }
  filter = { ...filter, [key]: temp[key] };
  return filter;
};
const buildGetListVariables = () => (resource, aorFetchType, params) => {
  const result = {};
  const { filter: filterObj = {}, customFilters = [] } = params;

  let distinct = [];
  if (params && params.filter && params.filter.distinctOnFields) {
    distinct = params.filter.distinctOnFields || [];
    delete params.filter.distinctOnFields;
  }
  const tempFilterObject = { ...filterObj };
  for (const k in tempFilterObject) {
    if (
      typeof tempFilterObject[k] === 'object' &&
      !Object.keys(tempFilterObject[k]).length
    ) {
      delete filterObj[k];
    }
  }
  const filters = Object.keys(filterObj).reduce((acc, key) => {
    let filter;
    if (key === 'q') {
      const field = resource.type.fields.filter((f) => {
        return getFinalType(f.type).name === 'String';
      });
      const allQuery = [];
      field.map((f) => {
        return allQuery.push({ [f.name]: { _ilike: `%${filterObj[key]}%` } });
      });
      filter = { _or: [...allQuery] };
    } else if (key === 'ids') {
      filter = { id: { _in: filterObj.ids } };
    } else if (Array.isArray(filterObj[key])) {
      filter = { [key]: { _in: filterObj[key] } };
    } else {
      const field = resource.type.fields.find((f) => f.name === key);
      if (field.type.kind === 'OBJECT') {
        filter = checkForNesting(filter, filterObj, key);
      } else {
        switch (getFinalType(field.type).name) {
          case 'String':
            filter = { [key]: { _ilike: `%${filterObj[key]}%` } };
            break;
          default:
            filter = { [key]: { _eq: filterObj[key] } };
        }
      }
    }

    return [...acc, filter];
  }, customFilters);

  result.where = { _and: filters };

  if (params.pagination) {
    result.limit = parseInt(params.pagination.perPage, 10);
    result.offset = parseInt(
      (params.pagination.page - 1) * params.pagination.perPage,
      10
    );
  }
  if (params.sort) {
    result.order_by = _.set(
      {},
      params.sort.field,
      params.sort.order.toLowerCase()
    );
  }
  if (distinct && distinct.length) {
    result.distinct_on = distinct;
  }
  return result;
};

const buildUpdateVariables = (resource, aorFetchType, params) =>
  Object.keys(params.data).reduce((acc, key) => {
    // If hasura permissions do not allow a field to be updated like (id),
    // we are not allowed to put it inside the variables
    // RA passes the whole previous Object here
    // https://github.com/marmelab/react-admin/issues/2414#issuecomment-428945402

    // TODO: To overcome this permission issue,
    // it would be better to allow only permitted inputFields from *_set_input INPUT_OBJECT
    if (params.previousData && params.data[key] === params.previousData[key]) {
      return acc;
    }

    if (resource.type.fields.some((f) => f.name === key)) {
      return {
        ...acc,
        [key]: params.data[key],
      };
    }

    return acc;
  }, {});

const buildCreateVariables = (resource, aorFetchType, params) => {
  console.log(params, 'params');
  // console.log(aorFetchType, 'aft');
  // const temp = {};
  // Object.keys(params.data).forEach((k) => {
  //   console.log(`${k} - ${params.data[k]}`);
  //   temp[k] = {};
  //   if (typeof params.data[k] === 'object') {
  //     temp[k] = {};
  //     const d = [];
  //     console.log(params.data, 'params data');
  //     for (let i = 0; i < params.data[k].length; i += 1) {
  //       d.push({
  //         i: params.data[k][i],
  //       });
  //     }
  //     temp[k].data = d;
  //   } else {
  //     temp[k] = params.data[k];
  //   }
  //   console.log(temp);
  // });

  // const temp = {};
  // Object.keys(params).forEach((k) => {
  //   console.log(`${k} - ${params[k]}`);
  //   temp[k] = {};
  //   if (Array.isArray(params[k])) {
  //     temp[k] = [];
  //     params.data[k].forEach((key) => temp[k].push({ subject_id: key }));
  //   } else {
  //     temp[k] = params[k];
  //   }
  //   console.log(temp);
  // });
  // const { data } = params;
  // const x = {
  //   ...data,
  //   stream_subjects: [
  //     ...data.stream_subjects.map((item) => {
  //       return { subject_id: item };
  //     }),
  //   ],
  // };
  return params.data;
};

export default (introspectionResults) => (
  resource,
  aorFetchType,
  params,
  queryType
) => {
  switch (aorFetchType) {
    case GET_LIST:
      return buildGetListVariables(introspectionResults)(
        resource,
        aorFetchType,
        params,
        queryType
      );
    case GET_MANY_REFERENCE: {
      const built = buildGetListVariables(introspectionResults)(
        resource,
        aorFetchType,
        params,
        queryType
      );
      if (params.filter) {
        return {
          ...built,
          where: {
            _and: [
              ...built.where._and,
              { [params.target]: { _eq: params.id } },
            ],
          },
        };
      }
      return {
        ...built,
        where: {
          [params.target]: { _eq: params.id },
        },
      };
    }
    case GET_MANY:
    case DELETE_MANY:
      return {
        where: { id: { _in: params.ids } },
      };

    case GET_ONE:
      return {
        where: { id: { _eq: params.id } },
        limit: 1,
      };

    case DELETE:
      return {
        where: { id: { _eq: params.id } },
      };
    case CREATE:
      return {
        objects: buildCreateVariables(
          resource,
          aorFetchType,
          params,
          queryType
        ),
      };

    case UPDATE:
      return {
        _set: buildUpdateVariables(resource, aorFetchType, params, queryType),
        where: { id: { _eq: params.id } },
      };

    case UPDATE_MANY:
      return {
        _set: buildUpdateVariables(resource, aorFetchType, params, queryType),
        where: { id: { _in: params.ids } },
      };
    default:
  }
  return null;
};
