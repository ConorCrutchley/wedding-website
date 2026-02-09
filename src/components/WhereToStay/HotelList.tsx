import { HotelItem } from "@/components/WhereToStay";
import { hotels } from "@/constants/hotels";

const HotelList = () => {
  return (
    <div>
      {hotels.map((hotel, i) => (
        <>
          <HotelItem key={hotel.id} hotel={hotel} />
          {i < hotels.length - 1 && <hr />}
        </>
      ))}
    </div>
  );
};

export default HotelList;
