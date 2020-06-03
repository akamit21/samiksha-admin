import React from 'react';
import PropTypes from 'prop-types';
import { JsonEditor as Editor } from 'jsoneditor-react';
import { addField } from 'ra-core';

const config = require('../../../config');

const CustomJSONEditorComponent = ({ source, record = {}, ...props }) => {
  return (
    <div
      className={`custom-json-editor ${
        config.style.hideJSONEditorHeader ? ' hidden-header ' : ''
      }`}
    >
      <Editor
        value={record && record[source] ? record[source] : {}}
        onChange={(param) => {
          props.input.onChange(param);
        }}
      />
    </div>
  );
};

CustomJSONEditorComponent.propTypes = {
  label: PropTypes.string.isRequired,
  customUpdater: PropTypes.func.isRequired,
  source: PropTypes.string.isRequired,
};
const CustomJSONEditor = addField(CustomJSONEditorComponent);

export default CustomJSONEditor;
