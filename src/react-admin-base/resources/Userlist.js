import React, { cloneElement } from 'react';
import {
  List,
  Datagrid,
  TextField,
  Pagination,
  BooleanInput,
  EmailField,
  BooleanField,
  Filter,
  CreateButton,
  TopToolbar,
  TextInput,
} from 'react-admin';
import { sanitizeListRestProps } from 'ra-core';

const ListActions = ({
  currentSort,
  className,
  resource,
  filters,
  displayedFilters,
  exporter, // you can hide ExportButton if exporter = (null || false)
  filterValues,
  permanentFilter,
  hasCreate, // you can hide CreateButton if hasCreate = false
  basePath,
  selectedIds,
  onUnselectItems,
  showFilter,
  maxResults,
  total,
  ...rest
}) => (
  <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
    {filters &&
      cloneElement(filters, {
        resource,
        showFilter,
        displayedFilters,
        filterValues,
        context: 'button',
      })}
    <CreateButton basePath={basePath} />
  </TopToolbar>
);
const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput
      label='Search by any attribute*'
      source='globalSearch'
      alwaysOn
    />
    <BooleanInput source='active' alwaysOn />
  </Filter>
);
const UserList = (props) => (
  <List
    {...props}
    filters={<UserFilter />}
    actions={<ListActions />}
    pagination={<Pagination perPage={1} />}
  >
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='firstName' />
      <TextField source='lastName' />
      <TextField source='username' />
      <EmailField source='email' />
      <TextField source='mobilePhone' />
      <BooleanField source='active' />
    </Datagrid>
  </List>
);

export default UserList;
