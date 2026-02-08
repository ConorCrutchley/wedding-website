import fadedBlueFlowersFacingUp from "@/assets/faded-blue-flowers-facing-up.webp";
import styles from "@/styles/background.module.css";
import vibrantBlueFlowersFacingDown from "@/assets/vibrant-blue-flowers-facing-down.webp";
import vibrantBlueFlowersFacingUp from "@/assets/vibrant-blue-flowers-facing-up.webp";

const Background = () => {
  return (
    <>
      <div className={`${styles["bg-flower"]} ${styles["bg-top-left"]}`}>
        <img
          src={vibrantBlueFlowersFacingDown}
          alt="Vibrant blue flowers facing down"
        />
      </div>
      <div className={`${styles["bg-flower"]} ${styles["bg-top-right"]}`}>
        <img
          src={vibrantBlueFlowersFacingUp}
          alt="Vibrant blue flowers facing up"
        />
      </div>
      <div className={`${styles["bg-flower"]} ${styles["bg-bottom-left"]}`}>
        <img
          src={vibrantBlueFlowersFacingDown}
          alt="Vibrant blue flowers facing down"
        />
      </div>
      <div className={`${styles["bg-flower"]} ${styles["bg-bottom-right"]}`}>
        <img
          src={fadedBlueFlowersFacingUp}
          alt="Faded blue flowers facing up"
        />
      </div>
    </>
  );
};

export default Background;
