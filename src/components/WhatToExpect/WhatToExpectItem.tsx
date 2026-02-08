import type { WhatToExpectImage } from "@/models/whatToExpectImage.model";
import styles from "@/styles/what-to-expect.module.css";

const WhatToExpectItem = ({
  image,
  children,
}: {
  image: WhatToExpectImage;
  children: React.ReactNode;
}) => {
  const position = image.position ?? "right";
  return (
    <div className={`${styles["what-to-expect-item"]} ${styles[position]}`}>
      <div>{children}</div>
      <div className={styles["what-to-expect-item-image"]}>
        <img src={image.src} alt={image.alt} />
      </div>
    </div>
  );
};

export default WhatToExpectItem;
