import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    // remove the listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.nav}>
      <img className={styles.nav__logo} src={"/logo.svg"} alt="netflix logo" />
      <div className={styles.dropdown__menu}></div>
      <div className={styles.button}>Sign in</div>
    </div>
  );
};

export default Navbar;
