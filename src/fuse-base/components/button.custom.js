import React from 'react';
import { EditButton } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    fontWeight: 'bold',
    padding: '10px 20px',
    // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
    '& svg': { color: 'orange' },
  },
});

const ButtonCustom = (props) => {
  const classes = useStyles();
  return <EditButton className={classes.button} {...props} />;
};

export default ButtonCustom;
