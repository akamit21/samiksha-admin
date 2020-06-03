import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import FuseNavVerticalCollapse from './FuseNavVerticalCollapse';
import FuseNavVerticalItem from './FuseNavVerticalItem';
import UserNavbarHeader from './UserNavbarHeader';
import Logo from './Logo';

// side bar menu
const sidebarConfig = require('../../../sidebar-config');

const NavbarLayout1 = (props) => {
  const { className } = props;
  return (
    <div className={clsx('flex flex-col overflow-hidden h-full', className)}>
      <AppBar
        color='primary'
        position='static'
        elevation={0}
        className='flex flex-row items-center flex-shrink h-64 min-h-64 pl-20 pr-12'
      >
        <div className='flex flex-1 pr-8'>
          <Logo />
        </div>
      </AppBar>

      <UserNavbarHeader />
      {sidebarConfig.map((item, index) => {
        if (item.children)
          return (
            <FuseNavVerticalCollapse key={index} item={item} nestedLevel={1} />
          );
        return <FuseNavVerticalItem key={index} item={item} nestedLevel={0} />;
      })}
    </div>
  );
};

export default NavbarLayout1;
