import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { store } from '../../../e/utils/localsotage.service';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: undefined };
  }

  componentDidMount = () => {
    store.getItem('user').then((d) => {
      this.setState({
        user: d ? d.user : undefined,
      });
    });
  };

  render() {
    const { user } = this.state;
    const {
      data: { logout },
    } = this.props;
    if (user) {
      return <UserMenuComponent user={user} logout={logout} />;
    }
    return <></>;
  }
}

function UserMenuComponent({ user, logout }) {
  const [userMenu, setUserMenu] = useState(null);

  const userMenuClick = (event) => {
    setUserMenu(event.currentTarget);
  };

  const userMenuClose = () => {
    setUserMenu(null);
  };
  return (
    <>
      <Button className='h-64' onClick={userMenuClick}>
        {user.data && user.data.photoURL ? (
          <Avatar className='' alt='user photo' src={user.data.photoURL} />
        ) : (
          <Avatar className=''>{user.firstName}</Avatar>
        )}

        <div className='hidden md:flex flex-col mx-12 items-start'>
          <Typography component='span' className='normal-case font-600 flex'>
            {user.fullName}
          </Typography>
        </div>

        <Icon className='text-16 hidden sm:flex' variant='action'>
          keyboard_arrow_down
        </Icon>
      </Button>

      <Popover
        open={Boolean(userMenu)}
        anchorEl={userMenu}
        onClose={userMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{
          paper: 'py-8',
        }}
      >
        <>{logout}</>
      </Popover>
    </>
  );
}

export default UserMenu;
