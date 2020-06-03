import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import UserNavbarHeader from './UserNavbarHeader';
import FuseNavVerticalCollapse from './FuseNavVerticalCollapse';
import FuseNavVerticalItem from './FuseNavVerticalItem';

// sidebar menu
const sidebarConfig = require('../../../sidebar-config');

const navbarWidth = 280;

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
    // overflow: "hidden",
    flexDirection: 'column',
    flex: '1 1 auto',
    width: navbarWidth,
    minWidth: navbarWidth,
    // height: "100%",
    zIndex: 4,
    transition: theme.transitions.create(['width', 'min-width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shorter,
    }),
    // boxShadow: theme.shadows[3],
  },
  navbarContent: {
    flex: '1 1 auto',
  },
}));

const CustomSidebar = (props) => {
  const [activePath, setActivePath] = useState(null);

  const { location } = props;
  useEffect(() => {
    const pathname = location.pathname.replace(/\//, '');
    if (activePath !== pathname) {
      setActivePath(pathname);
    }
  }, [location, activePath]);

  return <NavbarWrapperLayout activePath={activePath} />;
};

const NavbarWrapperLayout = React.memo(function NavbarWrapperLayout({
  activePath,
}) {
  const config = {
    mode: 'fullwidth',
    scroll: 'content',
    navbar: { display: true, folded: false, position: 'left' },
    toolbar: { display: true, style: 'fixed', position: 'below' },
    footer: { display: true, style: 'fixed', position: 'below' },
    leftSidePanel: { display: true },
    rightSidePanel: { display: true },
  };

  // const navbar = { foldedOpen: false, mobileOpen: false };
  const classes = useStyles();
  const { folded } = config.navbar;
  return (
    <>
      <div
        id='fuse-navbar'
        className={clsx(classes.wrapper, folded && classes.wrapperFolded)}
        style={{ backgroundColor: '#121212' }}
      >
        <div
          className={clsx(classes.navbar, classes[config.navbar.position])}
          style={{ backgroundColor: '#121212' }}
        >
          <div
            className={clsx(
              'flex flex-col overflow-hidden h-full',
              classes.navbarContent
            )}
          >
            <UserNavbarHeader />
            {sidebarConfig.map((item, index) => {
              if (item.children)
                return (
                  <FuseNavVerticalCollapse
                    key={index}
                    activePath={activePath}
                    item={item}
                    nestedLevel={0}
                  />
                );
              return (
                <FuseNavVerticalItem
                  activePath={activePath}
                  key={index}
                  item={item}
                  nestedLevel={0}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
});

export default withRouter((props) => <CustomSidebar {...props} />);
