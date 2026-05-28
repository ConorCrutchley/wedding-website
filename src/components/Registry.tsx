import ContentSection from "@/components/ContentSection";
import sections from "@/constants/sections.json";
import styles from "@/styles/registry.module.css";

const Registry = () => {
  return (
    <ContentSection id={sections["registry"]}>
      <h2>Registry</h2>
      <p>
        Your presence at our wedding is the greatest gift we could ask for. If
        you'd like to give something extra, we've created a fund for our
        honeymoon travelling on a Caribbean cruise and for our first home.
      </p>
      <p>
        Contributions will help us enjoy special dinners, cocktails on deck,
        exciting island excursions, and maybe even a visit to the filming
        locations from Death in Paradise (hopefully without any actual
        mysteries!), as well as support us as we begin this next chapter
        together.
      </p>
      <p>
        Thank you for helping us start married life with an unforgettable
        adventure.
      </p>
      <p>
        <a
          href="https://www.weddingshop.com/giftlist/tobiandconor"
          target="_blank"
          rel="noreferrer"
          className={`button ${styles["registry-button"]}`}
        >
          View Our Registry
        </a>
      </p>
    </ContentSection>
  );
};

export default Registry;
