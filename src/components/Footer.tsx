import styles from "@/styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      Site designed and developed by
      <br />
      <a
        href="https://github.com/ConorCrutchley"
        target="_blank"
        rel="noreferrer"
      >
        Conor Crutchley
      </a>
    </footer>
  );
};

export default Footer;
