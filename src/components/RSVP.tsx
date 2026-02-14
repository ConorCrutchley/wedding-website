import darkPurpleFlowers from "@/assets/dark-purple-flowers-lying-on-back-rtl.png";
import lightPurpleFlowers from "@/assets/light-purple-flowers-lying-down-on-front-rtl.webp";
import sections from "@/constants/sections.json";
import styles from "@/styles/rsvp.module.css";
import { venue } from "@/constants/venue";

const RSVP = () => {
  return (
    <section id={sections["rsvp"]} className={styles["rsvp-section"]}>
      <div className={styles["rsvp"]}>
        <img
          src={lightPurpleFlowers}
          alt="Light purple flowers lying down on front"
          className={`${styles["rsvp-img"]} ${styles["rsvp-img-top-left"]}`}
        />
        <img
          src={darkPurpleFlowers}
          alt="Dark purple flowers lying down on front"
          className={`${styles["rsvp-img"]} ${styles["rsvp-img-bottom-right"]}`}
        />
        <h2>Saturday, October 3rd, 2026</h2>
        <address className={styles["rsvp-address"]}>
          <p className="h3">{venue.venueName},</p>
          <p className="h3">{venue.property},</p>
          <p className="h3">{venue.city},</p>
          <p className="h3">{venue.postcode},</p>
          <p className="h3">{venue.country}</p>
        </address>
        <button>RSVP</button>
        <p>We can't wait to share our special day with you!</p>
      </div>
    </section>
  );
};

export default RSVP;
