import React from 'react';
import {
  List,
  Create,
  Edit,
  Datagrid,
  EditButton,
  TextField,
  ReferenceField,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  SelectInput,
  ReferenceInput,
  required,
} from 'react-admin';

export const RoleList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='name' />
      <ReferenceField label='Application' source='applicationId' reference='application'>
        <TextField source='name' />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);

/**
 * Create new student
 * @param {*} props
 */
const applications = [
  {
    active: true,
    authenticationTokenConfiguration: { enabled: false },
    id: '1ae074db-32f3-4714-a150-cc8a370eafd1',
    jwtConfiguration: {
      enabled: false,
      refreshTokenTimeToLiveInMinutes: 43200,
      timeToLiveInSeconds: 3600,
    },
    lambdaConfiguration: {},
    loginConfiguration: {
      allowTokenRefresh: false,
      generateRefreshTokens: false,
      requireAuthentication: true,
    },
    name: 'Shiksha Sathi',
    oauthConfiguration: {
      clientId: '1ae074db-32f3-4714-a150-cc8a370eafd1',
      clientSecret: '-9FjCdHqQVukGsDMUyKLx2-M09Bf-yQvXGarwOFDJaQ',
      enabledGrants: ['refresh_token', 'authorization_code'],
      generateRefreshTokens: true,
      requireClientAuthentication: true,
    },
    passwordlessConfiguration: { enabled: false },
    registrationConfiguration: {
      birthDate: { enabled: false, required: false },
      confirmPassword: false,
      enabled: false,
      firstName: { enabled: false, required: false },
      fullName: { enabled: false, required: false },
      lastName: { enabled: false, required: false },
      loginIdType: 'email',
      middleName: { enabled: false, required: false },
      mobilePhone: { enabled: false, required: false },
    },
    roles: [
      {
        id: 'd0cefe1d-05fb-4591-8456-6d90a2590d79',
        isDefault: false,
        isSuperRole: false,
        name: 'BEEO',
      },
      {
        id: '0a448b4c-164f-489f-833f-f7a4639852e1',
        isDefault: false,
        isSuperRole: false,
        name: 'BPO',
      },
      {
        id: '70813a94-4b50-49e0-aa26-f17a3cb14e35',
        isDefault: false,
        isSuperRole: false,
        name: 'BRCC Primary',
      },
      {
        id: '889044ed-f3dd-4e8b-a3dc-7193e59e2a50',
        isDefault: false,
        isSuperRole: false,
        name: 'BRCC Upper Primary',
      },
      {
        id: '9903227f-5614-4b4f-85a5-d164b7b3dcb9',
        isDefault: false,
        isSuperRole: false,
        name: 'CHT(P)/CRCC(P)',
      },
      {
        id: '91488a59-1feb-45cb-9ed2-b423d031a072',
        isDefault: false,
        isSuperRole: false,
        name: 'CHT(Sec)/CRCC(Sec)',
      },
      {
        id: '6b8214d9-09f2-4bae-9102-5722ec3d61c0',
        isDefault: false,
        isSuperRole: false,
        name: 'DIET Faculty',
      },
      {
        id: '6c712217-98b0-46a7-b98b-bb56318314d5',
        isDefault: false,
        isSuperRole: false,
        name: 'Deputy Director Elementary',
      },
      {
        id: 'a38ff508-e969-4960-b6ba-e46efc57667a',
        isDefault: false,
        isSuperRole: false,
        name: 'Deputy Director Higher',
      },
      {
        id: '2e071b53-70d9-4e90-965b-634d4c2fe5f2',
        isDefault: false,
        isSuperRole: false,
        name: 'Deputy Director Inspection Cadre',
      },
      {
        id: '7418b6fb-0a4e-42f3-881b-53ad93de4745',
        isDefault: false,
        isSuperRole: false,
        name: 'Director Elementary Education',
      },
      {
        id: 'ebaef89c-6945-4c55-add6-af55e168b8a0',
        isDefault: false,
        isSuperRole: false,
        name: 'Director Higher Education',
      },
      {
        id: 'b038801f-155c-48fa-ba38-0eb018d3ed94',
        isDefault: false,
        isSuperRole: false,
        name: 'Directorate Elementary Education (office login)',
      },
      {
        id: 'e8f0e930-5250-4485-a331-aad2c69f4927',
        isDefault: false,
        isSuperRole: false,
        name: 'Directorate Higher Education (office login)',
      },
      {
        id: 'b94f5dad-17e9-4f7e-9ede-994a6620a388',
        isDefault: false,
        isSuperRole: false,
        name: 'District Project Officer',
      },
      {
        id: 'cc93413a-70b0-4cf5-bd02-8e13a4bd71b6',
        isDefault: false,
        isSuperRole: false,
        name: 'Joint Director Inspection Cadre',
      },
      {
        id: 'a2644bb0-87d6-4e83-a68c-ecbec8c2cdc8',
        isDefault: false,
        isSuperRole: false,
        name: 'State Project Director',
      },
      {
        id: '8551bf10-9a49-4cec-9f51-dc3a4714e41f',
        isDefault: false,
        isSuperRole: false,
        name: 'State Project Office',
      },
      {
        id: '1fb8d296-4189-40db-a7b0-27a0ea531036',
        isDefault: false,
        isSuperRole: false,
        name: 'Test',
      },
    ],
    samlv2Configuration: {
      debug: false,
      enabled: false,
      xmlSignatureC14nMethod: 'exclusive_with_comments',
    },
    tenantId: '064458d0-dd05-e293-3709-a06cc6ca5ed7',
    verifyRegistration: false,
  },
  {
    active: true,
    authenticationTokenConfiguration: { enabled: true },
    id: 'f0ddb3f6-091b-45e4-8c0f-889f89d4f5da',
    jwtConfiguration: {
      accessTokenKeyId: '9932d623-52c1-41c8-8f63-b295bc13e658',
      enabled: true,
      idTokenKeyId: '97c80b4d-b855-4441-80f4-6f118dc8e8d9',
      refreshTokenTimeToLiveInMinutes: 43200,
      timeToLiveInSeconds: 360000,
    },
    lambdaConfiguration: {},
    loginConfiguration: {
      allowTokenRefresh: true,
      generateRefreshTokens: true,
      requireAuthentication: true,
    },
    name: 'eSamwad',
    oauthConfiguration: {
      clientId: 'f0ddb3f6-091b-45e4-8c0f-889f89d4f5da',
      clientSecret: 'm_T3y_bN1GqP4Poxets71jSfDz0mBVwvy332ZBakGjI',
      enabledGrants: ['refresh_token', 'authorization_code'],
      generateRefreshTokens: true,
      requireClientAuthentication: true,
    },
    passwordlessConfiguration: { enabled: false },
    registrationConfiguration: {
      birthDate: { enabled: false, required: false },
      confirmPassword: false,
      enabled: false,
      firstName: { enabled: false, required: false },
      fullName: { enabled: false, required: false },
      lastName: { enabled: false, required: false },
      loginIdType: 'email',
      middleName: { enabled: false, required: false },
      mobilePhone: { enabled: false, required: false },
    },
    roles: [
      {
        id: '103ee040-c60a-4a61-aa07-7760ebf2a084',
        isDefault: false,
        isSuperRole: false,
        name: 'Admin',
      },
    ],
    samlv2Configuration: {
      debug: false,
      enabled: false,
      xmlSignatureC14nMethod: 'exclusive_with_comments',
    },
    tenantId: '064458d0-dd05-e293-3709-a06cc6ca5ed7',
    verifyRegistration: false,
  },
];
export const RoleCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        label='Name'
        source='name'
        validate={[required()]}
        variant='outlined'
      />

      <SelectInput
        label='Application'
        source='applicationId'
        choices={applications || []}
      />
      <ReferenceInput
        label='Parent Role'
        source='parentId'
        reference='roles'
        perPage={100}
      >
        <SelectInput optionText='name' />
      </ReferenceInput>
      <ArrayInput source='allows'>
        <SimpleFormIterator>
          <ArrayInput source='resources'>
            <SimpleFormIterator>
              <ReferenceInput
                label='Resources'
                reference='resources'
                perPage={100}
              >
                <SelectInput optionText='name' />
              </ReferenceInput>
            </SimpleFormIterator>
          </ArrayInput>
          <ArrayInput source='permissions'>
            <SimpleFormIterator>
              <ReferenceInput
                label='Permissions'
                reference='permissions'
                perPage={100}
              >
                <SelectInput optionText='name' />
              </ReferenceInput>
            </SimpleFormIterator>
          </ArrayInput>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

export const RoleEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput
        label='Name'
        source='name'
        validate={[required()]}
        variant='outlined'
      />
      <SelectInput
        label='Application'
        source='applicationId'
        choices={applications || []}
      />
      <ReferenceInput
        label='Parent Role'
        source='parentId'
        reference='roles'
        perPage={100}
      >
        <SelectInput optionText='name' />
      </ReferenceInput>
      <ArrayInput source='allows'>
        <SimpleFormIterator>
          <ArrayInput source='resources'>
            <SimpleFormIterator>
              <ReferenceInput
                label='Resources'
                reference='resources'
                perPage={100}
              >
                <SelectInput optionText='name' />
              </ReferenceInput>
            </SimpleFormIterator>
          </ArrayInput>
          <ArrayInput source='permissions'>
            <SimpleFormIterator>
              <ReferenceInput
                label='Permissions'
                reference='permissions'
                perPage={100}
              >
                <SelectInput optionText='name' />
              </ReferenceInput>
            </SimpleFormIterator>
          </ArrayInput>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
