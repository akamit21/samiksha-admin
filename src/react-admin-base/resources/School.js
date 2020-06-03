import {
  AutocompleteInput,
  Create,
  Datagrid,
  Edit,
  EditButton,
  Filter,
  List,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
  required,
  useQuery,
} from 'react-admin';

import React from 'react';

const optionRenderer = (choice) => {
  return `${choice.number} ${choice.section}`;
};

const locationRenderer = (choice) => {
  return `${choice.district}, ${choice.block}, ${choice.cluster}`;
};

// district
const disctritChoices = require('../../meta/district.json');

/**
 * Filter
 * @param {*} props
 */
const SearchFilter = (props) => {
  const extraFilter = {};
  const { filterValues } = props;
  if (filterValues && filterValues.location && filterValues.location.district) {
    extraFilter.district = filterValues.location.district;
  }

  console.log(extraFilter, 'extra');
  console.log(filterValues, 'value');

  const { data } = useQuery({
    type: 'getList',
    resource: 'location',
    payload: {
      pagination: {},
      sort: { field: 'block', order: 'ASC' },
      filter: { distinctOnFields: ['block'], ...extraFilter },
    },
  });

  if (!data) return null;
  const blocks = data.map((item) => {
    return {
      id: item.block,
      name: item.block,
    };
  });
  return (
    <Filter {...props}>
      <TextInput label='Search' source='q' alwaysOn />
      <TextInput label='UDISE' source='udise' />
      <TextInput label='Name' source='name' />
      <SelectInput
        label='Type'
        source='type'
        choices={[
          { id: 'GPS', name: 'GPS' },
          { id: 'GMS', name: 'GMS' },
          { id: 'GHS', name: 'GHS' },
          { id: 'GSSS', name: 'GSSS' },
        ]}
      />
      <SelectInput
        label='Session'
        source='session'
        choices={[
          { id: 'S', name: 'Summer' },
          { id: 'W', name: 'Winter' },
        ]}
      />
      <SelectInput
        label='District'
        choices={disctritChoices}
        source='location.district'
        filterToQuery={(search) =>
          search ? { location: { district: { ilike: `%${search}%` } } } : {}
        }
      >
        <AutocompleteInput optionText='district' />
      </SelectInput>
      <SelectInput label='Block' choices={blocks} source='location.block'>
        <AutocompleteInput optionText='block' />
      </SelectInput>
    </Filter>
  );
};

/**
 * List all schools
 * @param {*} props
 */
export const SchoolList = (props) => (
  <List filters={<SearchFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='udise' />
      <TextField source='name' />
      <TextField source='location.district' label='district' />
      <TextField source='location.block' label='block' />
      <TextField source='session' />
      <TextField source='type' />
      <TextField source='enrollment' />
      <EditButton />
    </Datagrid>
  </List>
);

/**
 * Create new school
 * @param {*} props
 */
export const SchoolCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        label='UDISE'
        source='udise'
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
        label='Location'
        source='location_id'
        reference='location'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText='block' />
      </ReferenceInput>
      <SelectInput
        label='Type'
        source='type'
        choices={[
          { id: 'GPS', name: 'GPS' },
          { id: 'GMS', name: 'GMS' },
          { id: 'GHS', name: 'GHS' },
          { id: 'GSSS', name: 'GSSS' },
        ]}
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
        <SelectInput optionText='class + section' />
      </ReferenceInput>
      <TextInput
        label='Enrollment'
        source='enrollment'
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
  </Create>
);

/**
 * Edit school details
 * @param {*} props
 */
export const SchoolEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput
        label='UDISE'
        source='udise'
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
        label='Location'
        source='location_id'
        reference='location'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText={locationRenderer} />
      </ReferenceInput>
      <SelectInput
        label='Type'
        source='type'
        choices={[
          { id: 'GPS', name: 'GPS' },
          { id: 'GMS', name: 'GMS' },
          { id: 'GHS', name: 'GHS' },
          { id: 'GSSS', name: 'GSSS' },
        ]}
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
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
      <TextInput
        label='Enrollment'
        source='enrollment'
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
