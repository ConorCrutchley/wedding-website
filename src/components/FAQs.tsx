import ContentSection from "@/components/ContentSection";
import sections from "@/constants/sections.json";

const FAQs = () => {
  return (
    <ContentSection id={sections["faqs"]}>
      <h2>Frequently Asked Questions</h2>
      {/* Attire */}
      <h3>Attire & Dress Code</h3>
      <details>
        <summary>What should I wear?</summary>
        <p>
          Traditional Nigerian weddings are colourful and celebratory. Guests
          are encouraged to wear bright, elegant attire. Nigerian guests may
          wear traditional outfits (asoebi, agbada, iro & buba, gele), while
          non-Nigerian guests are welcome to wear formal wedding attire or
          traditional clothing if they&lsquo;d like.
        </p>
      </details>
      <details>
        <summary>Do I have to wear traditional Nigerian clothing?</summary>
        <p>
          Not at all! You&lsquo;re welcome to wear a suit, dress, or formal
          outfit. If you&lsquo;d like to embrace the culture, you absolutely
          can, but it&lsquo;s optional.
        </p>
      </details>
      <details>
        <summary>What is asoebi? Can I buy it?</summary>
        <p>
          Asoebi is a coordinated fabric worn by close family and friends. If
          you&lsquo;ve been invited to wear asoebi, you&lsquo;ll be contacted
          directly. If not, feel free to wear any formal outfit in colours that
          complement the celebration.
        </p>
      </details>
      <details>
        <summary>Are there colours I should avoid?</summary>
        <p>
          Please avoid wearing the bridal colour, as this will be reserved for
          the bride.
        </p>
      </details>

      {/* Participation */}
      <h3>Participation & Traditions</h3>
      <details>
        <summary>Will guests be expected to participate?</summary>
        <p>
          Yes... in the best way! Nigerian weddings are very interactive. There
          will be music, dancing, and moments where guests are encouraged to
          join in. Don&lsquo;t worry, just follow the crowd and enjoy.
        </p>
      </details>
      <details>
        <summary>What is “spraying” money?</summary>
        <p>
          Spraying is a joyful tradition where guests place money on the couple
          while they dance. It symbolises celebration and prosperity. It&lsquo;s
          completely optional, but small denominations are helpful if
          you&lsquo;d like to participate.
        </p>
      </details>
      <details>
        <summary>
          Is it okay if I don&lsquo;t understand parts of the ceremony?
        </summary>
        <p>
          Absolutely. Some portions may be conducted in a Nigerian language.
          Don&lsquo;t worry, key parts will be explained, and you can simply
          enjoy the atmosphere and celebration.
        </p>
      </details>
      <details>
        <summary>Will there be a lot of dancing?</summary>
        <p>Yes! Come prepared to dance, or at least cheer others on.</p>
      </details>

      {/* Food */}
      <h3>Food & Drink</h3>
      <details>
        <summary>What kind of food will be served?</summary>
        <p>
          Expect traditional Nigerian dishes alongside familiar options.
          It&lsquo;s a great opportunity to try something new!
        </p>
      </details>
      <details>
        <summary>Will there be vegetarian or vegan options?</summary>
        <p>
          Yes, there will be suitable options available. If you have specific
          dietary requirements, please let us know in advance.
        </p>
      </details>
      <details>
        <summary>Is Nigerian food spicy?</summary>
        <p>
          Some dishes may have heat, but there will also be milder options
          available.
        </p>
      </details>

      {/* Gifts */}
      <h3>Gifts</h3>
      <details>
        <summary>Is spraying money the same as giving a wedding gift?</summary>
        <p>
          No, spraying is part of the celebration. If you&lsquo;d like to give a
          gift, please see our registry details below.
        </p>
      </details>
      <details>
        <summary>Is there a gift registry?</summary>
        <p>
          Yes, you can find our registry details on this website. Your presence
          is the greatest gift, but we appreciate your generosity.
        </p>
      </details>

      {/* Logistics */}
      <h3>Timing & Logistics</h3>
      <details>
        <summary>Will the wedding start on time?</summary>
        <p>
          Nigerian weddings are joyful and relaxed, timings may be flexible. We
          recommend arriving on time and settling in for a full celebration.
        </p>
      </details>
      <details>
        <summary>How long will the celebration last?</summary>
        <p>
          Traditional weddings can be several hours long, so come ready for a
          full day of celebration.
        </p>
      </details>
      <details>
        <summary>Can I leave early if needed?</summary>
        <p>Of course. Stay as long as you&lsquo;re able.</p>
      </details>
      <details>
        <summary>
          I&lsquo;ve never been to a Nigerian wedding, what if I do something
          wrong?
        </summary>
        <p>
          You won&lsquo;t! Nigerian weddings are warm, joyful, and welcoming. If
          you&lsquo;re unsure about anything, just follow the lead of those
          around you. The most important thing is that you&lsquo;re there to
          celebrate with us.
        </p>
      </details>
    </ContentSection>
  );
};

export default FAQs;
