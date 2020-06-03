import React from 'react';
import {
  List,
  Create,
  Edit,
  Datagrid,
  EditButton,
  TextField,
  ReferenceField,
  BooleanField,
  SimpleForm,
  TextInput,
  SelectInput,
  ReferenceInput,
  NumberInput,
  // CheckboxGroupInput,
  RadioButtonGroupInput,
  BooleanInput,
  // AutocompleteInput,
  Filter,
  required,
  regex,
  choices,
  // useQuery,
} from 'react-admin';

// validation
const validatePhone = regex(/^\d{10}$/, 'Must be a valid phone number');
const validateGender = choices(
  ['male', 'female', 'other'],
  'Must be Male, Female or Other'
);

/**
 * Filter
 * @param {*} props
 */
const SearchFilter = (props) => {
  // const { data } = useQuery({
  //   type: 'getList',
  //   resource: 'school',
  //   payload: {
  //     pagination: {},
  //     sort: { field: 'udise', order: 'ASC' },
  //     filter: { distinctOnFields: ['udise'] },
  //   },
  // });

  // if (!data) return null;
  // const schoolUDISE = data.map((item) => {
  //   return {
  //     id: item.udise,
  //     name: item.udise,
  //   };
  // });
  return (
    <Filter {...props}>
      <TextInput label='Search' source='q' alwaysOn />
      <TextInput label='Admission Number' source='admission_number' />
      <TextInput label='By School' source='school.udise' />
      {/* <SelectInput label='Block' choices={schoolUDISE} source='school.udise'>
        <AutocompleteInput optionText='udise' />
      </SelectInput> */}
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
};

/**
 * List all students
 * @param {*} props
 */
export const StudentList = (props) => (
  <List filters={<SearchFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='admission_number' />
      <TextField source='name' />
      <TextField source='grade_number' />
      <TextField source='section' />
      <ReferenceField label='School' source='school_id' reference='school'>
        <TextField source='udise' />
      </ReferenceField>
      <TextField source='phone' />
      <BooleanField source='is_enabled' />
      <TextField source='father_name' />
      <TextField source='mother_name' />
      <TextField source='gender' />
      <BooleanField source='is_cwsn' />
      <TextField source='category' />
      <EditButton />
    </Datagrid>
  </List>
);

/**
 * Create new student
 * @param {*} props
 */
export const StudentCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        label='Name'
        source='name'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Admission Number'
        source='admission_number'
        validate={[required()]}
        variant='outlined'
      />
      <ReferenceInput
        label='School'
        source='school_id'
        reference='school'
        validate={[required()]}
        variant='outlined'
        perPage={100}
      >
        <SelectInput optionText='udise' />
      </ReferenceInput>
      <TextInput
        label='Class'
        source='class'
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
        label='Phone Number'
        source='phone'
        validate={[required(), validatePhone]}
        variant='outlined'
      />
      <NumberInput
        label='Roll No.'
        source='roll'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Father Name'
        source='father_name'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Mother Name'
        source='mother_name'
        validate={[required()]}
        variant='outlined'
      />
      <BooleanInput
        label='Is the student a child with special needs?'
        source='is_cwsn'
      />
      <RadioButtonGroupInput
        source='gender'
        choices={[
          { id: 'M', name: 'Male' },
          { id: 'F', name: 'Female' },
          { id: 'N', name: 'Other' },
        ]}
        validate={validateGender}
      />
      <SelectInput
        label='Category'
        source='category'
        choices={[
          { id: 'GENERAL', name: 'GENERAL' },
          { id: 'OBC', name: 'OBC' },
          { id: 'SC', name: 'SC' },
          { id: 'ST', name: 'ST' },
          { id: 'OTHER', name: 'OTHER' },
        ]}
        validate={[required()]}
        variant='outlined'
      />
      <BooleanInput label='Is the student enabled?' source='is_enabled' />
    </SimpleForm>
  </Create>
);

/**
 * Edit student details
 * @param {*} props
 */
export const StudentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput
        label='Name'
        source='name'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Admission Number'
        source='admission_number'
        validate={[required()]}
        variant='outlined'
      />
      <ReferenceInput
        label='School'
        source='school_id'
        reference='school'
        defaultValue={[]}
        perPage={100}
      >
        <SelectInput optionText='udise' />
      </ReferenceInput>
      <TextInput
        label='Class'
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
        label='Phone Number'
        source='phone'
        validate={[required(), validatePhone]}
        variant='outlined'
      />
      <NumberInput
        label='Roll No.'
        source='roll'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Father Name'
        source='father_name'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Mother Name'
        source='mother_name'
        validate={[required()]}
        variant='outlined'
      />
      <BooleanInput
        label='Is the student a child with special needs?'
        source='is_cwsn'
      />
      {/* <CheckboxGroupInput
        label="Is the student a child with special needs?"
        source="is_cwsn"
        choices={[{ id: "Is CWSN", name: "Is CWSN" }]}
      /> */}
      <RadioButtonGroupInput
        source='gender'
        choices={[
          { id: 'M', name: 'Male' },
          { id: 'F', name: 'Female' },
          { id: 'N', name: 'Other' },
        ]}
        validate={validateGender}
      />
      <SelectInput
        label='Category'
        source='category'
        choices={[
          { id: 'GN', name: 'GENERAL' },
          { id: 'OB', name: 'OBC' },
          { id: 'SC', name: 'SC' },
          { id: 'ST', name: 'ST' },
          { id: 'OT', name: 'OTHER' },
        ]}
        validate={[required()]}
        variant='outlined'
      />
      <BooleanInput label='Is the student enabled?' source='is_enabled' />
      {/* <CheckboxGroupInput
        label="Is the student enabled?"
        source="is_enabled"
        choices={[{ id: "true", name: "Is Enabled" }]}
      /> */}
    </SimpleForm>
  </Edit>
);
