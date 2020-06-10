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

export const ElemMonitorVisitList = (props) => (
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

      <TextField label='' source='data[0].lep_q_visit_a' />
      <TextField label='' source='data[0].ler_lvl_visit_a' />
      <TextField label='' source='data[0].m_soochi_visit_a' />
      <TextField label='' source='data[0].act_lrn_visit_a' />
      <TextField label='' source='data[0].stud_eng_visit_a' />
      <TextField label='' source='data[0].lep_if_n_visit_a' />
      <TextField label='' source='data[0].repeat_noteb' />

      <TextField label='' source='data[0].nlep_classnumber' />
      <TextField label='' source='data[0].nlep_cl_visit_a' />
      <TextField label='' source='data[0].nlep_sub_visit_a' />
      <TextField label='' source='data[0].note1' />
      <TextField label='' source='data[0].nlep_compt_1_visit_a' />
      <TextField label='' source='data[0].nlep_compt_2_visit_a' />
      <TextField label='' source='data[0].nlep_compt_3_visit_a' />
      <TextField label='' source='data[0].nlep_compt_4_visit_a' />
      <TextField label='' source='data[0].nlep_compt_4__visit_a_no' />
      <TextField label='' source='data[0].nlep_cl_visit_b' />
      <TextField label='' source='data[0].nlep_sub_visit_b' />
      <TextField label='' source='data[0].nlep_compt_1_visit_b' />
      <TextField label='' source='data[0].nlep_compt_2_visit_b' />
      <TextField label='' source='data[0].nlep_compt_3_visit_b' />
      <TextField label='' source='data[0].nlep_compt_4_visit_b' />
      <TextField label='' source='data[0].nlep_compt_4__visit_b_no' />

      <TextField label='' source='data[0].qual_tech_1' />
      <TextField label='' source='data[0].qual_tech_2' />
      <TextField label='' source='data[0].qual_tech_3' />

      <TextField label='' source='data[0].noteX2' />
      <TextField label='' source='data[0].teaching_1' />
      <TextField label='' source='data[0].teaching_2' />

      <TextField label='' source='data[0].noteX3' />
      <TextField label='' source='data[0].attention_1' />
      <TextField label='' source='data[0].attention_2' />

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
