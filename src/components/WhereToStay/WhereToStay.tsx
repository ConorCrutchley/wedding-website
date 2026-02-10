import { HotelList, HotelMap } from "@/components/WhereToStay";

import ContentSection from "@/components/ContentSection";
import sections from "@/constants/sections.json";

const WhereToStay = () => {
  return (
    <ContentSection id={sections["where-to-stay"]}>
      <h2>Where to Stay</h2>
      <HotelMap />
      <HotelList />
    </ContentSection>
  );
};

export default WhereToStay;
