import ContentSection from "@/components/ContentSection";
import HotelList from "./HotelList";
import sections from "@/constants/sections.json";

const WhereToStay = () => {
  return (
    <ContentSection id={sections["where-to-stay"]}>
      <h2>Where to Stay</h2>
      <HotelList />
    </ContentSection>
  );
};

export default WhereToStay;
