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

      <TextField label='LEP Q Visit A' source='data[0].lep_q_visit_a' />
      <TextField label='LER LVL Visit A' source='data[0].ler_lvl_visit_a' />
      <TextField label='M Soochi Visit A' source='data[0].m_soochi_visit_a' />
      <TextField label='Act LRN Visit A' source='data[0].act_lrn_visit_a' />
      <TextField label='Stud Eng Visit A' source='data[0].stud_eng_visit_a' />
      <TextField label='LEP Visit A' source='data[0].lep_if_n_visit_a' />
      <TextField label='Repeat Note B' source='data[0].repeat_noteb' />

      <TextField label='NLEP Classnumber' source='data[0].nlep_classnumber' />
      <TextField label='NLEP CL Visit' source='data[0].nlep_cl_visit_a' />
      <TextField label='NLEP Sub Visit' source='data[0].nlep_sub_visit_a' />
      <TextField label='NLEP Note 1' source='data[0].note1' />
      <TextField
        label='NLEP Compt Visit A 1'
        source='data[0].nlep_compt_1_visit_a'
      />
      <TextField
        label='NLEP Compt Visit A 2'
        source='data[0].nlep_compt_2_visit_a'
      />
      <TextField
        label='NLEP Compt Visit A 3'
        source='data[0].nlep_compt_3_visit_a'
      />
      <TextField
        label='NLEP Compt Visit A 4'
        source='data[0].nlep_compt_4_visit_a'
      />
      <TextField
        label='NLEP Compt Visit A 4A'
        source='data[0].nlep_compt_4__visit_a_no'
      />
      <TextField label='NLEP CL Visit B' source='data[0].nlep_cl_visit_b' />
      <TextField label='NLEP Sub Visit B' source='data[0].nlep_sub_visit_b' />
      <TextField
        label='NLEP Compt Visit B 1'
        source='data[0].nlep_compt_1_visit_b'
      />
      <TextField
        label='NLEP Compt Visit B 2'
        source='data[0].nlep_compt_2_visit_b'
      />
      <TextField
        label='NLEP Compt Visit B 3'
        source='data[0].nlep_compt_3_visit_b'
      />
      <TextField
        label='NLEP Compt Visit B 4'
        source='data[0].nlep_compt_4_visit_b'
      />
      <TextField
        label='NLEP Compt Visit B 4A'
        source='data[0].nlep_compt_4__visit_b_no'
      />

      <TextField label='Qual Tech 1' source='data[0].qual_tech_1' />
      <TextField label='Qual Tech 2' source='data[0].qual_tech_2' />
      <TextField label='Qual Tech 3' source='data[0].qual_tech_3' />

      <TextField label='Note 2' source='data[0].noteX2' />
      <TextField label='Teaching 1' source='data[0].teaching_1' />
      <TextField label='Teaching 2' source='data[0].teaching_2' />

      <TextField label='Note 3' source='data[0].noteX3' />
      <TextField label='Attention 1' source='data[0].attention_1' />
      <TextField label='Attention 2' source='data[0].attention_2' />

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
