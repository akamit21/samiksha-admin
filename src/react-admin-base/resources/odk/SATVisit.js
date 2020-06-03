import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ArrayField,
  ImageField,
  SingleFieldList,
  Show,
  SimpleShowLayout,
  Filter,
  SelectInput,
  AutocompleteInput,
  useQuery,
} from 'react-admin';

// district
// const disctritChoices = require('../../../meta/district.json');

// const SearchFilter = (props) => {
//   const extraFilter = {};
//   const { filterValues } = props;
//   if (filterValues && filterValues.location && filterValues.location.district) {
//     extraFilter.district = filterValues.location.district;
//   }

//   const { data } = useQuery({
//     type: 'getList',
//     resource: 'location',
//     payload: {
//       pagination: {},
//       sort: { field: 'block', order: 'ASC' },
//       filter: { distinctOnFields: ['block'], ...extraFilter },
//     },
//   });

//   if (!data) return null;
//   const blocks = data.map((item) => {
//     return {
//       id: item.block,
//       name: item.block,
//     };
//   });
//   return (
//     <Filter {...props}>
//       <SelectInput
//         label='District'
//         choices={disctritChoices}
//         source='data.district'
//       >
//         <AutocompleteInput optionText='district' />
//       </SelectInput>
//       <SelectInput label='Block' choices={blocks} source='data.block'>
//         <AutocompleteInput optionText='block' />
//       </SelectInput>
//     </Filter>
//   );
// };

export const SATVisitList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField label='Note' source='data[0].noteX' />
      <TextField label='Username' source='data[0].username' />
      <TextField label='Designation' source='data[0].designation' />
      <TextField label='Name' source='data[0].name' />
      <TextField label='Note' source='data[0].note1' />
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
      <TextField label='School Type' source='data[0].school_type' />
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

      <TextField label='Cheating Level' source='data[0].cheating_level' />
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
