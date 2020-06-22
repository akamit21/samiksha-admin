import React from 'react';
import {
  List,
  Create,
  Edit,
  Datagrid,
  EditButton,
  TextField,
  ReferenceField,
  SimpleFormIterator,
  SimpleForm,
  TextInput,
  SelectInput,
  ReferenceInput,
  required,
  ArrayInput,
} from 'react-admin';

export const ResourceList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='name' />
      {/*<ReferenceField*/}
      {/*  label='Parent Resource'*/}
      {/*  source='parentId'*/}
      {/*  reference='resources'*/}
      {/*>*/}
      {/*  <TextField source='name' />*/}
      {/*</ReferenceField>*/}
      <EditButton />
    </Datagrid>
  </List>
);

/**
 * Create new student
 * @param {*} props
 */
export const ResourceCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        label='Name'
        source='name'
        validate={[required()]}
        variant='outlined'
      />
      <ReferenceInput
        label='Parent Resource'
        source='parentId'
        reference='resources'
        perPage={100}
      >
        <SelectInput optionText='name' />
      </ReferenceInput>
      <ArrayInput source='permissions'>
        <SimpleFormIterator>
          <ReferenceInput
            label='Permissions'
            reference='permissions'
            perPage={100}
          >
            <SelectInput optionText='name' />
          </ReferenceInput>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

export const ResourceEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput
        label='Name'
        source='name'
        validate={[required()]}
        variant='outlined'
      />
      <ReferenceInput
        label='Parent Role'
        source='parentId'
        reference='resources'
        perPage={100}
      >
        <SelectInput optionText='name' />
      </ReferenceInput>
      <ArrayInput source='permissions'>
        <SimpleFormIterator>
          <ReferenceInput
            label='Permissions'
            reference='permissions'
            perPage={100}
          >
            <SelectInput optionText='name' />
          </ReferenceInput>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
