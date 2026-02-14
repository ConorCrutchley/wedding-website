import ContentSection from "@/components/ContentSection";
import WhatToExpectItem from "@/components/WhatToExpect/WhatToExpectItem";
import bridesEntrance from "@/assets/bride-with-veil-over-her-face-entering-the-wedding-with-bridesmaids-following-her.webp";
import bridesGifts from "@/assets/centerpiece-filled-with-presents-wrapped-in-teal-paper.webp";
import familyEntrace from "@/assets/family-in-blue-and-silver-asoebi-entering-a-wedding.webp";
import groomsEntrance from "@/assets/groom-in-green-agbada-surrounded-by-his-groomsmen-in-blue-asoebi.webp";
import liveBand from "@/assets/couple-in-the-center-of-a-crowd-showering-them-with-dollars.webp";
import prayers from "@/assets/bride-and-bridesmaids-kneeling-and-praying.webp";
import proposalLetter from "@/assets/hand-holding-a-plate-decorated-in-blue-flowers-with-a-proposal-letter-enscribed-in-the-center.webp";
import prostration from "@/assets/groom-and-groomsmen-lying-on-the-floor-at-the-feet-of-the-brides-family.webp";
import responseLetter from "@/assets/hand-holding-a-wooden-tablet-with-a-golden-letter.webp";
import sections from "@/constants/sections.json";
import veil from "@/assets/bride-and-her-mother-under-the-brides-veil-embracing.webp";

const WhatToExpect = () => {
  return (
    <ContentSection id={sections["what-to-expect"]}>
      <h2>What to Expect</h2>
      <p>
        For many guests, and even the groom, this will be their first
        traditional Nigerian wedding. These guests may be wondering what will
        happen on the day?
      </p>
      <p>
        The ceremony is vibrant, symbolic, and full of prayer, music, and
        celebration. Here's a simple guide to what will happen on the day.
      </p>
      <WhatToExpectItem
        image={{
          src: familyEntrace,
          alt: "family in blue and silver aso ebi entering a wedding",
        }}
      >
        <h3>Family Entrances</h3>
        <p>
          Both families make their entrance accompanied by singing, dancing, and
          talking drums. Formal introductions are made as each family is
          welcomed into the venue.
        </p>
      </WhatToExpectItem>
      <WhatToExpectItem
        image={{
          src: proposalLetter,
          alt: "hand holding a plate decorated in blue flowers with a proposal letter enscribed in the center",
          position: "left",
        }}
      >
        <h3>Proposal Letter</h3>
        <p>
          A ceremonial letter is read on behalf of the groom's family, usually
          by the family head or appointed representative. The letter formally
          expresses the family's intention for their son to marry the bride.
        </p>
      </WhatToExpectItem>
      <WhatToExpectItem
        image={{
          src: responseLetter,
          alt: "hand holding a wooden tablet with a golden letter",
        }}
      >
        <h3>Response (Kíkà Letter)</h3>
        <p>
          A member of the bride's family responds by reading an acceptance
          letter, acknowledging the proposal and welcoming the groom's family.
        </p>
      </WhatToExpectItem>
      <WhatToExpectItem
        image={{
          src: groomsEntrance,
          alt: "groom in green agbada surrounded by his groomsmen in blue aso ebi",
          position: "left",
        }}
      >
        <h3>Groom's Entrance</h3>
        <p>
          The groom enters with his groomsmen, dancing joyfully. As a sign of
          respect to the bride's family and elders, they remove their filas
          (hats).
        </p>
      </WhatToExpectItem>
      <WhatToExpectItem
        image={{
          src: prostration,
          alt: "groom and groomsmen lying on the floor at the feet of the brides family",
        }}
      >
        <h3>Ìdobálè (Prostration)</h3>
        <p>
          The groom, supported by his groomsmen, prostrates fully on the floor
          before the bride's family. This act symbolises humility, respect for
          elders, and a formal request for the bride's hand in marriage.
        </p>
      </WhatToExpectItem>
      <WhatToExpectItem
        image={{
          src: bridesEntrance,
          alt: "bride with veil over her face entering the wedding with bridesmaids following her",
          position: "left",
        }}
      >
        <h3>Bride's Entrance</h3>
        <p>
          The bride enters with her bridesmaids and friends, accompanied by
          singing, dancing, and enthusiastic cheering.
        </p>
      </WhatToExpectItem>
      <WhatToExpectItem
        image={{
          src: veil,
          alt: "bride and her mother under the brides veil embracing",
        }}
      >
        <h3>Veiling & Blessings</h3>
        <p>
          The bride appears fully veiled, symbolising modesty and honour. Once
          she reaches her family, she stands with her mother under the veil
          while prayers and blessings are offered before she is guided to her
          in-laws.
        </p>
      </WhatToExpectItem>
      <WhatToExpectItem
        image={{
          src: bridesGifts,
          alt: "centerpiece filled with presents wrapped in teal paper",
          position: "left",
        }}
      >
        <h3>Èrù Ìyàwó (Bride's Gifts)</h3>
        <p>
          The groom's family presents gifts to the bride's family as a token of
          appreciation for raising her well. In Nigerian culture, a child is
          raised by the whole community, so these gifts honour the wider family
          and elders.
        </p>
      </WhatToExpectItem>
      <WhatToExpectItem
        image={{
          src: prayers,
          alt: "bride and bridesmaids kneeling and praying",
        }}
      >
        <h3>Prayers & Joining the Couple</h3>
        <p>
          Both families pray over the couple for fertility, prosperity,
          longevity, and peace. The bride is then formally joined with the
          groom, followed by celebration and applause.
        </p>
      </WhatToExpectItem>
      <WhatToExpectItem
        image={{
          src: liveBand,
          alt: "couple in the center of a crowd showering them with dollars",
          position: "left",
        }}
      >
        <h3>Live Band & Celebration</h3>
        <p>
          A live band provides music throughout the ceremony, praising the
          couple and guests. Guests often “spray” money (traditionally U.S.
          dollars) on the couple or dancers as a sign of joy and appreciation.
        </p>
      </WhatToExpectItem>
      <h3>Not sure what's happening? That's okay!</h3>
      <p>
        Many guests will be experiencing a traditional Nigerian wedding for the
        first time. There's no pressure to get anything “right”. Just watch,
        listen, dance if you feel like it, and enjoy the celebration. If in
        doubt, someone will happily provide guidance and information where
        needed.
      </p>
    </ContentSection>
  );
};

export default WhatToExpect;
