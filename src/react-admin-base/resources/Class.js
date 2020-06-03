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
 * List all classes
 * @param {*} props
 */
export const ClassList = (props) => (
  <List filters={<SearchFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='number' />
      <TextField source='section' />
      <ReferenceField label='Stream' source='stream_id' reference='stream'>
        <TextField source='tag' />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);

/**
 * Create new class
 * @param {*} props
 */
export const ClassCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        label='Class'
        source='number'
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
      <ReferenceInput
        label='Stream'
        source='stream_id'
        reference='stream'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText='tag' />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

/**
 * Edit class details
 * @param {*} props
 */
export const ClassEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput
        label='Class'
        source='number'
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
      <ReferenceInput
        label='Stream'
        source='stream_id'
        reference='stream'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText='tag' />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
