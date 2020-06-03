import React from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const NavbarMobileToggleButton = (props) => {
  const { className, children } = props;
  return (
    <IconButton className={className} color='inherit' disableRipple>
      {children}
    </IconButton>
  );
};

NavbarMobileToggleButton.defaultProps = {
  children: <Icon>menu</Icon>,
};

export default NavbarMobileToggleButton;
