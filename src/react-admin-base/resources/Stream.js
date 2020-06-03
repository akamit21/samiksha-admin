import React, { useState } from 'react';
import {
  List,
  Create,
  Edit,
  Datagrid,
  EditButton,
  TextField,
  ReferenceField,
  SingleFieldList,
  ChipField,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  AutocompleteArrayInput,
  SelectArrayInput,
  Filter,
  ReferenceManyField,
  required,
  // useQuery,
  useMutation,
  Button,
} from 'react-admin';
import gql from 'graphql-tag';

const ADD_STREAM = gql`
  mutation insert_stream($objects: [stream_insert_input!]!) {
    data: insert_stream(objects: $objects) {
      returning {
        id
        tag
        stream_subjects {
          subject {
            name
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;

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
 * List all streams
 * @param {*} props
 */
export const StreamList = (props) => (
  <List filters={<SearchFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='tag' />
      {/* <TextField label='SS' source='stream_subject.stream_id' /> */}
      <ReferenceManyField
        label='Subjects'
        reference='stream_subject'
        target='stream_id'
      >
        <SingleFieldList>
          <ReferenceField reference='subject' source='subject_id'>
            <ChipField source='name' />
          </ReferenceField>
        </SingleFieldList>
      </ReferenceManyField>
      <EditButton />
    </Datagrid>
  </List>
);

/**
 * Create new stream
 * @param {*} props
 */
export const StreamCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label='Tag'
          source='tag'
          validate={[required()]}
          variant='outlined'
        />

        <ReferenceArrayInput
          label='Subject'
          source='stream_subjects'
          reference='subject'
        >
          <ReferenceArrayInput
            label='Subject'
            source='stream_subjects'
            reference='subject'
          >
            <AutocompleteArrayInput />
          </ReferenceArrayInput>
        </ReferenceArrayInput>

        {/* <ReferenceInput
          label='Subject'
          source='stream_subjects'
          reference='subject'
          validate={[required()]}
          variant='outlined'
        >
          <SelectInput optionText='name' />
        </ReferenceInput> */}
      </SimpleForm>
    </Create>
  );
};

/**
 * Edit stream details
 * @param {*} props
 */
export const StreamEdit = (props) => {
  // const { data } = useGetMany('tags', stream_subjects);
  return (
    <Edit {...props}>
      <SimpleForm>
        {console.log(props, 'hh')}
        <TextInput
          label='id'
          source='id'
          validate={[required()]}
          variant='outlined'
        />
        <TextInput
          label='Tag'
          source='tag'
          validate={[required()]}
          variant='outlined'
        />

        {/* <ReferenceArrayInput
          label='Subjects'
          source='stream_subjects'
          reference='subject'
        >
          <AutocompleteArrayInput optionText='name' />
        </ReferenceArrayInput> */}

        {/* <ReferenceArrayInput
          label='Subject'
          source='id'
          reference='stream_subject'
        >
          <ReferenceArrayInput
            label='Subject'
            source='subject_id'
            reference='subject'
          >
            <SelectInput>
              <AutocompleteArrayInput optionText='name' />
            </SelectInput>
          </ReferenceArrayInput>
        </ReferenceArrayInput> */}
        {/* <ul>
          {data.map((tag) => (
            <li key={tag.id}>{tag.name}</li>
          ))}
        </ul> */}
        {/* {record.stream_subjects.map((el) => (
          <ChipField source={el.subject.name} />
        ))} */}
        {/* <ReferenceArrayInput
        label='Subject'
        reference='stream_subjects'
        source='subject'
      >
        <SelectArrayInput source='name' />
      </ReferenceArrayInput> */}

        {/* <SelectArrayInput label='Subject' source='subject' /> */}
      </SimpleForm>
    </Edit>
  );
};
