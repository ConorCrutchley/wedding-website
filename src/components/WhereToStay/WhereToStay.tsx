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
    </ContentSection>
  );
};

export default WhereToStay;
