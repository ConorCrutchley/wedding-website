import chalkBackground from "@/assets/background-chalk.webp";
import goldHexagonsWithFlowers from "@/assets/gold-hexagon-shaped-rings-with-purple-flowers.webp";
import sections from "@/constants/sections.json";
import styles from "@/styles/hero.module.css";

const Hero = () => {
  return (
    <section id={sections["home"]} className={styles["hero-section"]}>
      <img
        src={chalkBackground}
        alt="Chalk background"
        className={styles["hero-chalk"]}
      />
      <img
        src={goldHexagonsWithFlowers}
        alt="Gold hexagons with flowers"
        className={styles["hero-hexagons"]}
      />
      <h1>Tobi &amp; Conor</h1>
    </section>
  );
};

export default Hero;
