import { HotelItem } from "@/components/WhereToStay";
import React from "react";
import { hotels } from "@/constants/hotels";
import styles from "@/styles/where-to-stay/hotel-list.module.css";

const HotelList = () => {
  return (
    <div>
      {hotels.map((hotel, i) => (
        <React.Fragment key={`hotelItem_${hotel.id}`}>
          <HotelItem hotel={hotel} />
          {/* {i < hotels.length - 1 && <hr />} */}
          <hr
            className={i === hotels.length - 1 ? styles["last-hotel-hr"] : ""}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default HotelList;
