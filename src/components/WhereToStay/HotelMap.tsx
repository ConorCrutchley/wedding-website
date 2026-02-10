import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import type { LatLngTuple } from "leaflet";
import { hotels } from "@/constants/hotels";
import styles from "@/styles/where-to-stay/hotel-map.module.css";

const HotelMap = () => {
  const venueCoord: LatLngTuple = [51.35617754848806, -0.11968815767081438];

  return (
    <MapContainer
      id="map"
      className={styles["hotel-map"]}
      center={venueCoord}
      zoom={16}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={venueCoord}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      {hotels.map((hotel) => (
        <Marker
          key={hotel.id}
          position={hotel.location.coordinates as LatLngTuple}
        >
          <Popup>{hotel.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default HotelMap;
