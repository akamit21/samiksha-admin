import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ArrayField,
  ImageField,
  SingleFieldList,
  TextInput,
  AutocompleteInput,
  Filter,
  Pagination,
} from 'react-admin';

const disctritChoices = require('../../../meta/district.json');
const blockChoices = require('../../../meta/block.json');
const designationChoices = require('../../../meta/block.json');

const SearchFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Search by name*' source='data.username' alwaysOn />
    <AutocompleteInput
      label='By District'
      source='data.district'
      choices={disctritChoices}
    />
    <AutocompleteInput
      label='By Block'
      source='data.block'
      choices={blockChoices}
    />
    <AutocompleteInput
      label='By Designation'
      source='data.designation'
      choices={designationChoices}
    />
  </Filter>
);

export const SLOVisitV2List = (props) => (
  <List
    {...props}
    filters={<SearchFilter />}
    pagination={<Pagination perPage={1} style={{ float: 'left' }} />}
  >
    <Datagrid>
      <TextField label='Username' source='data[0].username' />
      <TextField label='Designation' source='data[0].designation' />
      <TextField label='Name' source='data[0].name' />
      <ArrayField label='District' source='data'>
        <SingleFieldList>
          <TextField source='district' />
        </SingleFieldList>
      </ArrayField>
      <ArrayField label='Block' source='data'>
        <SingleFieldList>
          <TextField source='block' />
        </SingleFieldList>
      </ArrayField>
      <TextField label='School Name' source='data[0].school' />
      <TextField label='Visit Date' source='data[0].date_visit' />

      <TextField label='Latitude' source='data[0].school_gps:Latitude' />
      <TextField label='Longitude' source='data[0].school_gps:Longitude' />
      <TextField label='Altitude' source='data[0].school_gps:Altitude' />
      <TextField label='Accuracy' source='data[0].school_gps:Accuracy' />

      <ImageField
        label='School Image'
        source='data[0].school_img.filename'
        title='data[0].school_img.filename'
      />

      <TextField label='Number Classes' source='data[0].num_classes' />

      <TextField label='CL Grade 1' source='data[0].cl_grade_1' />
      <TextField label='CL 1' source='data[0].cl_1_no' />
      <TextField label='Eng 1' source='data[0].eng1' />
      <TextField label='Eng 1' source='data[0].eng_1_l2' />
      <TextField label='Eng 1' source='data[0].eng_1_l1' />
      <TextField label='Eng 1' source='data[0].eng_1_l0' />
      <TextField label='Math 1' source='data[0].math' />
      <TextField label='Math 1' source='data[0].math_1_l2' />
      <TextField label='Math 1' source='data[0].math_1_l1' />
      <TextField label='Math 1' source='data[0].math_1_l0' />
      <TextField label='Hindi 1' source='data[0].hin1' />
      <TextField label='Hindi 1' source='data[0].hin_1_l2' />
      <TextField label='Hindi 1' source='data[0].hin_1_l1' />
      <TextField label='Hindi 1' source='data[0].hin_1_l0' />

      <TextField label='CL Grade 2' source='data[0].cl_grade_2' />
      <TextField label='CL 2' source='data[0].cl_2_no' />
      <TextField label='Eng 2' source='data[0].eng2' />
      <TextField label='Eng 2' source='data[0].eng_2_l2' />
      <TextField label='Eng 2' source='data[0].eng_2_l1' />
      <TextField label='Eng 2' source='data[0].eng_2_l0' />
      <TextField label='Math 2' source='data[0].math1' />
      <TextField label='Math 2' source='data[0].math_2_l2' />
      <TextField label='Math 2' source='data[0].math_2_l1' />
      <TextField label='Math 2' source='data[0].math_2_l0' />
      <TextField label='Hindi 2' source='data[0].hin2' />
      <TextField label='Hindi 2' source='data[0].hin_2_l2' />
      <TextField label='Hindi 2' source='data[0].hin_2_l1' />
      <TextField label='Hindi 2' source='data[0].hin_2_l0' />

      <TextField label='Mentor Visit' source='data[0].ment_vis' />
      <TextField label='Mor CHlit' source='data[0].mor_chlit' />
      <TextField label='Other Res' source='data[0].oth_res' />
      <TextField label='Other Res Det' source='data[0].oth_res_det' />

      <TextField label='Start' source='data[0].start' />
      <TextField label='End' source='data[0].end' />
      <TextField label='Today' source='data[0].today' />
      <TextField label='Device ID' source='data[0].deviceid' />
      <TextField label='Subscriber ID' source='data[0].subscriberid' />
      <TextField label='Sim Serial' source='data[0].simserial' />
      <TextField label='Phone Number' source='data[0].phonenumber' />
      <TextField label='Instance ID' source='data[0].instanceID' />

      <ArrayField source='data'>
        <SingleFieldList>
          <TextField source='*meta-instance-id*' />
        </SingleFieldList>
      </ArrayField>
    </Datagrid>
  </List>
);
