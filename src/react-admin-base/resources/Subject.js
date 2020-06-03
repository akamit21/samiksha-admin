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
  Filter,
  required,
} from 'react-admin';

/**
 * Filter
 * @param {*} props
 */
const SearchFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
  </Filter>
);

/**
 * List all subjects
 * @param {*} props
 */
export const SubjectList = (props) => (
  <List filters={<SearchFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='name' />
      <EditButton />
    </Datagrid>
  </List>
);

/**
 * Create new subject
 * @param {*} props
 */
export const SubjectCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        label='Subject'
        source='name'
        validate={[required()]}
        variant='outlined'
      />
    </SimpleForm>
  </Create>
);

/**
 * Edit subject details
 * @param {*} props
 */
export const SubjectEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput
        label='Subject'
        source='name'
        validate={[required()]}
        variant='outlined'
      />
    </SimpleForm>
  </Edit>
);
