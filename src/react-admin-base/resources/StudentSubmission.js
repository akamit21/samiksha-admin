import React from 'react';
import {
  List,
  Create,
  Edit,
  Datagrid,
  TextField,
  FunctionField,
  ReferenceField,
  DateField,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
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
 * List all student submissions
 * @param {*} props
 */
export const StudentSubmissionList = (props) => (
  <List filters={<SearchFilter />} {...props}>
    <Datagrid>
      <TextField source='id' />
      <ReferenceField label='Student' source='student_id' reference='student'>
        <FunctionField
          render={(record) =>
            `${record.name}, Class: ${record.grade_number}, ${record.section}`
          }
        />
      </ReferenceField>
      <ReferenceField label='School' source='student_id' reference='student'>
        <ReferenceField source='school_id' reference='school'>
          <TextField source='udise' />
        </ReferenceField>
      </ReferenceField>
      <ReferenceField
        label='Assessment Type'
        source='assessment_id'
        reference='assessment'
      >
        <FunctionField
          render={(record) => `${record.type}, ID: ${record.id}`}
        />
      </ReferenceField>
      <ReferenceField label='Subject' source='subject_id' reference='subject'>
        <TextField source='name' />
      </ReferenceField>
      <TextField source='assessment_grade' />
      <TextField source='sms_id' />
      <TextField source='form_id' />
      <TextField source='grade_number' />
      <TextField source='section' />
      <DateField source='created' />
      <DateField source='updated' />
    </Datagrid>
  </List>
);

/**
 * Create new student submission
 * @param {*} props
 */
export const StudentSubmissionCreate = (props) => (
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
 * Edit student submission details
 * @param {*} props
 */
export const StudentSubmissionEdit = (props) => (
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
