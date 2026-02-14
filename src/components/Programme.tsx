import ContentSection from "@/components/ContentSection";
import sections from "@/constants/sections.json";

const Schedule = () => {
  return (
    <ContentSection id={sections["programme"]}>
      <h2>Programme</h2>
      <p>
        The wedding should start around 3pm. The ceremony is expected to run as
        follows:
      </p>
      <ol>
        <li>Entrance of the Bride's Family</li>
        <li>Entrance of the Grooms's Family</li>
        <li>Opening Prayer</li>
        <li>Opening Hymn</li>
        <li>Introduction of both Parents</li>
        <li>
          Our Mission - <em>Alaga Iduro</em>
        </li>
        <li>
          Marriage Proposal Letter <em>(from the Groom's family)</em>
        </li>
        <li>
          Marriage Acceptance Letter <em>(from the Bride's family)</em>
        </li>
        <li>Welcome the Groom</li>
        <li>Here Comes the Bride</li>
        <li>Prayer for the Bride by the Bride's Family</li>
        <li>Unveiling the Bride by the Groom's Family</li>
        <li>Presentation of Engagement Gifts</li>
        <li>Special Prayers for the Couple</li>
        <li>Handing the Bride over to her new Family</li>
        <li>Presentation of Gifts to the Groom's Family</li>
        <li>Cutting of the Engagement Cake</li>
        <li>Closing Hymn &amp; Prayer</li>
        <li>Party Time</li>
      </ol>
    </ContentSection>
  );
};

export default Schedule;
