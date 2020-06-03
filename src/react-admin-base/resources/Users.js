import React from 'react';
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  PasswordInput,
  BooleanInput,
  required,
  minLength,
} from 'react-admin';

/**
 * Create new user
 * @param {*} props
 */
export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        label='Username'
        source='username'
        validate={[required(), minLength(4)]}
        variant='outlined'
      />
      <PasswordInput
        label='Password'
        source='password'
        validate={[required()]}
        variant='outlined'
      />
    </SimpleForm>
  </Create>
);

/**
 * Edit User Details
 */
export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput
        label='First Name'
        source='firstName'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='LastName'
        source='lastName'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Username'
        source='username'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Mobile Phone'
        source='mobilePhone'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Email Id'
        source='email'
        validate={[required()]}
        variant='outlined'
      />
      <BooleanInput source='active' />
    </SimpleForm>
  </Edit>
);
