import React from 'react';
import {
  List,
  Create,
  Edit,
  Datagrid,
  TextField,
  ReferenceField,
  FunctionField,
  SimpleForm,
  TextInput,
  SelectInput,
  DateTimeInput,
  Filter,
  required,
  regex,
} from 'react-admin';

const validatePhone = regex(/^\d{10}$/, 'Must be a valid phone number');
/**
 * Filter
 * @param {*} props
 */
const SearchFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <SelectInput
      label='By Status'
      source='status'
      choices={[
        { id: 'DUPLICATE', name: 'DUPLICATE' },
        { id: 'FAIL', name: 'FAIL' },
        { id: 'FAILED TO PROCESS', name: 'FAILED TO PROCESS' },
        { id: 'SUBMITTED', name: 'SUBMITTED' },
        { id: 'SUCCESS', name: 'SUCCESS' },
        { id: 'UNKNOWN', name: 'UNKNOWN' },
        { id: 'UNPROCESSED', name: 'UNPROCESSED' },
      ]}
    />
    <SelectInput
      label='By Form Type'
      source='form_type'
      choices={[
        { id: 'ASSESSMENT', name: 'ASSESSMENT' },
        { id: 'ATTENDANCE', name: 'ATTENDANCE' },
        { id: 'EXAM', name: 'EXAM' },
        { id: 'HOLIDAY', name: 'HOLIDAY' },
        { id: 'HOMEWORK', name: 'HOMEWORK' },
        { id: 'MEETING', name: 'MEETING' },
      ]}
    />
    <TextInput label='By Tries' source='tries' />
    <TextInput label='By School' source='school' />
    <TextInput label='By Form ID' source='form_id' />
  </Filter>
);

/**
 * List all sms
 * @param {*} props
 */
export const SMSList = (props) => (
  <List filters={<SearchFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='message_id' />
      <TextField source='school' />
      <TextField source='form_id' />
      <TextField source='phone' />
      <TextField source='status' />
      <TextField source='form_type' />
      <TextField source='gupshup_updated' />
      <TextField source='text' />
      <TextField source='response_code' />
      <TextField source='tries' />
      <ReferenceField label='Student' source='student_id' reference='student'>
        <FunctionField
          render={(record) =>
            `${record.name}, Class: ${record.grade_number}, ${record.section}`
          }
        />
      </ReferenceField>
    </Datagrid>
  </List>
);

/**
 * Create new sms
 * @param {*} props
 */
export const SMSCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        label='Message Id'
        source='message_id'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='School'
        source='school'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Form'
        source='form_id'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Phone Number'
        source='phone'
        validate={[required(), validatePhone]}
        variant='outlined'
      />
      <TextInput
        label='Status'
        source='status'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Form Type'
        source='form_type'
        validate={[required()]}
        variant='outlined'
      />
      <DateTimeInput
        label='Gupshup Updated'
        source='gupshup_updated'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Text'
        source='text'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Response Code'
        source='response_code'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Tries'
        source='tries'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='History'
        source='history'
        validate={[required()]}
        variant='outlined'
      />
      <DateTimeInput
        label='Submitted'
        source='submitted'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Student'
        source='student'
        validate={[required()]}
        variant='outlined'
      />
    </SimpleForm>
  </Create>
);

/**
 * Edit sms details
 * @param {*} props
 */
export const SMSEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput
        label='Message Id'
        source='message_id'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='School'
        source='school'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Form'
        source='form_id'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Phone Number'
        source='phone'
        validate={[required(), validatePhone]}
        variant='outlined'
      />
      <TextInput
        label='Status'
        source='status'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Form Type'
        source='form_type'
        validate={[required()]}
        variant='outlined'
      />
      <DateTimeInput
        label='Gupshup Updated'
        source='gupshup_updated'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Text'
        source='text'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Response Code'
        source='response_code'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Tries'
        source='tries'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='History'
        source='history'
        validate={[required()]}
        variant='outlined'
      />
      <DateTimeInput
        label='Submitted'
        source='submitted'
        validate={[required()]}
        variant='outlined'
      />
      <TextInput
        label='Student'
        source='student'
        validate={[required()]}
        variant='outlined'
      />
    </SimpleForm>
  </Edit>
);
