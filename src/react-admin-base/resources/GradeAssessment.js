import React from 'react';
import {
  List,
  Create,
  Edit,
  Datagrid,
  EditButton,
  TextField,
  ReferenceField,
  DateField,
  SimpleForm,
  TextInput,
  SelectInput,
  ReferenceInput,
  AutocompleteInput,
  Filter,
  required,
  // useQuery,
} from 'react-admin';

// assessment
const assessmentChoices = require('../../meta/assessment.json');

const assessmentRenderer = (choice) => {
  return `${choice.type}, Id: ${choice.id}`;
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
    <SelectInput
      label='Grade Number'
      source='grade_number'
      choices={[
        { id: '1', name: '1' },
        { id: '2', name: '2' },
        { id: '3', name: '3' },
        { id: '4', name: '4' },
        { id: '5', name: '5' },
        { id: '6', name: '6' },
        { id: '7', name: '7' },
        { id: '8', name: '8' },
      ]}
    />
  </Filter>
);

/**
 * List all grade assessment
 * @param {*} props
 */
export const GradeAssessmentList = (props) => (
  <List filters={<SearchFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='form_id' />
      <ReferenceField
        label='Assessment Type'
        source='assessment_id'
        reference='assessment'
      >
        <TextField source='type' />
      </ReferenceField>
      <ReferenceField label='School' source='school_id' reference='school'>
        <TextField source='udise' />
      </ReferenceField>
      <TextField source='section' />
      <TextField source='grade_number' />
      <TextField source='signature' />
      <DateField source='created' />
      <DateField source='updated' />
      <EditButton />
    </Datagrid>
  </List>
);

/**
 * Create new grade assessment
 * @param {*} props
 */
export const GradeAssessmentCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        label='Form ID'
        source='form_id'
        validate={[required()]}
        variant='outlined'
      />
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
        label='School'
        source='school_id'
        reference='school'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText='udise' />
      </ReferenceInput>
      <TextInput
        label='Grade'
        source='grade_number'
        validate={[required()]}
        variant='outlined'
      />
      <SelectInput
        label='Section'
        source='section'
        choices={[
          { id: 'A', name: 'A' },
          { id: 'B', name: 'B' },
          { id: 'C', name: 'C' },
          { id: 'D', name: 'D' },
          { id: 'E', name: 'E' },
          { id: 'F', name: 'F' },
        ]}
        variant='outlined'
      />
      <TextInput
        label='Signature'
        source='signature'
        validate={[required()]}
        variant='outlined'
      />
    </SimpleForm>
  </Create>
);

/**
 * Edit grade assessment details
 * @param {*} props
 */
export const GradeAssessmentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput
        label='Form ID'
        source='form_id'
        validate={[required()]}
        variant='outlined'
      />
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
        label='School'
        source='school_id'
        reference='school'
        perPage={1000}
      >
        <SelectInput optionText='udise' />
      </ReferenceInput>
      <TextInput
        label='Grade'
        source='grade_number'
        validate={[required()]}
        variant='outlined'
      />
      <SelectInput
        label='Section'
        source='section'
        choices={[
          { id: 'A', name: 'A' },
          { id: 'B', name: 'B' },
          { id: 'C', name: 'C' },
          { id: 'D', name: 'D' },
          { id: 'E', name: 'E' },
          { id: 'F', name: 'F' },
        ]}
        variant='outlined'
      />
      <TextInput
        label='Signature'
        source='signature'
        validate={[required()]}
        variant='outlined'
      />
    </SimpleForm>
  </Edit>
);
