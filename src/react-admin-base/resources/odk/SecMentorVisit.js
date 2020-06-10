import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ArrayField,
  SingleFieldList,
  ImageField,
  TextInput,
  Filter,
  Pagination,
} from 'react-admin';

/**
 * Search filter
 * @param {*} props
 */
const SearchFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Search by name*' source='data.name' alwaysOn />
  </Filter>
);

export const SecMentorVisitList = (props) => (
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

      <TextField label='' source='data[0].classes_num' />
      <TextField label='' source='data[0].cl_visit_a' />
      <TextField label='' source='data[0].sub_visit_a' />
      <TextField label='' source='data[0].les_plan_a' />
      <TextField label='' source='data[0].syb_cl_a' />
      <TextField label='' source='data[0].error_cl_a' />
      <TextField label='' source='data[0].delivery_cl_a' />
      <TextField label='' source='data[0].weakstd_cl_a' />
      <TextField label='' source='data[0].prompts_cl_a' />
      <TextField label='' source='data[0].hw_cl_a' />
      <TextField label='' source='data[0].checking_cl_a' />
      <TextField label='' source='data[0].weakstd_sup_cl_a' />
      <TextField label='' source='data[0].hwstd_cl_a' />
      <TextField label='' source='data[0].std_partp_a' />
      <TextField label='' source='data[0].std_notes_a' />
      <TextField label='' source='data[0].weekly_tests_a' />
      <TextField label='' source='data[0].sat_cl_a' />
      <TextField label='' source='data[0].fdbk_yn_a' />
      <TextField label='' source='data[0].suggest_fdbk_a' />
      <TextField label='' source='data[0].teach_res_a' />
      <TextField label='' source='data[0].fdbk_a' />
      <TextField label='' source='data[0].cl_visit_b' />
      <TextField label='' source='data[0].sub_visit_b' />
      <TextField label='' source='data[0].les_plan_b' />
      <TextField label='' source='data[0].syb_cl_b' />
      <TextField label='' source='data[0].error_cl_b' />
      <TextField label='' source='data[0].delivery_cl_b' />
      <TextField label='' source='data[0].weakstd_cl_b' />
      <TextField label='' source='data[0].prompts_cl_b' />
      <TextField label='' source='data[0].hw_cl_b' />
      <TextField label='' source='data[0].checking_cl_b' />
      <TextField label='' source='data[0].weakstd_sup_cl_b' />
      <TextField label='' source='data[0].hwstd_cl_b' />
      <TextField label='' source='data[0].std_partp_b' />
      <TextField label='' source='data[0].std_notes_b' />
      <TextField label='' source='data[0].weekly_tests_b' />
      <TextField label='' source='data[0].sat_cl_b' />
      <TextField label='' source='data[0].fdbk_yn_b' />
      <TextField label='' source='data[0].suggest_fdbk_b' />
      <TextField label='' source='data[0].teach_res_b' />
      <TextField label='' source='data[0].fdbk_b' />
      <TextField label='' source='data[0].hm_fdbk_yn' />
      <TextField label='' source='data[0].fdbk_1' />
      <TextField label='' source='data[0].board_pattern1' />
      <TextField label='' source='data[0].board_pattern2' />
      <TextField label='' source='data[0].board_papers' />

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
