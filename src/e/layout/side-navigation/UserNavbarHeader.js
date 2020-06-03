import React, { useEffect, useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { store } from '../../utils/localsotage.service';

const useStyles = makeStyles((theme) => ({
  root: {
    '&.user': {
      '& .username, & .email': {
        transition: theme.transitions.create('opacity', {
          duration: theme.transitions.duration.shortest,
          easing: theme.transitions.easing.easeInOut,
        }),
      },
    },
  },
  avatar: {
    width: 72,
    height: 72,
    position: 'absolute',
    top: 80,
    padding: 8,
    background: theme.palette.background.default,
    boxSizing: 'content-box',
    left: '50%',
    transform: 'translateX(-50%)',
    transition: theme.transitions.create('all', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
    '& > img': {
      borderRadius: '50%',
    },
  },
}));

const UserNavbarHeader = () => {
  // const user = { data: {} };
  const classes = useStyles();
  const [user, setUser] = useState(null);

  useEffect(() => {
    store.getItem('user').then((d) => {
      if (d) {
        setUser(d.user);
      }
    });
  }, []);
  return (
    <AppBar
      position='static'
      color='primary'
      elevation={0}
      classes={{ root: classes.root }}
      className='user relative flex flex-col items-center justify-center pt-24 pb-32 mb-60 z-0'
    >
      <Typography
        className='username text-16 whitespace-no-wrap'
        color='inherit'
      >
        {user && user !== '' ? user.fullName : 'Samarth'}
      </Typography>
      <Typography
        className='email text-13 mt-8 mb-16 opacity-50 whitespace-no-wrap'
        color='inherit'
      >
        {user && user !== '' ? user.email : ''}
      </Typography>
      <Avatar
        className={clsx(classes.avatar, 'avatar')}
        alt='user photo'
        src={
          user && user.photoURL !== ''
            ? user.photoURL
            : 'assets/images/avatars/logo.jpeg'
        }
      />
    </AppBar>
  );
};

export default UserNavbarHeader;
