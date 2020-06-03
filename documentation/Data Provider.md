# Data Providers

Whenever react-admin needs to communicate with the API, it calls methods on the Data Provider object.

    dataProvider
    .getOne('posts', { id: 123 })
    .then(response => {
        console.log(response.data); // { id: 123, title: "hello, world" }
    });

We have implemented a system where you can have multiple data providers .

All the data providers goes into `src/react-admin-base/dataProviders/`

We can have custom implemented data providers too which will implement following methods of react-admin data providers

- For Example:

`

     const {FusionAuthClient} = require("@fusionauth/node-client");
    const config = require("../../config");

    const oldDataProvider = (type, resource, params) => {
        let client = new FusionAuthClient(
            config.fusionAuth.fusionAuthAPIKey,
            config.fusionAuth.fusionAuthURL
        );
        switch (type) {
            case GET_LIST:
                const {page, perPage} = params.pagination;
                const startRow = (page - 1) * perPage;
                const sortFields = [];
                if (params.sort && params.sort.field !== "id") {
                    const sort = {};
                    sort["name"] = params.sort.field;
                    if (params.sort.order) {
                        sort["order"] = params.sort.order.toLowerCase();
                    }
                    sortFields.push(sort);
                }


            let queryString = `(registrations.applicationId: ${config.fusionAuth.fusionAuthApplicationId})`;
            if (params.filter && params.filter['globalSearch']) {
                queryString += 'AND(' + params.filter['globalSearch'] + '*)';
                delete params.filter['globalSearch'];
            }
            for (let i in params.filter) {
                if (i === "district") {
                    queryString += `AND(data.district:${params.filter[i]})`;
                } else {
                    queryString += `AND(${i}:${params.filter[i]})`;
                }
            }
            const body = {
                search: {
                    queryString: queryString,
                    sortFields: sortFields,
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
                        return {
                            data: [],
                            total: 0,
                        };
                    });
            } catch (error) {
                return {
                    data: [],
                    total: 0,
                };
            }


        case GET_ONE:
            try {
                return client
                    .retrieveUser(params.id)
                    .then((response) => {
                        return {
                            data: response.successResponse.user,
                        };
                    })
                    .catch((e) => {
                        return {
                            data: null,
                            total: 0,
                        };
                    });
            } catch (error) {
                console.log("GET One CATCH", error);
            }
    	...
       };
    export default {
    getList: (resource, params) => oldDataProvider(GET_LIST, resource, params),
    getOne: (resource, params) => oldDataProvider(GET_ONE, resource, params),
     ...
     };

Here you will override default methods of react-admin to implement custom promises according to your need.

### Available Methods to overrid

- CREATE
- DELETE
- GET_LIST
- GET_MANY
- GET_MANY_REFERENCE
- GET_ONE
- UPDATE

First implement custom promise in switch case like following

    case GET_ONE:
                try {
                    return client
                        .retrieveUser(params.id)
                        .then((response) => {
                            return {
                                data: response.successResponse.user,
                            };
                        })
                        .catch((e) => {
                            return {
                                data: null,
                                total: 0,
                            };
                        });
                } catch (error) {
                    console.log("GET One CATCH", error);
                }

then export it like following

    getOne: (resource, params) => oldDataProvider(GET_ONE, resource, params),

you will get resource name in _resource_ parameter and all the params like body/query/filters in params to create your customized promise.

You will have to register your providers insite `src/react-admin-base/dataProvider/index.js`
While doing that, you'll have to put conditions on which resource you want to use which data provider shown as follows.

    import hasuraDataProvider from "./hasuraDataProvider";
    import userDataProvider from "./userDataProvider";
        const dataProviderResources = {
            'user': userDataProvider,
          'default': hasuraDataProvider
        };

here, you'll have to populate _dataProviderResources_ object with resources as key and data Provider as value.
**default** is mendatory as a data provider in this, as everytime when any the resource is not assigned explicitly in this configuration, it will automatically fallback to the default data provider.
