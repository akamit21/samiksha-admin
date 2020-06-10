import {
  AutocompleteInput,
  Create,
  Datagrid,
  Edit,
  EditButton,
  Filter,
  List,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
  required,
} from 'react-admin';

import React from 'react';

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
 * List all schools
 * @param {*} props
 */
export const SchoolList = (props) => (
  <List filters={<SearchFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='schoolname' />
      <TextField source='district' label='District' />
      <TextField source='block' label='Block' />
      <EditButton />
    </Datagrid>
  </List>
);

/**
 * Create new school
 * @param {*} props
 */
export const SchoolCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        label='Name'
        source='schoolname'
        validate={[required()]}
        variant='outlined'
      />
    </SimpleForm>
  </Create>
);

/**
 * Edit school details
 * @param {*} props
 */
export const SchoolEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput
        label='Name'
        source='schoolname'
        validate={[required()]}
        variant='outlined'
      />
    </SimpleForm>
  </Edit>
);
