import React from 'react';
import {
  List,
  Create,
  Edit,
  Datagrid,
  EditButton,
  TextField,
  ReferenceField,
  ReferenceManyField,
  SingleFieldList,
  FunctionField,
  // ChipField,
  SimpleForm,
  TextInput,
  SelectInput,
  ReferenceInput,
  SelectArrayInput,
  Filter,
  required,
  useQuery,
} from 'react-admin';

// assessment
const assessmentChoices = require('../../meta/assessment.json');

const deadlineRenderer = (choice) => {
  return `${choice.district} ${choice.session}`;
};
const gradeRenderer = (choice) => {
  return `${choice.number} ${choice.section}`;
};

/**
 * Filter
 * @param {*} props
 */
const SearchFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <SelectInput
      label='Assesment Type'
      source='type'
      choices={assessmentChoices}
    />
  </Filter>
);

/**
 * List all assesment
 * @param {*} props
 */
export const AssessmentList = (props) => (
  <List filters={<SearchFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='type' />
      <ReferenceField
        label='Deadline'
        source='deadline_id'
        reference='deadline'
      >
        <FunctionField
          render={(record) => `${record.district}, ${record.session}`}
        />
      </ReferenceField>
      <ReferenceManyField
        label='Grade'
        reference='assessment_grade'
        target='assessment_id'
      >
        <SingleFieldList>
          <ReferenceField reference='grade' source='grade_id'>
            {/* <ChipField source='number' /> */}
            <FunctionField
              render={(record) => `${record.number}${record.section}, `}
            />
          </ReferenceField>
        </SingleFieldList>
      </ReferenceManyField>
      <EditButton />
    </Datagrid>
  </List>
);

/**
 * Create new assesment
 * @param {*} props
 */
export const AssessmentCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <SelectInput
        label='Assesment Type'
        source='type'
        choices={assessmentChoices}
        validate={[required()]}
        variant='outlined'
      />
      <ReferenceInput
        label='Deadline'
        source='deadline_id'
        reference='deadline'
        perPage={100}
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText={deadlineRenderer} />
      </ReferenceInput>
      <ReferenceInput
        label='Grade'
        source='grade_id'
        reference='grade'
        validate={[required()]}
        variant='outlined'
      >
        <SelectInput optionText={gradeRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

/**
 * Edit assesment details
 * @param {*} props
 */
export const AssessmentEdit = (props) => {
  const extraFilter = {};
  const { filterValues } = props;
  if (filterValues && filterValues.location && filterValues.location.district) {
    extraFilter.district = filterValues.location.district;
  }
  const { id } = props;
  console.log(id, 'id');
  const { data } = useQuery({
    type: 'getManyReference',
    resource: 'assessment_grade',
    payload: { assessment_id: id },
  });
  console.log(data, 'ids');
  // if (!data) return null;
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          label='Assesment Type'
          source='type'
          choices={assessmentChoices}
          validate={[required()]}
          variant='outlined'
        />
        <ReferenceInput
          label='Deadline'
          source='deadline_id'
          reference='deadline'
          validate={[required()]}
          variant='outlined'
        >
          <SelectInput optionText={deadlineRenderer} />
        </ReferenceInput>
        <ReferenceInput
          label='Grade'
          source='assessment_grades'
          reference='grade'
          validate={[required()]}
          variant='outlined'
          fullWidth='true'
        >
          <SelectArrayInput optionText={gradeRenderer} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
