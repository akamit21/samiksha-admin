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
  ReferenceInput,
  SelectInput,
  Filter,
  required,
} from 'react-admin';

const assessmentRenderer = (choice) => {
  return `${choice.type}, Id: ${choice.id}`;
};
const gradeRenderer = (choice) => {
  return `${choice.number} ${choice.section}`;
};

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
 * List all lo submission
 * @param {*} props
 */
export const LOSubmissionList = (props) => (
  <List filters={<SearchFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <EditButton />
    </Datagrid>
  </List>
);

/**
 * Create new lo submission
 * @param {*} props
 */
export const LOSubmissionCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput
        label='School'
        source='school_id'
        reference='school'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText='udise' />
      </ReferenceInput>
      <ReferenceInput
        label='Assessment'
        source='assessment_id'
        reference='assessment'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText={assessmentRenderer} />
      </ReferenceInput>
      <ReferenceInput
        label='Los'
        source='lo_id'
        reference='lo'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText='code' />
      </ReferenceInput>
      <TextInput
        label='Student-Cleared'
        source='students_cleared'
        validate={[required()]}
        variant='outlined'
      />
      <ReferenceInput
        label='Grade'
        source='grade_id'
        reference='grade'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText={gradeRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

/**
 * Edit lo submission details
 * @param {*} props
 */
export const LOSubmissionEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput
        label='School'
        source='school_id'
        reference='school'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText='udise' />
      </ReferenceInput>
      <ReferenceInput
        label='Assessment'
        source='assessment_id'
        reference='assessment'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText={assessmentRenderer} />
      </ReferenceInput>
      <ReferenceInput
        label='Los'
        source='lo_id'
        reference='lo'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText='code' />
      </ReferenceInput>
      <TextInput
        label='Student-Cleared'
        source='students_cleared'
        validate={[required()]}
        variant='outlined'
      />

      <ReferenceInput
        label='Grade'
        source='grade_id'
        reference='grade'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText={gradeRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
