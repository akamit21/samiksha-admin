import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function RadioButtonsGroup() {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl component='fieldset' className={classes.formControl}>
        <FormLabel component='legend'>Gender</FormLabel>
        <RadioGroup
          aria-label='gender'
          name='gender1'
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value='female' control={<Radio />} label='Female' />
          <FormControlLabel value='male' control={<Radio />} label='Male' />
          <FormControlLabel value='other' control={<Radio />} label='Other' />
          <FormControlLabel
            value='disabled'
            disabled
            control={<Radio />}
            label='(Disabled option)'
          />
        </RadioGroup>
      </FormControl>
      <FormControl component='fieldset' className={classes.formControl}>
        <FormLabel component='legend'>Gender</FormLabel>
        <RadioGroup
          aria-label='gender'
          name='gender2'
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value='female'
            control={<Radio color='primary' />}
            label='Female'
            labelPlacement='start'
          />
          <FormControlLabel
            value='male'
            control={<Radio color='primary' />}
            label='Male'
            labelPlacement='start'
          />
          <FormControlLabel
            value='other'
            control={<Radio color='primary' />}
            label='Other'
            labelPlacement='start'
          />
          <FormControlLabel
            value='disabled'
            disabled
            control={<Radio />}
            label='(Disabled option)'
            labelPlacement='start'
          />
        </RadioGroup>
        <FormHelperText>labelPlacement start</FormHelperText>
      </FormControl>
    </div>
  );
}
