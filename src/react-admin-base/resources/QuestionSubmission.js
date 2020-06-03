import React from 'react';
import {
  List,
  Create,
  Edit,
  Datagrid,
  EditButton,
  TextField,
  ReferenceField,
  FunctionField,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  AutocompleteInput,
  Filter,
  required,
} from 'react-admin';

// assessment
const assessmentChoices = require('../../meta/assessment.json');

const assessmentRenderer = (choice) => {
  return `${choice.type}, Id: ${choice.id}`;
};
const questionRenderer = (choice) => {
  return `Id: ${choice.id}, Name: ${choice.statement}`;
};
const gradeRenderer = (choice) => {
  return `${choice.number}${choice.section}`;
};

const udiseRenderer = (choice) => {
  return `${choice.udise}`;
};

/**
 * Filter
 * @param {*} props
 */
const SearchFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <SelectInput
      label='Assessment Type'
      choices={assessmentChoices}
      source='assessment.type'
    >
      <AutocompleteInput optionText='type' />
    </SelectInput>
    <TextInput label='By School' source='school.udise' />
    <TextInput label='By Grade' source='grade.number' />
  </Filter>
);

/**
 * List all questions
 * @param {*} props
 */
export const QuestionSubmissionList = (props) => (
  <List filters={<SearchFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <ReferenceField label='School' source='school_id' reference='school'>
        <TextField source='udise' />
      </ReferenceField>
      <ReferenceField
        label='Assessment Type'
        source='assessment_id'
        reference='assessment'
      >
        <TextField source='type' />
      </ReferenceField>
      <ReferenceField source='question_id' reference='question'>
        <FunctionField
          render={(record) => `Id: ${record.id}, Name: ${record.statement}`}
        />
      </ReferenceField>
      <TextField source='students_cleared' />
      <ReferenceField label='ClassName' source='grade_id' reference='grade'>
        <FunctionField
          render={(record) => `${record.number}${record.section}`}
        />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);

/**
 * Create new question
 * @param {*} props
 */
export const QuestionSubmissionCreate = (props) => (
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
        perPage={100}
      >
        <SelectInput optionText={assessmentRenderer} />
      </ReferenceInput>
      <ReferenceInput
        label='Questions'
        source='question_id'
        reference='question'
        validate={[required()]}
        variant='outlined'
        perPage={500}
      >
        <SelectInput optionText={questionRenderer} />
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
 * Edit question details
 * @param {*} props
 */
export const QuestionSubmissionEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput
        label='School'
        source='school_id'
        reference='school'
        variant='outlined'
      >
        <AutocompleteInput optionText={udiseRenderer} />
      </ReferenceInput>
      <ReferenceInput
        label='Assessment'
        source='assessment_id'
        reference='assessment'
        validate={[required()]}
        variant='outlined'
        perPage={100}
      >
        <SelectInput optionText={assessmentRenderer} />
      </ReferenceInput>
      <ReferenceInput
        label='Questions'
        source='question_id'
        reference='question'
        validate={[required()]}
        variant='outlined'
        perPage={500}
      >
        <SelectInput optionText={questionRenderer} />
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
