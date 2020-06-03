import React from 'react';
// import GoogleMapReact from 'google-map-react';
import { useQuery } from 'ra-core';
import GoogleMap from './markers/gmap';

const GoogleMapsPage = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const ids = props.ids || [];
  const locations = ids.map((d) => {
    const location = {
      lat: props.data[d].lat,
      id: props.data[d].id,
      lng: props.data[d].lng,
    };
    return location;
  });
  if (locations && locations.length) return <GoogleMap locations={locations} />;
  return <></>;
};

export default GoogleMapsPage;
