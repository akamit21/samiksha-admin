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

export const ElemSSAVisitList = (props) => (
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

      <TextField label='Teacher Time' source='data[0].teacher_time' />
      <TextField label='HM Time' source='data[0].hm_time' />
      <TextField label='Uniform' source='data[0].uniform' />
      <TextField label='Textbook' source='data[0].textbook' />
      <TextField label='Annual Fund' source='data[0].annual_fund' />
      <TextField label='Amt Grant Received' source='data[0].ann_grant_recvd' />
      <TextField label='Amt Grant Spent' source='data[0].ann_grant_spent' />
      <TextField label='Fund Utilize' source='data[0].funds_utilize["b"]' />
      <TextField label='SMC Meeting' source='data[0].smc_meeting' />
      <TextField label='SMC Training' source='data[0].smc_training' />
      <TextField label='School Clean' source='data[0].school_clean' />
      <TextField label='Separate Toilet' source='data[0].separate_toilet' />
      <TextField label='CWSN Toilet' source='data[0].cwsn_toilet' />
      <TextField label='Clean Staff' source='data[0].clean_staff' />
      <TextField label='CWSN Aids' source='data[0].cwsn_aids' />
      <TextField label='CWSN Braille' source='data[0].cwsn_braille' />
      <TextField label='CWSN Training' source='data[0].cwsn_training' />
      <TextField label='Facelift School' source='data[0].facelift_school' />
      <TextField label='Facelift Funds' source='data[0].facelift_funds' />
      <TextField label='Facelift Image' source='data[0].facelift_img' />
      <TextField label='Bagless YN' source='data[0].bagless_yn' />
      <TextField label='Bagless Locker' source='data[0].bagless_locker' />
      <TextField label='Solar Panel' source='data[0].solar_panel' />
      <TextField label='Solar Func' source='data[0].solar_func' />
      <TextField label='Eco Club YN' source='data[0].eco_club_yn' />
      <TextField label='Eco Club Std' source='data[0].eco_club_std' />
      <TextField label='Eco Club Meeting' source='data[0].eco_club_meeting' />
      <TextField label='Eco Club Acts' source='data[0].eco_club_acts' />
      <TextField label='Sports YN' source='data[0].sports_yn' />
      <TextField label='Sports Funds' source='data[0].sports_funds' />
      <TextField label='Safety Training' source='data[0].safety_training' />
      <TextField label='SSA Logo' source='data[0].ssa_logo' />
      <TextField label='Sci Math Acts' source='data[0].sci_math_acts' />
      <TextField label='Sci Math Freq' source='data[0].sci_math_freq' />
      <TextField label='Rolemodel YN' source='data[0].rolemodel_yn' />
      <TextField label='Rolemodel Desc' source='data[0].rolemodel_desc' />
      <TextField label='Twinning YN' source='data[0].twinning_yn' />
      <TextField label='Exchanges' source='data[0].exchanges' />
      <TextField label='Swings' source='data[0].swings' />
      <TextField label='ELL Training' source='data[0].ell_training' />
      <TextField label='Reading Acts' source='data[0].reading_acts' />
      <TextField label='Reading Desc' source='data[0].reading_desc' />
      <TextField label='Func Library' source='data[0].func_library' />
      <TextField label='Library Grant' source='data[0].library_grant' />
      <TextField label='Library Received' source='data[0].lib_recvd' />
      <TextField label='Library Spent' source='data[0].lib_spent' />
      <TextField label='Yoga Comp' source='data[0].yoga_comp' />
      <TextField label='Shagun Audit' source='data[0].shagun_audit' />
      <TextField label='Civil Requested' source='data[0].civil_requested' />
      <TextField label='Civil Sanctioned' source='data[0].civil_sanctioned' />
      <TextField label='Civil Funded' source='data[0].civil_funded' />
      <TextField label='Civil Completed' source='data[0].civil_completed' />
      <TextField label='Civil Inspection' source='data[0].civil_inspection' />

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
