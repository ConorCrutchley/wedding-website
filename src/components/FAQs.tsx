import ContentSection from "@/components/ContentSection";
import { scrollToSection } from "@/utils/scrollToSection";
import sections from "@/constants/sections.json";

const FAQs = () => {
  return (
    <ContentSection id={sections["faqs"]} roundBottomBorders>
      <h2>Frequently Asked Questions</h2>
      {/* Attire */}
      <h3>Attire & Dress Code</h3>
      <details open>
        <summary>What should I wear?</summary>
        <p>
          Traditional Nigerian weddings are colourful and celebratory. Guests
          are encouraged to wear bright, elegant attire. Nigerian guests
          typically wear aso ebi <strong>(</strong>coordinated outfits worn by
          family members, friends, and specific groups for an occasion
          <strong>)</strong>, while non-Nigerian guests are welcome to wear any
          wedding attire including aso ebi if they wish.
        </p>
        <p>
          If you are not wearing aso ebi, we suggest the following colours if
          you can:
        </p>
        <ul>
          <li>Young female guests are encouraged to wear dusty pink </li>
          <li>Older female guests are encouraged to wear baby pink</li>
          <li>Male guests are encouraged to wear a formal suit</li>
        </ul>
        <p>
          If you don't have clothes in the above colours, you can wear the
          colour of your choice.
        </p>
        <p>
          If you are not wearing aso ebi, you are welcome to wear a suit, dress
          or formal outfit.
        </p>
      </details>
      <details open>
        <summary>Do I have to wear traditional Nigerian clothing?</summary>
        <p>
          Not at all! You're welcome to wear a suit, dress, or formal outfit.
        </p>
      </details>
      <hr />

      {/* Participation */}
      <h3>Participation & Traditions</h3>
      <details open>
        <summary>Will guests be expected to participate?</summary>
        <p>
          Yes... in the best way! Traditional weddings are very interactive.
          There will be music, dancing, and moments where guests are encouraged
          to join in. Don't worry, just follow the crowd and enjoy.
        </p>
      </details>
      <details open>
        <summary>What is “spraying” money?</summary>
        <p>
          Spraying is a joyful tradition where guests place money on the couple,
          family, and bridal/groomsmen party while they dance. It symbolises
          celebration and prosperity. It's completely optional, and you can
          decide if you'd like to participate.
        </p>
      </details>
      <details open>
        <summary>
          Is it okay if I don't understand parts of the ceremony?
        </summary>
        <p>
          Absolutely, but don't worry, key parts will be explained, and you can
          simply enjoy the atmosphere and celebration.
        </p>
      </details>
      <details open>
        <summary>Will there be a lot of dancing?</summary>
        <p>Yes! Come prepared to dance, or at least cheer others on.</p>
      </details>
      <hr />

      {/* Food */}
      <h3>Food & Drink</h3>
      <details open>
        <summary>What kind of food will be served?</summary>
        <p>
          Expect traditional Nigerian dishes. It's a great opportunity to try
          something new!
        </p>
      </details>
      <details open>
        <summary>Will there be vegetarian or vegan options?</summary>
        <p>
          Yes, there will be a variety of options available. If you have
          specific dietary requirements, please let us know in advance.
        </p>
      </details>
      <details open>
        <summary>Is Nigerian food spicy?</summary>
        <p>
          Some dishes may have heat, but there will also be milder options
          available.
        </p>
      </details>
      <hr />

      {/* Gifts */}
      <h3>Gifts</h3>
      <details open>
        <summary>Is spraying money the same as giving a wedding gift?</summary>
        <p>
          No, spraying is part of the celebration. If you'd like to give a gift,
          we would appreciate any contributions towards our honeymoon / first
          home. More details can be found in the{" "}
          <a
            href={`#${sections["registry"]}`}
            onClick={(e) => {
              // Prevent the default behavior of the link
              // and scroll to the section
              e.preventDefault();
              scrollToSection(sections["registry"]);
            }}
          >
            Registry
          </a>{" "}
          section.
        </p>
      </details>
      <details open>
        <summary>Is there a gift registry?</summary>
        <p>
          Yes, we have a gift registry where you can make contributions towards
          the adventures we will have on our honeymoon and the honeymoon itself,
          or you can contribute to our first home. More details can be found in
          the{" "}
          <a
            href={`#${sections["registry"]}`}
            onClick={(e) => {
              // Prevent the default behavior of the link
              // and scroll to the section
              e.preventDefault();
              scrollToSection(sections["registry"]);
            }}
          >
            Registry
          </a>{" "}
          section.
        </p>
      </details>
      <hr />

      {/* Logistics */}
      <h3>Timing & Logistics</h3>
      <details open>
        <summary>How long will the celebration last?</summary>
        <p>
          Traditional weddings encompass various parts, so come ready for a full
          day of celebration.
        </p>
      </details>
      <details open>
        <summary>Can I leave early if needed?</summary>
        <p>Of course, you can stay as long as you're able to.</p>
      </details>
      <details open>
        <summary>
          I've never been to a Nigerian wedding, what if I do something wrong?
        </summary>
        <p>
          You won't! Traditional weddings are warm, upbeat, and welcoming. If
          you're unsure about anything, please feel free to ask and follow the
          lead of those around you. The most important thing is that you enjoy
          yourself and join us in celebrating.
        </p>
      </details>
    </ContentSection>
  );
};

export default FAQs;
