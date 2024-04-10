import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useParams } from "react-router-dom";
// AIzaSyDW07EbWDNhflhUda0WOOlbRPxrIyL62kw

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const MapScreen = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDW07EbWDNhflhUda0WOOlbRPxrIyL62kw",
    libraries,
  });

  const { value } = useParams();

  const numbersArray = value.split(",");

  const number1 = parseFloat(numbersArray[0], 10);
  const number2 = parseFloat(numbersArray[1], 10);

  const center = {
    lat: number1,
    lng: number2,
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default MapScreen;
