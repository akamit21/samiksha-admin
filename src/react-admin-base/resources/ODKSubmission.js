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
  BooleanInput,
  DateTimeInput,
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
 * List all odk submission
 * @param {*} props
 */
export const ODKSubmissionList = (props) => (
  <List filters={<SearchFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='form_id' />
      <TextField source='data' />
      <TextField source='status' />
      <TextField source='form_name_id' />
      <TextField source='school_udise' />
      <EditButton />
    </Datagrid>
  </List>
);

/**
 * Create new odk
 * @param {*} props
 */
export const ODKSubmissionCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        label='Form ID'
        source='form_id'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Data'
        source='data'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Status'
        source='status'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Form Name ID'
        source='form_name_id'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='School'
        source='school_udise'
        validate={[required()]}
        variant='outlined'
      />
      <DateTimeInput
        label='Submission Date'
        source='submission_date'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='XML Data'
        source='xml'
        validate={[required()]}
        variant='outlined'
      />
      <BooleanInput
        label='Is duplicate notification sent?'
        source='is_duplicate_notification_sent'
      />
      <BooleanInput label='Is duplicate?' source='is_duplicate' />
    </SimpleForm>
  </Create>
);

/**
 * Edit odk submission details
 * @param {*} props
 */
export const ODKSubmissionEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput
        label='Form ID'
        source='form_id'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Data'
        source='data'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Status'
        source='status'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Form Name ID'
        source='form_name_id'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='School'
        source='school_udise'
        validate={[required()]}
        variant='outlined'
      />
      <DateTimeInput
        label='Submission Date'
        source='submission_date'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='XML Data'
        source='xml'
        validate={[required()]}
        variant='outlined'
      />
      <BooleanInput
        label='Is duplicate notification sent?'
        source='is_duplicate_notification_sent'
      />
      <BooleanInput label='Is duplicate?' source='is_duplicate' />
    </SimpleForm>
  </Edit>
);
