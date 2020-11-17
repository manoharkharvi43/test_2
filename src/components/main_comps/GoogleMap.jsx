import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const LocationMap = (props) => {
  
  const mapStyles = {        
    width: "100%",
    height: "100%"};
  

  
  return (
      <>
     <LoadScript
       googleMapsApiKey='AIzaSyDyOQ2YwWVJIKH9DyFj8zUa_qlJhrn2Bq0'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={{lat:props.lat,lng:props.lng}}
        />
     </LoadScript>
     </>
  )
}
export default LocationMap;