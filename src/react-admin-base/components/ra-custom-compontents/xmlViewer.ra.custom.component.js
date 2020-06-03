import React from 'react';
import XMLViewer from 'react-xml-viewer';

const CustomXMLViewerComponent = ({ source, record = {} }) => {
  if (source && record[source] && typeof record[source] === 'object') {
    const r = record;
    r[source] = JSON.stringify(record[source]);
  }
  if (source && !record[source]) {
    const r = record;
    r[source] = JSON.stringify({});
  }
  return (
    <div style={{ padding: '15px' }}>
      <XMLViewer xml={record[source]} />
    </div>
  );
};

export default CustomXMLViewerComponent;
