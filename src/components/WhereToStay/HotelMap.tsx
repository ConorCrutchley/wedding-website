import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { FaBed } from "react-icons/fa";
import L from "leaflet";
import type { LatLngTuple } from "leaflet";
import { hotels } from "@/constants/hotels";
import { renderToStaticMarkup } from "react-dom/server";
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
      {hotels.map((hotel) => {
        const iconElement = (
          <>
            <img src={hotel.images[0]} alt={hotel.name} />
            <a href={hotel.link} className="button" target="_blank">
              <FaBed stroke="#fff" fill="#fff" size={20} />
              &pound;{hotel.discountedPrice}
            </a>
          </>
        );
        const iconElementString = renderToStaticMarkup(iconElement);

        const hotelIcon = L.divIcon({
          className: styles["hotel-icon"],
          html: iconElementString,
          iconSize: [150, 153],
        });
        return (
          <Marker
            key={hotel.id}
            position={hotel.location.coordinates}
            icon={hotelIcon}
          >
            <Popup>{hotel.name}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default HotelMap;
