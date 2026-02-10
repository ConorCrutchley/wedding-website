import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { FaBed } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import L from "leaflet";
import type { LatLngTuple } from "leaflet";
import grandSapphire from "@/assets/hotels/grand-sapphire-entrance.webp";
import { hotels } from "@/constants/hotels";
import { renderToStaticMarkup } from "react-dom/server";
import styles from "@/styles/where-to-stay/hotel-map.module.css";

const HotelMap = () => {
  const markerParams: L.DivIconOptions = {
    iconSize: [150, 190],
    iconAnchor: [90, 180],
    popupAnchor: [-15, -180],
  };
  const centerCoord: LatLngTuple = [51.35710853465936, -0.11678750410152501];
  const venueCoord: LatLngTuple = [51.35617754848806, -0.11968815767081438];

  const venueIconElement = (
    <>
      <p>Grand Sapphire</p>
      <img src={grandSapphire} alt="Grand Sapphire" />
      <p>
        <FaLocationDot stroke="#fff" fill="#fff" /> Our venue
      </p>
    </>
  );

  const venueIconElementString = renderToStaticMarkup(venueIconElement);

  const venueIcon = L.divIcon({
    ...markerParams,
    className: `${styles["marker-icon"]} ${styles["venue-icon"]}`,
    html: venueIconElementString,
  });

  return (
    <MapContainer
      id="map"
      className={styles["hotel-map"]}
      center={centerCoord}
      zoom={17}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={venueCoord} icon={venueIcon}>
        <Popup>
          Grand Sapphire Banqueting &amp; Hotel,
          <br />
          45 Imperial Way,
          <br />
          Croydon,
          <br />
          CR0 4RR,
          <br />
          UK
        </Popup>
      </Marker>
      {hotels.map((hotel) => {
        const hotelIconElement = (
          <>
            <p>{hotel.shortName}</p>
            <img src={hotel.images[0]} alt={hotel.name} />
            <a href={hotel.link} className="button" target="_blank">
              <FaBed stroke="#fff" fill="#fff" size={20} />
              &pound;{hotel.discountedPrice}
            </a>
          </>
        );
        const hotelIconElementString = renderToStaticMarkup(hotelIconElement);

        const hotelIcon = L.divIcon({
          ...markerParams,
          className: `${styles["marker-icon"]} ${styles["hotel-icon"]}`,
          html: hotelIconElementString,
        });
        return (
          <Marker
            key={`hotelMarker_${hotel.id}`}
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
