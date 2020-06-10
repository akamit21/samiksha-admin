import React, { useState } from 'react';
import { Button, useDataProvider, useNotify } from 'react-admin';
import IconContentAdd from '@material-ui/icons/Add';
import IconCancel from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { TextField } from '@material-ui/core';

function PasswordChangeButton({ record }) {
  console.log(record, 'record');
  const [showDialog, setShowDialog] = useState(false);
  const [state, setState] = useState({
    password: '',
    cnfPassword: '',
  });
  const notify = useNotify();
  const dataProvider = useDataProvider();

  const handleClick = () => {
    setShowDialog(true);
  };

  const handleCloseClick = () => {
    setShowDialog(false);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { password, cnfPassword } = state;
    if (password !== cnfPassword) {
      notify("Passwords don't match");
    } else {
      dataProvider
        .update('users', {
          id: record.id,
          data: { password, username: record.username },
        })
        .then(() => {
          // success side effects go here
          notify('Password Changed');
          setShowDialog(false);
        })
        .catch((error) => {
          // failure side effects go here
          notify(`${error.message}`, 'warning');
        });
    }
  };

  return (
    <>
      <Button onClick={handleClick} label='Change Password'>
        <IconContentAdd />
      </Button>
      <Dialog
        fullWidth
        open={showDialog}
        onClose={handleCloseClick}
        aria-label='Create post'
      >
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          {/* <Input source='password' ref={inputRef} fullWidth /> */}
          <TextField
            label='Password'
            name='password'
            type='password'
            margin='normal'
            variant='outlined'
            onChange={(e) => handleChange(e)}
            fullWidth
          />
          <TextField
            label='Confirm Password'
            name='cnfPassword'
            type='password'
            margin='normal'
            variant='outlined'
            onChange={(e) => handleChange(e)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button label='ra.action.cancel' onClick={handleCloseClick}>
            <IconCancel />
          </Button>
          <Button label='Save' onClick={handleSubmit}>
            <SaveIcon />
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default PasswordChangeButton;
