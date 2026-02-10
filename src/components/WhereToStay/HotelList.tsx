import { HotelItem } from "@/components/WhereToStay";
import React from "react";
import { hotels } from "@/constants/hotels";

const HotelList = () => {
  return (
    <div>
      {hotels.map((hotel, i) => (
        <React.Fragment key={`hotelItem_${hotel.id}`}>
          <HotelItem hotel={hotel} />
          {i < hotels.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default HotelList;
