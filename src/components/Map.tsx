import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

type L = {
  location: {
    lat: number;
    long: number;
  };
};

export default function GetMap({ location }: L) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCK6JzIuemwQuSm17FQ21NijPmOB33YYYk",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map location={location} />;
}

function Map({ location }: L) {
  const { lat, long } = location;

  const center = useMemo(() => ({ lat: lat, lng: long }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} />
    </GoogleMap>
  );
}
