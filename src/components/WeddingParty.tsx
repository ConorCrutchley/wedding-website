import ContentSection from "@/components/ContentSection";
import sections from "@/constants/sections.json";

const WeddingParty = () => {
  return (
    <ContentSection id={sections["wedding-party"]} roundBottomBorders>
      <h2>Wedding Party</h2>
    </ContentSection>
  );
};

export default WeddingParty;
