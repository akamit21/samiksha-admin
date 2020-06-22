import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ArrayField,
  SingleFieldList,
  ImageField,
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

export const SecMonitorVisitList = (props) => (
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

      <TextField label='Classes Num' source='data[0].classes_num' />
      <TextField label='CL Visit A' source='data[0].cl_visit_a' />
      <TextField label='Sub Visit A' source='data[0].sub_visit_a' />
      <TextField label='SYB CL A' source='data[0].syb_cl_a' />
      <TextField label='Weakstd CL A' source='data[0].weakstd_cl_a' />
      <TextField label='HW CL A' source='data[0].hw_cl_a' />
      <TextField label='Checking CL A' source='data[0].checking_cl_a' />
      <TextField label='SAT CL A' source='data[0].sat_cl_a' />
      <TextField label='Weakstd Sup CL A' source='data[0].weakstd_sup_cl_a' />

      <TextField label='CL Visit B' source='data[0].cl_visit_b' />
      <TextField label='Sub Visit B' source='data[0].sub_visit_b' />
      <TextField label='SYB CL B' source='data[0].syb_cl_b' />
      <TextField label='Weakstd CL B' source='data[0].weakstd_cl_b' />
      <TextField label='HW CL B' source='data[0].hw_cl_b' />
      <TextField label='Checking CL B' source='data[0].checking_cl_b' />
      <TextField label='SAT CL B' source='data[0].sat_cl_b' />
      <TextField label='Weakstd Sup CL B' source='data[0].weakstd_sup_cl_b' />

      <TextField label='HM Feedback' source='data[0].hm_fdbk_yn' />
      <TextField label='Feedback 1' source='data[0].fdbk_1' />
      <TextField label='Board Patterns 1' source='data[0].board_pattern1' />
      <TextField label='Board Patterns 2' source='data[0].board_pattern2' />
      <TextField label='Board Papers' source='data[0].board_papers' />

      <TextField label='Weak Subs' source='data[0].weak_subs' />
      <TextField label='Sat Analysis' source='data[0].sat_analysis' />
      <TextField label='PTM' source='data[0].ptm' />
      <TextField label='Syb Completion' source='data[0].syb_completion' />
      <TextField label='Board Plan' source='data[0].board_plan' />
      <TextField label='Weaksub Support' source='data[0].weaksub_support' />

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
