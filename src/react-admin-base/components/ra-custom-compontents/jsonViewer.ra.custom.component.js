import React from 'react';
import { JSONEView } from 'ra-input-json';

const CustomJSONViewerComponent = ({ source, record = {} }) => {
  if (source && record[source] && typeof record[source] === 'object') {
    const r = record;
    r[source] = JSON.stringify(record[source]);
  }
  if (source && !record[source]) {
    const r = record;
    r[source] = JSON.stringify({});
  }
  return (
    <div className='custom-json-viewer'>
      <JSONEView source={source} label='Data' record={record} />
    </div>
  );
};

export default CustomJSONViewerComponent;
