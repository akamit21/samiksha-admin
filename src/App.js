import { Admin, Resource } from 'react-admin';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { Provider } from 'react-redux';
import React from 'react';
import { Route } from 'react-router-dom';
import { createHashHistory } from 'history';
import englishMessages from 'ra-language-english';
import frenchMessages from 'ra-language-french';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import { UserCreate, UserEdit } from './react-admin-base/resources/Users';

import { ComponentsIcon } from './fuse-base/components/all.components';
import CustomLayout from './react-admin-base/layout';

import Error404Page from './e/pages/Error404Page';
import ExternalModule from './e/external.module';
import LoginPage from './e/pages/login.page';
import UserList from './react-admin-base/resources/Userlist';
import authProviderPackage from './react-admin-base/authProvider';
import createAdminStore from './react-admin-base/createAdminStore';
import dP from './react-admin-base/dataProviders';

import {
  RoleCreate,
  RoleEdit,
  RoleList,
} from './react-admin-base/resources/Role';
import {
  ResourceCreate,
  ResourceEdit,
  ResourceList,
} from './react-admin-base/resources/Resources';
import {
  PermissionCreate,
  PermissionEdit,
  PermissionList,
} from './react-admin-base/resources/Permission';
import {
  ApplicationEdit,
  ApplicationList,
} from './react-admin-base/resources/Application';

import {
  SchoolCreate,
  SchoolEdit,
  SchoolList,
} from './react-admin-base/resources/School';
import { ElemMentorVisitList } from './react-admin-base/resources/odk/ElemMentorVisit';
import { ElemMonitorVisitList } from './react-admin-base/resources/odk/ElemMonitorVisit';
import { ElemSSAVisitList } from './react-admin-base/resources/odk/ElemSSAVisit';
import { SamparkVisitList } from './react-admin-base/resources/odk/SamparkVisit';
import { SATVisitList } from './react-admin-base/resources/odk/SATVisit';
import { SecMentorVisitList } from './react-admin-base/resources/odk/SecMentorVisit';
import { SecMonitorVisitList } from './react-admin-base/resources/odk/SecMonitorVisit';
import { SecSSAVisitList } from './react-admin-base/resources/odk/SecSSAVisit';
import { SLOVisitV1List } from './react-admin-base/resources/odk/SLOVisitV1';
import { SLOVisitV2List } from './react-admin-base/resources/odk/SLOVisitV2';

const messages = {
  tr: frenchMessages,
  en: englishMessages,
};

const i18nProvider = polyglotI18nProvider((locale) => messages[locale], 'en');

const config = require('./config');
const theme = require('./fuse-base/themes/initial-theme.json');

const history = createHashHistory();
const customRoutes = [
  <Route path='/e' component={ExternalModule} icon={ComponentsIcon} />,
];
const authProvider = authProviderPackage(config.fusionAuth);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataProvider: null };
  }

  componentDidMount() {
    dP.then((dataProvider) => {
      this.setState({ dataProvider });
    });
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return <div>Loading</div>;
    }

    return (
      <Provider
        store={createAdminStore({
          authProvider,
          history,
          i18nProvider,
          dataProvider,
        })}
      >
        <MuiThemeProvider theme={createMuiTheme(theme)}>
          <Admin
            i18nProvider={i18nProvider}
            catchAll={Error404Page}
            layout={CustomLayout}
            authProvider={authProvider}
            dataProvider={dataProvider}
            customRoutes={customRoutes}
            loginPage={LoginPage}
            theme={createMuiTheme(theme)}
            history={history}
            title='My Admin'
          >
            <Resource
              name='user'
              list={UserList}
              edit={UserEdit}
              create={UserCreate}
              icon={ComponentsIcon}
            />

            <Resource
              name='haryana_schools_info'
              list={SchoolList}
              create={SchoolCreate}
              edit={SchoolEdit}
              icon={ComponentsIcon}
            />

            {/* role, resources, permission */}
            <Resource
              name='roles'
              list={RoleList}
              create={RoleCreate}
              edit={RoleEdit}
              icon={ComponentsIcon}
            />
            <Resource
              name='resources'
              list={ResourceList}
              create={ResourceCreate}
              edit={ResourceEdit}
              icon={ComponentsIcon}
            />
            <Resource
              name='permissions'
              list={PermissionList}
              create={PermissionCreate}
              edit={PermissionEdit}
              icon={ComponentsIcon}
            />
            <Resource
              name='application'
              list={ApplicationList}
              edit={ApplicationEdit}
              icon={ComponentsIcon}
            />

            {/* odk */}
            <Resource
              name='ele-mentor-visits-v1s'
              list={ElemMentorVisitList}
              icon={ComponentsIcon}
            />
            <Resource
              name='ele-monitor-visits-v4s'
              list={ElemMonitorVisitList}
              icon={ComponentsIcon}
            />
            <Resource
              name='ele-ssa-visits-v1s'
              list={ElemSSAVisitList}
              icon={ComponentsIcon}
            />
            <Resource
              name='sampark-pro-visits-v1s'
              list={SamparkVisitList}
              icon={ComponentsIcon}
            />
            <Resource
              name='sat-visits'
              list={SATVisitList}
              icon={ComponentsIcon}
            />
            <Resource
              name='sec-mentor-visits-v1s'
              list={SecMentorVisitList}
              icon={ComponentsIcon}
            />
            <Resource
              name='sec-monitor-visits-v1s'
              list={SecMonitorVisitList}
              icon={ComponentsIcon}
            />
            <Resource
              name='sec-ssa-visits-v1s'
              list={SecSSAVisitList}
              icon={ComponentsIcon}
            />
            <Resource
              name='slo-visits-v1s'
              list={SLOVisitV1List}
              icon={ComponentsIcon}
            />
            <Resource
              name='slo-visits-v2s'
              list={SLOVisitV2List}
              icon={ComponentsIcon}
            />
          </Admin>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
