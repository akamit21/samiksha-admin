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
  NumberInput,
  Filter,
  required,
} from 'react-admin';

// const dataRenderer = (choice) => {
//   return `${choice.number} ${choice.section}`;
// };

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
 * List all submission summary
 * @param {*} props
 */
export const SubmissionSummaryList = (props) => (
  <List filters={<SearchFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <EditButton />
    </Datagrid>
  </List>
);

/**
 * Create new submission summary
 * @param {*} props
 */
export const SubmissionSummaryCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        label='Assessment'
        source='assesment_id'
        validate={[required()]}
        variant='outlined'
      />
      <NumberInput
        label='Percentage'
        source='percentage'
        validate={[required()]}
        variant='outlined'
      />
      <BooleanInput label='SMS Status' source='sms_status' />
      <NumberInput
        label='School'
        source='school'
        validate={[required()]}
        variant='outlined'
      />
    </SimpleForm>
  </Create>
);

/**
 * Edit submission summary details
 * @param {*} props
 */
export const SubmissionSummaryEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput
        label='Assessment'
        source='assesment_id'
        validate={[required()]}
        variant='outlined'
      />
      <NumberInput
        label='Percentage'
        source='percentage'
        validate={[required()]}
        variant='outlined'
      />
      <BooleanInput label='SMS Status' source='sms_status' />
      <NumberInput
        label='School'
        source='school'
        validate={[required()]}
        variant='outlined'
      />
    </SimpleForm>
  </Edit>
);
