import React from "react";

// Styles and Assets
import styles from "./Hero.module.scss";
import mouse from "../../assets/icons/Mouse.png";

const NavMessage = () => {
  return (
    <div className={styles.NavMessage}>
      <div className={styles.ScrollMessage}>
        <p>scroll down</p>
        <p>to see more</p>
      </div>
      <img src={mouse} alt="Mouse"></img>
    </div>
  );
};

export default NavMessage;
