import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useTranslate } from 'react-admin';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();
  const translate = useTranslate();
  return (
    <div className={classes.root}>
      {translate('ra.action.add')}
      <Button variant='contained'>Default</Button>
      <Button variant='contained' color='primary'>
        Primary
      </Button>
      <Button variant='contained' color='secondary'>
        Secondary
      </Button>
      <Button variant='contained' disabled>
        Disabled
      </Button>
      <Button variant='contained' color='primary' href='#contained-buttons'>
        Link
      </Button>
    </div>
  );
}
