import React from 'react';
import {
  List,
  Create,
  Edit,
  Datagrid,
  EditButton,
  TextField,
  ReferenceField,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
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
 * List all questions
 * @param {*} props
 */
export const QuestionList = (props) => (
  <List filters={<SearchFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='statement' />
      <TextField source='cutoff' />
      <ReferenceField label='LO' source='lo_id' reference='lo'>
        <TextField source='code' />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);

/**
 * Create new question
 * @param {*} props
 */
export const QuestionCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        label='Statement'
        source='statement'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Cut-Off'
        source='cutoff'
        validate={[required()]}
        variant='outlined'
      />
      <ReferenceInput
        label='LO'
        source='lo_id'
        reference='lo'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText='code' />
      </ReferenceInput>
      <ReferenceInput
        label='Assessment'
        source='lo_assessments'
        reference='assessment'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText='type' />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

/**
 * Edit question details
 * @param {*} props
 */
export const QuestionEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput
        label='Statement'
        source='statement'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Cut-Off'
        source='cutoff'
        validate={[required()]}
        variant='outlined'
      />
      <ReferenceInput
        label='LO'
        source='lo_id'
        reference='lo'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText='code' />
      </ReferenceInput>
      <ReferenceInput
        label='Assessment'
        source='lo_assessments'
        reference='assessment'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText='type' />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
