import React from 'react';
import { useQuery } from 'react-admin';
import Map from 'google-map-react';

import 'jsoneditor-react/es/editor.min.css';
import './marker.scss';

const mapStyleConfig = require('./mapStyleConfig');

function AnalyticsDashboardApp() {
  return (
    <div className='w-full'>
      {/* <div style={{height: '400px'}}> */}
      {/*    <BoardSquare> */}
      {/*        new */}
      {/*    </BoardSquare> */}
      {/* </div> */}
      {/* <Knight/> */}
      {/* <MapView/> */}
    </div>
  );
}

export const MapView = React.memo(function MapView() {
  const { data, loading, error } = useQuery({
    type: 'getList',
    resource: 'locations',
    payload: { pagination: { page: 1, perPage: 10 } },
  });

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  if (!data) return null;
  return (
    <div className='map-wrapper'>
      <Map
        defaultZoom={10}
        bootstrapURLKeys={{ key: 'AIzaSyBgWgnOpZ53GrYvfYM3kS3kwQrcYy8Dmtc' }}
        style={{ height: '100%' }}
        options={{
          styles: mapStyleConfig,
        }}
        defaultCenter={{ lng: 2.163342, lat: 41.406884 }}
      >
        {data.map((item, index) => {
          return (
            <Marker
              lat={item.lat}
              lng={item.long}
              name={item.name}
              key={index}
            />
          );
        })}
      </Map>
    </div>
  );
});

const Marker = (props) => {
  const { color, name, clickAction } = props;
  return (
    <div className='custom-marker' onClick={clickAction}>
      <div
        className='pin bounce'
        style={{ backgroundColor: color, cursor: 'pointer' }}
        title={name}
      />
      <div className='pulse' />
    </div>
  );
};

export default AnalyticsDashboardApp;
