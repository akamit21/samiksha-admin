import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { darken } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import FuseAnimate from '../../fuse-base/@fuse/core/FuseAnimate';
import JWTLoginTab from './JWTLoginTab';
import logo from '../../assets/logo.png';

const config = require('../../config');

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(to right, ${
      theme.palette.primary.dark
    } 0%, ${darken(theme.palette.primary.dark, 0.5)} 100%)`,
    color: theme.palette.primary.contrastText,
  },
}));

const Login = (props) => {
  const { userLogin, defaultUsername, defaultPassword } = props;
  const classes = useStyles();
  return (
    <div
      className={clsx(
        classes.root,
        'flex flex-col flex-1 flex-shrink-0 p-24 md:flex-row md:p-0 h-full'
      )}
    >
      <div className='flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left'>
        <FuseAnimate animation='transition.expandIn'>
          <img className='w-400 mb-32' src={logo} alt='logo' />
        </FuseAnimate>

        <FuseAnimate animation='transition.slideUpIn' delay={300}>
          <Typography variant='h3' color='inherit' className='font-light'>
            {config.appMeta.loginPage.title}
          </Typography>
        </FuseAnimate>

        <FuseAnimate delay={400}>
          <Typography
            variant='subtitle1'
            color='inherit'
            className='max-w-512 mt-16'
          >
            {config.appMeta.loginPage.subTitle}
          </Typography>
        </FuseAnimate>
      </div>

      <FuseAnimate animation={{ translateX: [0, '100%'] }}>
        <Card className='w-full max-w-400 mx-auto m-16 md:m-0' square>
          <CardContent className='flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 '>
            <Typography variant='h6' className='text-center md:w-full mb-48'>
              LOGIN TO YOUR ACCOUNT
            </Typography>

            <JWTLoginTab
              userLogin={userLogin}
              defaultUsername={defaultUsername}
              defaultPassword={defaultPassword}
            />
          </CardContent>
        </Card>
      </FuseAnimate>
    </div>
  );
};

export default Login;
