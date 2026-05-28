import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaWalking } from "react-icons/fa";
import type { Hotel } from "@/models/hotel.model";
import { IoStar } from "react-icons/io5";
import styles from "@/styles/where-to-stay/hotel-item.module.css";

const HotelItem = ({ hotel }: { hotel: Hotel }) => {
  return (
    <div className={styles["hotel-item"]}>
      <div className={styles["hotel-image"]}>
        <img src={hotel.images[0]} alt={hotel.name} />
      </div>
      <div>
        <h4 className="h5">{hotel.name}</h4>
        <address className={styles["hotel-location"]}>
          <p>
            {hotel.address.property},<br />
            {hotel.address.city},<br />
            {hotel.address.postcode},<br />
            {hotel.address.country}
          </p>
        </address>
      </div>
      <div className={styles["hotel-stats"]}>
        <span>
          {/* Add a star for each rating */}
          {[...Array(hotel.rating)].map((_, index) => (
            <IoStar key={`hotelItem_${hotel.id}_${index}`} />
          ))}
        </span>
        <span>{hotel.location.distance} Miles</span>
        <span>
          <FaWalking />
          {hotel.location.walkTime} Min
        </span>
      </div>
      {hotel.description}
      <div className={styles["hotel-prices"]}>
        <span>
          <strong>Starting From</strong>
        </span>
        <div className={styles["hotel-prices-details"]}>
          <span className={styles["event-only-rate"]}>
            <span>Event-Only Rate</span>
            <AiOutlineQuestionCircle
              stroke="rgb(0, 146, 137)"
              fill="rgb(0, 146, 137)"
            />
          </span>
          <span>
            &pound;
            {`${hotel.discountedPrice}`.match(/\./g)
              ? hotel.discountedPrice.toFixed(2)
              : hotel.discountedPrice}{" "}
            / night
          </span>
          <span className={styles["price-savings"]}>
            <span className={styles["full-price"]}>
              &pound;
              {`${hotel.fullPrice}`.match(/\./g)
                ? hotel.fullPrice.toFixed(2)
                : hotel.fullPrice}
            </span>
            <span className={styles["save-badge"]}>
              Save{" "}
              {Math.round(
                ((hotel.fullPrice - hotel.discountedPrice) / hotel.fullPrice) *
                  100,
              )}
              %
            </span>
          </span>
        </div>
      </div>
      <a
        href={hotel.link}
        className={`button ${styles["book-now"]}`}
        target="_blank"
        rel="noreferrer"
      >
        Book Now
      </a>
    </div>
  );
};

export default HotelItem;
