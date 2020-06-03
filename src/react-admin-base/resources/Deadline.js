import React from 'react';
import {
  List,
  Create,
  Edit,
  Datagrid,
  EditButton,
  TextField,
  DateField,
  SimpleForm,
  TextInput,
  SelectInput,
  AutocompleteInput,
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

// district
const disctritChoices = require('../../meta/district.json');

/**
 * List all deadline
 * @param {*} props
 */
export const DeadlineList = (props) => (
  <List filters={<SearchFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='acad_year' />
      <DateField source='date' />
      <TextField source='district' />
      <TextField source='session' />
      <EditButton />
    </Datagrid>
  </List>
);

/**
 * Create new deadline
 * @param {*} props
 */
export const DeadlineCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <SelectInput
        label='Academic Year'
        source='acad_year'
        choices={[
          { id: '2019-20', name: '2019-20' },
          { id: '2020-21', name: '2020-21' },
          { id: '2021-22', name: '2021-22' },
          { id: '2022-23', name: '2022-23' },
          { id: '2023-24', name: '2023-24' },
          { id: '2024-25', name: '2024-25' },
        ]}
        validate={[required()]}
        variant='outlined'
      />
      <DateTimeInput
        label='Date'
        source='date'
        validate={[required()]}
        variant='outlined'
      />
      <AutocompleteInput
        label='District'
        source='district'
        choices={disctritChoices}
        validate={[required()]}
        variant='outlined'
      />
      <SelectInput
        label='Session'
        source='session'
        choices={[
          { id: 'Summer', name: 'Summer' },
          { id: 'Winter', name: 'Winter' },
        ]}
        validate={[required()]}
        variant='outlined'
      />
    </SimpleForm>
  </Create>
);

/**
 * Edit deadline details
 * @param {*} props
 */
export const DeadlineEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <SelectInput
        label='Academic Year'
        source='acad_year'
        choices={[
          { id: '2019-2020', name: '2019-2020' },
          { id: '2020-2021', name: '2020-2021' },
          { id: '2021-2022', name: '2021-2022' },
          { id: '2022-2023', name: '2022-2023' },
          { id: '2023-2024', name: '2023-2024' },
          { id: '2024-2025', name: '2024-2025' },
        ]}
        validate={[required()]}
        variant='outlined'
      />
      <DateTimeInput
        label='Date'
        source='date'
        validate={[required()]}
        variant='outlined'
      />
      <AutocompleteInput
        label='District'
        source='district'
        choices={disctritChoices}
        validate={[required()]}
        variant='outlined'
      />
      <SelectInput
        label='Session'
        source='session'
        choices={[
          { id: 'S', name: 'Summer' },
          { id: 'W', name: 'Winter' },
        ]}
        validate={[required()]}
        variant='outlined'
      />
    </SimpleForm>
  </Edit>
);
