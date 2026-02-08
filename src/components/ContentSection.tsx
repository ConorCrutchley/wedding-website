import React from "react";
import purpleFlowers from "@/assets/purple-flowers-lying-horizontally-going-from-light-purple-to-dark-purple-ltr.webp";
import styles from "@/styles/content-section.module.css";

const ContentSection = ({
  id,
  children,
  includeFlower = true,
  roundTopBorders = false,
  roundBottomBorders = false,
}: {
  id: string;
  children: React.ReactNode;
  includeFlower?: boolean;
  roundTopBorders?: boolean;
  roundBottomBorders?: boolean;
}) => {
  return (
    <section
      id={id}
      className={`${styles["content-section"]} ${roundTopBorders ? styles["round-top-borders"] : ""} ${roundBottomBorders ? styles["round-bottom-borders"] : ""}`}
    >
      {includeFlower && (
        <img
          src={purpleFlowers}
          alt="Purple flowers lying horizontally going from light purple to dark purple"
          className={styles["content-section-flower"]}
        />
      )}
      {children}
    </section>
  );
};

export default ContentSection;
