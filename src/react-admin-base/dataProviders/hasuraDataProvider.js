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
} from 'react-admin';
import ApolloClient from 'apollo-boost';

import * as gqlTypes from 'graphql-ast-types-browser';
import buildDataProvider from './hasura-graphql-samagra';
import { buildQueryFactory } from './hasura-graphql-samagra/buildQuery';
import buildVariables from './hasura-graphql-samagra/buildVariables';
import {
  buildGqlQuery,
  buildFields,
  buildMetaArgs,
  buildArgs,
  buildApolloArgs,
} from './hasura-graphql-samagra/buildGqlQuery';
import getResponseParser from './hasura-graphql-samagra/getResponseParser';

const config = require('../../config');

// dependency injection
const headers = {
  'content-type': 'application/json',
  'x-hasura-admin-secret': 'samarthDBHasuraPW5678',
};

export const buildFieldsCustom = (type) => {
  const res = buildFields(type);
  if (type.name === 'school') {
    // here we add additional fields we want to query for apps.
    // we are using the graphql-ast-types functions which is ast representation for graphql
    res.push(
      gqlTypes.field(
        gqlTypes.name('location'),
        null,
        null,
        null,
        gqlTypes.selectionSet([
          gqlTypes.field(gqlTypes.name('district')),
          gqlTypes.field(gqlTypes.name('block')),
          gqlTypes.field(gqlTypes.name('cluster')),
          gqlTypes.field(gqlTypes.name('id')),
        ])
      )
    );
  } else if (type.name === 'grade_assessment') {
    res.push(
      gqlTypes.field(
        gqlTypes.name('assessment'),
        null,
        null,
        null,
        gqlTypes.selectionSet([gqlTypes.field(gqlTypes.name('type'))])
      ),
      gqlTypes.field(
        gqlTypes.name('school'),
        null,
        null,
        null,
        gqlTypes.selectionSet([gqlTypes.field(gqlTypes.name('udise'))])
      )
    );
  } else if (type.name === 'question_submission') {
    res.push(
      gqlTypes.field(
        gqlTypes.name('grade'),
        null,
        null,
        null,
        gqlTypes.selectionSet([
          gqlTypes.field(gqlTypes.name('number')),
          gqlTypes.field(gqlTypes.name('section')),
        ])
      ),
      gqlTypes.field(
        gqlTypes.name('assessment'),
        null,
        null,
        null,
        gqlTypes.selectionSet([gqlTypes.field(gqlTypes.name('type'))])
      ),
      gqlTypes.field(
        gqlTypes.name('school'),
        null,
        null,
        null,
        gqlTypes.selectionSet([gqlTypes.field(gqlTypes.name('udise'))])
      )
    );
  } else if (type.name === 'student') {
    res.push(
      gqlTypes.field(
        gqlTypes.name('school'),
        null,
        null,
        null,
        gqlTypes.selectionSet([gqlTypes.field(gqlTypes.name('udise'))])
      )
    );
    // } else if (type.name === 'stream_subject') {
    // res.push(
    //   gqlTypes.field(
    //     gqlTypes.name('stream'),
    //     null,
    //     null,
    //     null,
    //     gqlTypes.selectionSet([gqlTypes.field(gqlTypes.name('id'))])
    //   )
    // );
    // } else if (type.name === 'stream') {
    //   res.push(
    //     gqlTypes.field(
    //       gqlTypes.name('stream_subjects'),
    //       null,
    //       null,
    //       null,
    //       gqlTypes.selectionSet([
    //         gqlTypes.field(
    //           gqlTypes.name('subject'),
    //           null,
    //           null,
    //           null,
    //           gqlTypes.selectionSet([gqlTypes.field(gqlTypes.name('id'))])
    //         ),
    //       ])
    //     )
    //   );
  }
  return res;
};
const buildGqlQueryCustom = (iR) =>
  buildGqlQuery(
    iR,
    buildFieldsCustom,
    buildMetaArgs,
    buildArgs,
    buildApolloArgs
  );
const buildQuery = buildQueryFactory(
  buildVariables,
  buildGqlQueryCustom,
  getResponseParser
);

const client = new ApolloClient({
  uri: config.hasura.serverUrl,
  headers,
});

export default buildDataProvider({
  client,
  buildQuery,
}).then((dataProviderHasura) => ({
  getList: (resource, params) => dataProviderHasura(GET_LIST, resource, params),
  getOne: (resource, params) => dataProviderHasura(GET_ONE, resource, params),
  getMany: (resource, params) => dataProviderHasura(GET_MANY, resource, params),
  getManyReference: (resource, params) =>
    dataProviderHasura(GET_MANY_REFERENCE, resource, params),
  update: (resource, params) => dataProviderHasura(UPDATE, resource, params),
  updateMany: (resource, params) =>
    dataProviderHasura(UPDATE_MANY, resource, params),
  create: (resource, params) => dataProviderHasura(CREATE, resource, params),
  delete: (resource, params) => dataProviderHasura(DELETE, resource, params),
  deleteMany: (resource, params) =>
    dataProviderHasura(DELETE_MANY, resource, params),
}));
