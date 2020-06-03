const GET_LIST = 'GET_LIST';
const GET_ONE = 'GET_ONE';
const GET_MANY = 'GET_MANY';
const CREATE = 'CREATE';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';
const { FusionAuthClient } = require('@fusionauth/node-client');

function fusionAuthDataProvider(
  config = { fusionAuthAPIKey: '', fusionAuthURL: '' }
) {
  if (!config.fusionAuthAPIKey || !config.fusionAuthURL) {
    console.log(
      '!! IMPORTANT || Fusion auth details required in config !!! (fusionAuthAPIKey and fusionAuthURL)'
    );
  }

  return (type, resource, params) => {
    const client = new FusionAuthClient(
      config.fusionAuthAPIKey,
      config.fusionAuthURL
    );
    switch (type) {
      case GET_LIST: {
        const { page, perPage } = params.pagination;
        const startRow = (page - 1) * perPage;
        const sortFields = [];
        if (params.sort && params.sort.field !== 'id') {
          const sort = {};
          sort.name = params.sort.field;
          if (params.sort.order) {
            sort.order = params.sort.order.toLowerCase();
          }
          sortFields.push(sort);
        }

        let queryString = `(registrations.applicationId: ${config.fusionAuthApplicationId})`;
        const {
          filter: { globalSearch },
        } = params;
        if (globalSearch) {
          queryString += `AND(${globalSearch}*)`;
          delete params.filter.globalSearch;
        }
        Object.keys(params.filter).forEach((i) => {
          if (i === 'district') {
            queryString += `AND(data.district:${params.filter[i]})`;
          } else {
            queryString += `AND(${i}:${params.filter[i]})`;
          }
        });
        const body = {
          search: {
            queryString,
            sortFields,
            numberOfResults: perPage,
            startRow,
          },
        };
        try {
          return client
            .searchUsersByQueryString(body)
            .then((response) => {
              const users = response.successResponse.users || [];
              return {
                data: users,
                total: response.successResponse.total,
              };
            })
            .catch((e) => {
              console.log(e);
              return {
                data: [],
                total: 0,
              };
            });
        } catch (error) {
          console.log(error);
          return {
            data: [],
            total: 0,
          };
        }
      }
      case GET_MANY: {
        try {
          return client
            .searchUsers(params.ids || [])
            .then((response) => {
              return {
                data: response.successResponse.users,
                total: response.successResponse.total,
              };
            })
            .catch(() => {
              return {
                data: [],
                total: 0,
              };
            });
        } catch (error) {
          console.log('Get Many Catch', error);
          return {
            data: [],
            total: 0,
          };
        }
      }
      case GET_ONE: {
        try {
          return client
            .retrieveUser(params.id)
            .then((response) => {
              return {
                data: response.successResponse.user,
              };
            })
            .catch(() => {
              return {
                data: null,
                total: 0,
              };
            });
        } catch (error) {
          console.log('Get One Catch', error);
          return {
            data: null,
            total: 0,
          };
        }
      }
      case CREATE: {
        try {
          return client
            .register(params.data.id, {
              user: params.data,
              registration: {
                applicationId: config.fusionAuthApplicationId,
              },
            })
            .then((response) => {
              return {
                data: response.successResponse.user,
              };
            })
            .catch(() => {
              return {
                data: null,
              };
            });
        } catch (error) {
          console.log('Create Catch', error);
          return {
            data: null,
          };
        }
      }
      case UPDATE: {
        try {
          return client
            .updateUser(params.id || params.uuid, { user: params.data })
            .then((response) => {
              return {
                data: response.successResponse.user,
              };
            })
            .catch(() => {
              return {
                data: null,
              };
            });
        } catch (error) {
          console.log('Update Catch', error);
          return {
            data: null,
          };
        }
      }
      case DELETE: {
        try {
          return client
            .deleteUser(params.id || params.uuid)
            .then((response) => {
              return {
                data: response.successResponse.user,
              };
            })
            .catch(() => ({
              data: null,
            }));
        } catch (error) {
          console.log('Delete Catch', error);
          return {
            data: null,
          };
        }
      }
      default:
    }
    return null;
  };
}

export default fusionAuthDataProvider;
