import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";

import { FaBed } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import L from "leaflet";
import type { LatLngTuple } from "leaflet";
import grandSapphire from "@/assets/hotels/grand-sapphire-entrance.webp";
import { hotels } from "@/constants/hotels";
import { renderToStaticMarkup } from "react-dom/server";
import styles from "@/styles/where-to-stay/hotel-map.module.css";

const HotelMap = () => {
  const venueCoord: LatLngTuple = [51.35617754848806, -0.11968815767081438];

  const [mapParamsLoaded, setMapParamsLoaded] = useState(false);
  const [markerParams, setMarkerParams] = useState<L.DivIconOptions>({
    iconSize: [110, 143],
    iconAnchor: [70, 135],
    popupAnchor: [-15, -135],
  });
  const [zoom, setZoom] = useState(15);
  const [center, setCenter] = useState<LatLngTuple>([
    51.356150651308745, -0.11697896416064771,
  ]);
  const [svgSize, setSvgSize] = useState(16);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 16 * 64) {
        setMarkerParams({
          iconSize: [120, 163],
          iconAnchor: [70, 155],
          popupAnchor: [-10, -155],
        });
        setZoom(16);
        setSvgSize(18);
        setCenter([51.35710853465936, -0.11678750410152501]);
      }
      setMapParamsLoaded(true);
    };
    handleResize();
  }, []);

  const venueIconElement = (
    <>
      <p>Grand Sapphire</p>
      <img src={grandSapphire} alt="Grand Sapphire" />
      <p className={styles["venue-icon-bottom"]}>
        <FaLocationDot stroke="#fff" fill="#fff" size={svgSize} /> Our venue
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
    <>
      {mapParamsLoaded && (
        <MapContainer
          id="map"
          className={styles["hotel-map"]}
          center={center}
          zoom={zoom}
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
                  <FaBed stroke="#fff" fill="#fff" size={svgSize} />
                  &pound;{hotel.discountedPrice}
                </a>
              </>
            );
            const hotelIconElementString =
              renderToStaticMarkup(hotelIconElement);

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
      )}
    </>
  );
};

export default HotelMap;
