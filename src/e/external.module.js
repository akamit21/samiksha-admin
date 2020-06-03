import React from 'react';
import { Route } from 'react-router-dom';
import AllComponents from '../fuse-base/components/lazy.components';
import MaintenancePage from './pages/maintenance.page';
import DashboardPage from './pages/dashboard.page';

import SecondaryStatePage from './pages/secondary/state.page';
import SecondaryDistrictPage from './pages/secondary/district.page';
import SecondaryBlockPage from './pages/secondary/block.page';
import SecondarySchoolPage from './pages/secondary/school.page';

import ElementaryStatePage from './pages/elementary/state.page';
import ElementaryDistrictPage from './pages/elementary/district.page';
import ElementaryBlockPage from './pages/elementary/block.page';
import ElementarySchoolPage from './pages/elementary/school.page';

const ExternalModule = () => (
  <>
    <Route path='/e/all-components' component={AllComponents} />
    <Route path='/e/maintenance' component={MaintenancePage} />
    <Route path='/e/dashboard' component={DashboardPage} />

    {/* secondary */}
    <Route path='/e/secondary/state-dashboard' component={SecondaryStatePage} />
    <Route
      path='/e/secondary/district-dashboard'
      component={SecondaryDistrictPage}
    />
    <Route path='/e/secondary/block-dashboard' component={SecondaryBlockPage} />
    <Route
      path='/e/secondary/school-dashboard'
      component={SecondarySchoolPage}
    />

    {/* elementary */}
    <Route
      path='/e/elementary/state-dashboard'
      component={ElementaryStatePage}
    />
    <Route
      path='/e/elementary/district-dashboard'
      component={ElementaryDistrictPage}
    />
    <Route
      path='/e/elementary/block-dashboard'
      component={ElementaryBlockPage}
    />
    <Route
      path='/e/elementary/school-dashboard'
      component={ElementarySchoolPage}
    />
  </>
);

export default React.memo(ExternalModule);
