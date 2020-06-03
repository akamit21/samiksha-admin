import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Formsy from 'formsy-react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextFieldFormsy } from '../../fuse-base/@fuse/core/formsy';

const JWTLoginTab = (props) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = useRef(null);

  function disableButton() {
    setIsFormValid(false);
  }

  function enableButton() {
    setIsFormValid(true);
  }

  function handleSubmit(model) {
    props.userLogin({ username: model.email, password: model.password });
  }

  const { defaultUsername, defaultPassword } = props;

  return (
    <div className='w-full h-full'>
      <Formsy
        onValidSubmit={handleSubmit}
        onValid={enableButton}
        onInvalid={disableButton}
        ref={formRef}
        className='flex flex-col justify-center w-full'
      >
        <TextFieldFormsy
          className='mb-16'
          type='text'
          name='email'
          label='Username/Email'
          value={defaultUsername}
          validations={{
            minLength: 4,
          }}
          validationErrors={{
            minLength: 'Min character length is 4',
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <Icon className='text-20' color='action'>
                  email
                </Icon>
              </InputAdornment>
            ),
          }}
          variant='outlined'
          required
        />

        <TextFieldFormsy
          className='mb-16'
          type='password'
          name='password'
          label='Password'
          value={defaultPassword}
          validations={{
            minLength: 4,
          }}
          validationErrors={{
            minLength: 'Min character length is 4',
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <Icon className='text-20' color='action'>
                  vpn_key
                </Icon>
              </InputAdornment>
            ),
          }}
          variant='outlined'
          required
        />

        <Button
          type='submit'
          variant='contained'
          color='primary'
          className='w-full mx-auto mt-16 normal-case'
          aria-label='LOG IN'
          disabled={!isFormValid}
          value='legacy'
        >
          Login
        </Button>
      </Formsy>
    </div>
  );
};

export default JWTLoginTab;
