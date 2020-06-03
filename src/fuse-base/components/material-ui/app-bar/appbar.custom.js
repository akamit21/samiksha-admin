// in src/MyAppBar.js
import React from 'react';
import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import LanguageSwitcher from '../../../../react-admin-base/components/ra-custom-compontents/ra.language-switcher.component';
import UserMenu from '../../../../react-admin-base/components/ra-custom-compontents/UserMenu';

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  spacer: {
    flex: 1,
  },
});
const appConfig = require('../../../../config');

const AppBarCustom = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div style={{ height: '54px' }} />
      <AppBar
        id='fuse-toolbar'
        className='flex relative z-10 main-header'
        color='default'
        style={{ backgroundColor: 'white' }}
      >
        <Toolbar className='p-0' style={{ flexGrow: '1' }}>
          <div className='flex flex-1'>
            <Typography variant='h6' color='inherit' className={classes.title}>
              {appConfig.appMeta.name}
            </Typography>
          </div>
          <div className='flex'>
            <LanguageSwitcher />
            <div className={classes.separator} />
            <UserMenu data={{ logout: props.logout }} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default React.memo(AppBarCustom);
