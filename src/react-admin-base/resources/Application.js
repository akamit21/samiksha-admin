import React from 'react';
import {
  List,
  Create,
  Edit,
  Datagrid,
  EditButton,
  TextField,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  ArrayInput,
  required,
} from 'react-admin';
import CustomJSONEditor from '../components/ra-custom-compontents/jsonEditor.ra.custom.component';

export const ApplicationList = (props) => (
  <List
    {...props}
    filterDefaultValues={{ ids: ['f0ddb3f6-091b-45e4-8c0f-889f89d4f5da', '1ae074db-32f3-4714-a150-cc8a370eafd1'] }}
  >
    <Datagrid rowClick='edit'>
      <TextField source='id'/>
      <TextField source='name'/>
      <EditButton/>
    </Datagrid>
  </List>
);

/**
 * Create new student
 * @param {*} props
 */
export const ApplicationCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        label='Name'
        source='name'
        validate={[required()]}
        variant='outlined'
      />
      <ArrayInput source='data.dynamicConfig'>
        <SimpleFormIterator>
          <TextInput
            label='Key'
            source='key'
            validate={[required()]}
            variant='outlined'
          />
          <TextInput
            label='Value'
            source='value'
            validate={[required()]}
            variant='outlined'
          />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

export const ApplicationEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput
        label='Name'
        source='name'
        validate={[required()]}
        variant='outlined'
      />
      <ArrayInput source='data.dynamicConfig'>
        <SimpleFormIterator>
          <TextInput
            label='Key'
            source='key'
            validate={[required()]}
            variant='outlined'
          />
          <TextInput
            label='Value'
            source='value'
            validate={[required()]}
            variant='outlined'
          />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
