"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

interface MapComponentProps {
  position: [number, number]; // Expect a tuple of two numbers
}

const MapComponent: React.FC<MapComponentProps> = ({ position }) => {
  const MapUpdater = () => {
    const map = useMap();
    map.setView(position, map.getZoom()); // Dynamically update the map's center
    return null;
  };

  return (
    <MapContainer
      center={position}
      zoom={10}
      scrollWheelZoom={true}
      style={{ height: "400px", width: "100%", margin: "auto" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Coordinates: {position[0]}, {position[1]}
        </Popup>
      </Marker>
      <MapUpdater />
    </MapContainer>
  );
};

export default MapComponent;
