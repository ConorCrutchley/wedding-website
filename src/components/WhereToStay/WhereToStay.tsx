import { HotelList, HotelMap } from "@/components/WhereToStay";

import ContentSection from "@/components/ContentSection";
import sections from "@/constants/sections.json";
import styles from "@/styles/where-to-stay/where-to-stay.module.css";

const WhereToStay = () => {
  return (
    <ContentSection id={sections["where-to-stay"]}>
      <h2>Where to Stay</h2>
      <div className={styles["where-to-stay"]}>
        {/* 
          Hotel Map is sticky, when the user scrolls down, 
          this should stick to the top while scrolling through the hotel list 
        */}
        <HotelMap />
        <HotelList />
      </div>
      <p className={styles["explore-hotels-prompt"]}>
        If none of these hotels take your fancy, there are still a number of
        hotels nearby to choose from. You can browse more with our special rates
        here:
      </p>
      <a
        href="https://withjoy.com/tobi-and-conor/hotel/search?layout=compact&source=guest_map&utm_campaign=guest_map&utm_medium=web&utm_source=website_accommodations_page"
        target="_blank"
        rel="noreferrer"
        className={`button ${styles["explore-hotels-button"]}`}
      >
        Explore More Hotels
      </a>
    </ContentSection>
  );
};

export default WhereToStay;
