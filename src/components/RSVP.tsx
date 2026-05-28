import darkPurpleFlowers from "@/assets/dark-purple-flowers-lying-on-back-rtl.png";
import lightPurpleFlowers from "@/assets/light-purple-flowers-lying-down-on-front-rtl.webp";
import sections from "@/constants/sections.json";
import styles from "@/styles/rsvp.module.css";
import { venue } from "@/constants/venue";

const RSVP = () => {
  const currentDate = new Date();
  const rsvpDate = new Date(2026, 7, 1);
  const rsvpDateString = rsvpDate.toLocaleDateString("en-GB");
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
        {currentDate > rsvpDate ? (
          <p>
            <u>
              The deadline to RSVP has now passed. Thank you for your interest.
            </u>
          </p>
        ) : (
          <>
            <address className={styles["rsvp-address"]}>
              <p className="h3">{venue.venueName},</p>
              <p className="h3">{venue.address.property},</p>
              <p className="h3">{venue.address.city},</p>
              <p className="h3">{venue.address.postcode},</p>
              <p className="h3">{venue.address.country}</p>
            </address>
            <p>Please submit your RSVP by {rsvpDateString}.</p>
            <a
              className="button"
              href="https://withjoy.com/tobi-and-conor/rsvp"
              target="_blank"
              rel="noreferrer"
            >
              RSVP
            </a>
          </>
        )}
        <p>We can't wait to share our special day with you!</p>
      </div>
    </section>
  );
};

export default RSVP;
