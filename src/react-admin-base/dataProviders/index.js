import hasuraDataProvider from './hasuraDataProvider';
import jsonServerDataProvider from './jsonServerDataProvider';
import lb4DataProvider from './lb4Dataprovider';
import userDataProvider from './userDataProvider';

export default hasuraDataProvider.then((hDP) => {
  const dataProviderResources = {
    user: userDataProvider,
    default: hDP,
    locations: jsonServerDataProvider,
    roles: jsonServerDataProvider('http://luezoid.com:3390'),
    resources: jsonServerDataProvider('http://luezoid.com:3390'),
    permissions: jsonServerDataProvider('http://luezoid.com:3390'),
    'ele-mentor-visits-v1s': lb4DataProvider,
    'ele-monitor-visits-v4s': lb4DataProvider,
    'ele-ssa-visits-v1s': lb4DataProvider,
    'sampark-pro-visits-v1s': lb4DataProvider,
    'sat-visits': lb4DataProvider,
    'sec-mentor-visits-v1s': lb4DataProvider,
    'sec-monitor-visits-v1s': lb4DataProvider,
    'sec-ssa-visits-v1s': lb4DataProvider,
    'slo-visits-v1s': lb4DataProvider,
    'slo-visits-v2s': lb4DataProvider,
  };
  if (!dataProviderResources.default) {
    console.error('!! IMPORTANT !! Default config needed for data provider');
  }
  const methodDefinations = [
    'getList',
    'getOne',
    'getMany',
    'getManyReference',
    'update',
    'updateMany',
    'create',
    'delete',
    'deleteMany',
  ];
  const methods = {};
  methodDefinations.forEach((methodDefinition) => {
    methods[methodDefinition] = (resource, params) =>
      (dataProviderResources[resource] || dataProviderResources.default)[
        methodDefinition
      ](resource, params);
  });
  return methods;
});
