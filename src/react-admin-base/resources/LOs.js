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
  SelectInput,
  ReferenceInput,
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
 * List all LOs
 * @param {*} props
 */
export const LOList = (props) => (
  <List filters={<SearchFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='code' />
      <TextField source='name' />
      <TextField source='grade_number' />
      <ReferenceField label='Subject' source='subject_id' reference='subject'>
        <TextField source='name' />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);

/**
 * Create new LOs
 * @param {*} props
 */
export const LOCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        label='Code'
        source='code'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Name'
        source='name'
        validate={[required()]}
        variant='outlined'
      />
      <ReferenceInput
        label='Assessment'
        source='lo_assessment'
        reference='assessment'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText='block' />
      </ReferenceInput>
      <TextInput
        label='Grade'
        source='grade_number'
        validate={[required()]}
        variant='outlined'
      />
      <ReferenceInput
        label='Subject'
        source='subject_id'
        reference='subject'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText='name' />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

/**
 * Edit LOs details
 * @param {*} props
 */
export const LOEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput
        label='Code'
        source='code'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Name'
        source='name'
        validate={[required()]}
        variant='outlined'
      />
      <ReferenceInput
        label='Assessment'
        source='lo_assessments'
        reference='assessment'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText='type' />
      </ReferenceInput>

      <TextInput
        label='Grade'
        source='grade_number'
        validate={[required()]}
        variant='outlined'
      />
      <ReferenceInput
        label='Grade'
        source='subject_id'
        reference='subject'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText='name' />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
