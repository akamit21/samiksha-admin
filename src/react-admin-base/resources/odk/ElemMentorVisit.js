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

export const ElemMentorVisitList = (props) => (
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

      <TextField label='LEP Note' source='data[0].lep_note' />
      <TextField label='LEP' source='data[0].lep' />
      <TextField label='LEP Class' source='data[0].lep_classnumber' />
      <TextField label='CL Visit' source='data[0].cl_visit_a' />
      <TextField label='Sub Visit' source='data[0].sub_visit_a' />
      <TextField label='Lep Q Visit' source='data[0].lep_q_visit_a' />
      <TextField label='Ler Lvl vist' source='data[0].ler_lvl_visit_a' />
      <TextField label='Soochi Visit' source='data[0].m_soochi_visit_a' />
      <TextField label='Act LRN Visit' source='data[0].act_lrn_visit_a' />
      <TextField label='Stud Eng Visit' source='data[0].stud_eng_visit_a' />
      <TextField label='LEP N Visit A' source='data[0].lep_if_n_visit_a' />
      <TextField label='CL Visit B' source='data[0].cl_visit_b' />
      <TextField label='Sub Visit B' source='data[0].sub_visit_b' />
      <TextField label='LEP Q Visit B' source='data[0].lep_q_visit_b' />
      <TextField label='LER LVL Visit B' source='data[0].ler_lvl_visit_b' />
      <TextField label='M Soochi Visit B' source='data[0].m_soochi_visit_b' />
      <TextField label='Act LRN Visit B' source='data[0].act_lrn_visit_b' />
      <TextField label='Stud Eng Visit B' source='data[0].stud_eng_visit_b' />
      <TextField
        label='Feedback Visit LEP 1'
        source='data[0].fdbk_1_visit_lep'
      />
      <TextField
        label='Feedback Visit LEP 3'
        source='data[0].fdbk_3_visit_lep'
      />
      <TextField
        label='Feedback Visit LEP 4'
        source='data[0].fdbk_4_visit_lep'
      />
      <TextField
        label='Feedback Visit LEP 5'
        source='data[0].fdbk_5_visit_lep'
      />
      <TextField
        label='Text Feedback 1'
        source='data[0].text_fdbk_1__visit_lep_y'
      />
      <TextField
        label='Text Feedback 1'
        source='data[0].text_fdbk_1__visit_lep_n'
      />
      <TextField
        label='Feedback 2 Visit LEP'
        source='data[0].fdbk_2_visit_lep'
      />
      <TextField
        label='Text Feedback 3'
        source='data[0].text_fdbk_3__visit_lep_y'
      />
      <TextField
        label='Text Feedback 3'
        source='data[0].text_fdbk_3__visit_lep_n'
      />
      <TextField label='LEP Visit B' source='data[0].lep_if_n_visit_b' />
      <TextField label='NLEP Classnumber' source='data[0].nlep_classnumber' />
      <TextField label='NLEP CL Visit A' source='data[0].nlep_cl_visit_a' />
      <TextField label='NLEP Sub Visit A' source='data[0].nlep_sub_visit_a' />

      <TextField label='Note 1' source='data[0].note1' />
      <TextField
        label='NLEP COMPT 1 Visit A'
        source='data[0].nlep_compt_1_visit_a'
      />
      <TextField
        label='NLEP COMPT 2 Visit A'
        source='data[0].nlep_compt_2_visit_a'
      />
      <TextField
        label='NLEP COMPT 3 Visit A'
        source='data[0].nlep_compt_3_visit_a'
      />
      <TextField
        label='NLEP COMPT 4 Visit A'
        source='data[0].nlep_compt_4_visit_a'
      />
      <TextField
        label='NLEP COMPT 4 Visit A'
        source='data[0].nlep_compt_4__visit_a_no'
      />
      <TextField label='NLEP CL Visit B' source='data[0].nlep_cl_visit_b' />
      <TextField label='NLEP Sub Visit B' source='data[0].nlep_sub_visit_b' />
      <TextField
        label='NLEP COMPT 1 Visit B'
        source='data[0].nlep_compt_1_visit_b'
      />
      <TextField
        label='NLEP COMPT 2 Visit B'
        source='data[0].nlep_compt_2_visit_b'
      />
      <TextField
        label='NLEP COMPT 3 Visit B'
        source='data[0].nlep_compt_3_visit_b'
      />
      <TextField
        label='NLEP COMPT 4 Visit B'
        source='data[0].nlep_compt_4_visit_b'
      />
      <TextField
        label='NLEP COMPT 4 Visit B'
        source='data[0].nlep_compt_4__visit_b_no'
      />

      <TextField
        label='Text Feedback 1 Visit Y'
        source='data[0].text_fdbk_1__visit_y'
      />
      <TextField
        label='Text Feedback 1 Visit N'
        source='data[0].text_fdbk_1__visit_n'
      />
      <TextField
        label='Text Feedback 3 Visit Y'
        source='data[0].text_fdbk_3__visit_y'
      />
      <TextField
        label='Text Feedback 3 Visit N'
        source='data[0].text_fdbk_3__visit_n'
      />

      <TextField label='Feedback Visit 1' source='data[0].fdbk_1_visit' />
      <TextField label='Feedback Visit 2' source='data[0].fdbk_2_visit' />
      <TextField label='Feedback Visit 3' source='data[0].fdbk_3_visit' />
      <TextField label='Feedback Visit 4' source='data[0].fdbk_4_visit' />
      <TextField label='Feedback Visit 5' source='data[0].fdbk_5_visit' />

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
