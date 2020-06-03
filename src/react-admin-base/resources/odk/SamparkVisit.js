import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ArrayField,
  SingleFieldList,
} from 'react-admin';

export const SamparkVisitList = (props) => (
  <List {...props}>
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

      <TextField label='' source='data[0].month' />
      <TextField label='' source='data[0].teacherTrained' />
      <TextField label='' source='data[0].tlmUsage' />
      <TextField label='' source='data[0].progressChartUpdated' />
      <TextField label='' source='data[0].sequenceFollowed' />
      <TextField label='' source='data[0].applicationLoaded' />
      <TextField label='' source='data[0].sameTrainedTeacher' />
      <TextField label='' source='data[0].teacherDairy' />
      <TextField label='' source='data[0].childrenWorkbooks' />
      <TextField label='' source='data[0].audioDevice' />

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
