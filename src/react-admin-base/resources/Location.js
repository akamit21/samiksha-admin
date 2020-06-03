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
  SelectInput,
  AutocompleteInput,
  Filter,
  required,
  useQuery,
} from 'react-admin';

const disctritChoices = require('../../meta/district.json');

/**
 * Filter
 * @param {*} props
 */
const SearchFilter = (props) => {
  const {
    data: blockData,
    loading: blockLoading,
    error: blockError,
  } = useQuery({
    type: 'getList',
    resource: 'location',
    payload: {
      pagination: {},
      sort: { field: 'block', order: 'ASC' },
      filter: { distinctOnFields: ['block'] },
    },
  });

  const {
    data: clusterData,
    loading: clusterLoading,
    error: clusterError,
  } = useQuery({
    type: 'getList',
    resource: 'location',
    payload: {
      pagination: {},
      sort: { field: 'cluster', order: 'ASC' },
      filter: { distinctOnFields: ['cluster'] },
    },
  });

  if (blockLoading) return <span>Loading</span>;
  if (blockError) return <span>Error</span>;
  if (!blockData) return null;
  const blocks = blockData.map((el) => {
    return {
      id: el.block,
      name: el.block,
    };
  });

  if (clusterLoading) return <span>Loading</span>;
  if (clusterError) return <span>Error</span>;
  if (!clusterData) return null;
  const clusters = clusterData.map((el) => {
    return {
      id: el.cluster,
      name: el.cluster,
    };
  });
  return (
    <>
      <Filter {...props}>
        <TextInput label='Search' source='q' alwaysOn />
        <AutocompleteInput
          label='District'
          source='district'
          choices={disctritChoices}
        />
        <AutocompleteInput label='Block' source='block' choices={blocks} />
        <AutocompleteInput
          label='Cluster'
          source='cluster'
          choices={clusters}
        />
      </Filter>
    </>
  );
};
/**
 * List all locations
 * @param {*} props
 */
export const LocationList = (props) => (
  <List filters={<SearchFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='district' />
      <TextField source='block' />
      <TextField source='cluster' />
      <EditButton />
    </Datagrid>
  </List>
);

/**
 * Create new location
 * @param {*} props
 */
export const LocationCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <SelectInput
        label='District'
        source='district'
        choices={disctritChoices}
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Block'
        source='block'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Cluster'
        source='cluster'
        validate={[required()]}
        variant='outlined'
      />
    </SimpleForm>
  </Create>
);

/**
 * Edit location details
 */
export const LocationEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <SelectInput
        label='District'
        source='district'
        choices={disctritChoices}
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Block'
        source='block'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Cluster'
        source='cluster'
        validate={[required()]}
        variant='outlined'
      />
    </SimpleForm>
  </Edit>
);
