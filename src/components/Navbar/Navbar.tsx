import { Hamburger, PageLinks } from "@/components/Navbar";

import styles from "@/styles/navbar/navbar.module.css";
import { useNavOpenStore } from "@/store/useNavOpenStore";

/**
 * Navbar component
 *
 * This component renders the navbar of the page, including
 * the logo, page links, social links, and a hamburger menu
 * button.
 *
 * @returns {JSX.Element} A JSX element representing the navbar.
 */
const Navbar = () => {
  // Access the open state from the store
  const { open } = useNavOpenStore();

  return (
    <nav className={`flex  ${styles["navbar"]} ${open ? styles["open"] : ""}`}>
      {/* Items that display when the hamburger menu is opened */}
      <div className={styles["nav-links"]}>
        <PageLinks />
      </div>

      {/* Hamburger menu button */}
      <Hamburger />
    </nav>
  );
};

export default Navbar;
