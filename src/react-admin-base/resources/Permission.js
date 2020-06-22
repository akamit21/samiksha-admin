import React from 'react';
import {
  List,
  Create,
  Edit,
  Datagrid,
  EditButton,
  TextField,
  SimpleForm,
  TextInput,
  required,
} from 'react-admin';

export const PermissionList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='name' />
      <EditButton />
    </Datagrid>
  </List>
);

/**
 * Create new student
 * @param {*} props
 */
export const PermissionCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        label='Name'
        source='name'
        validate={[required()]}
        variant='outlined'
      />
    </SimpleForm>
  </Create>
);

export const PermissionEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput
        label='Name'
        source='name'
        validate={[required()]}
        variant='outlined'
      />
    </SimpleForm>
  </Edit>
);
