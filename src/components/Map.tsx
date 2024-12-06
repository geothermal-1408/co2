"use client";

// import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
// import "leaflet-defaulticon-compatibility";

// import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

// interface MapComponentProps {
//   position: [number, number]; // Expect a tuple of two numbers
// }

// const MapComponent: React.FC<MapComponentProps> = ({ position }) => {
//   const MapUpdater = () => {
//     const map = useMap();
//     map.setView(position, map.getZoom()); // Dynamically update the map's center
//     return null;
//   };

//   return (
//     <MapContainer
//       center={position}
//       zoom={10}
//       scrollWheelZoom={true}
//       style={{ height: "400px", width: "100%", margin: "auto" }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={position}>
//         <Popup>
//           Coordinates: {position[0]}, {position[1]}
//         </Popup>
//       </Marker>
//       <MapUpdater />
//     </MapContainer>
//   );
// };

// export default MapComponent;

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import L from "leaflet";
import "leaflet.heat";

// Dynamically import Leaflet and Leaflet Heatmap
// const L = dynamic(() =>  import('leaflet'), { ssr: false });
// const HeatmapLayer = dynamic(() => import('leaflet.heat'), { ssr: false });

type HeatmapProps = {
  heatData: [number, number, number][];
  location: [number, number];
};

const Heatmap: React.FC<HeatmapProps> = ({ heatData, location }) => {
  const [mapReady, setMapReady] = useState(false);

  const MapUpdater = () => {
    const map = useMap();
    map.setView(location, map.getZoom()); // Dynamically update the map's center
    return null;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMapReady(true); // Trigger map rendering after the client has loaded
    }
  }, []);

  const MapWithHeat = () => {
    const map = useMap(); // Get access to the map instance

    useEffect(() => {
      if (map && heatData) {
        // Create the heatmap layer using leaflet.heat
        const heatLayer = L.heatLayer(heatData, {
          radius: 35,
          blur: 15,
          maxZoom: 17,
        });

        // Add the heatmap layer to the map
        heatLayer.addTo(map);

        // Cleanup the heatmap layer when the component is unmounted
        return () => {
          map.removeLayer(heatLayer);
        };
      }
    }, [map, heatData]);

    return null; // This component doesn’t render anything itself, it just adds the heatmap to the map
  };

  if (!mapReady) return <div>Loading...</div>;

  return (
    <MapContainer
      center={[location[0], location[1]]}
      zoom={13}
      style={{ height: "38vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[location[0], location[1]]}>
        <Popup>
          Coordinates: {location[0]}, {location[1]}
        </Popup>
      </Marker>
      <MapUpdater />
      {/* Add Heatmap Layer */}
      <MapWithHeat />
    </MapContainer>
  );
};

export default Heatmap;
