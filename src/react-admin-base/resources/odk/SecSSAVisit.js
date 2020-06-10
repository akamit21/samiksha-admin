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

export const SecSSAVisitList = (props) => (
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

      <TextField label='' source='data[0].teacher_time' />
      <TextField label='' source='data[0].hm_time' />
      <TextField label='' source='data[0].annual_fund' />
      <TextField label='' source='data[0].ann_grant_recvd' />
      <TextField label='' source='data[0].ann_grant_spent' />
      <TextField label='' source='data[0].funds_utilize' />
      <TextField label='' source='data[0].smc_meeting' />
      <TextField label='' source='data[0].smc_training' />
      <TextField label='' source='data[0].school_clean' />
      <TextField label='' source='data[0].separate_toilet' />
      <TextField label='' source='data[0].cwsn_toilet' />
      <TextField label='' source='data[0].cwsn_braille' />
      <TextField label='' source='data[0].cwsn_aids' />
      <TextField label='' source='data[0].cwsn_training' />
      <TextField label='' source='data[0].facelift_school' />
      <TextField label='' source='data[0].facelift_funds' />
      <TextField label='' source='data[0].facelift_img' />
      <TextField label='' source='data[0].solar_panel' />
      <TextField label='' source='data[0].solar_func' />
      <TextField label='' source='data[0].eco_club_yn' />
      <TextField label='' source='data[0].eco_club_std' />
      <TextField label='' source='data[0].eco_club_meeting' />
      <TextField label='' source='data[0].eco_club_acts' />
      <TextField label='' source='data[0].sports_yn' />
      <TextField label='' source='data[0].sports_funds' />
      <TextField label='' source='data[0].safety_training' />
      <TextField label='' source='data[0].ssa_logo' />
      <TextField label='' source='data[0].vending_machine' />
      <TextField label='' source='data[0].sci_math_acts' />
      <TextField label='' source='data[0].sci_math_freq' />
      <TextField label='' source='data[0].rolemodel_yn' />
      <TextField label='' source='data[0].rolemodel_desc' />
      <TextField label='' source='data[0].defense_training' />
      <TextField label='' source='data[0].defense_stdpart' />
      <TextField label='' source='data[0].twinning_yn' />
      <TextField label='' source='data[0].exchanges' />
      <TextField label='' source='data[0].reading_acts' />
      <TextField label='' source='data[0].reading_desc' />
      <TextField label='' source='data[0].func_library' />
      <TextField label='' source='data[0].library_grant' />
      <TextField label='' source='data[0].lib_recvd' />
      <TextField label='' source='data[0].lib_spent' />
      <TextField label='' source='data[0].yoga_comp' />
      <TextField label='' source='data[0].shagun_audit' />
      <TextField label='' source='data[0].civil_sanctioned' />
      <TextField label='' source='data[0].civil_funded' />
      <TextField label='' source='data[0].civil_completed' />
      <TextField label='' source='data[0].civil_inspection' />

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
