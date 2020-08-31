import React from "react";

// Styles And Modules
import Social from "./ContactSocial";
import Illustration from "./ContactArt";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.Contact} id="Contact">
      <div className={styles.Container}>
        <div className={styles.Title}>
          <div className={styles.TitleContent}>
            <p>Contact</p>
            <div className={styles.TitleBar}></div>
          </div>
        </div>
        <div className={styles.Details}>
          <div className={styles.Detail}>
            <p className={styles.DetailName}>Phone</p>
            <a href="tel:+917673931021">
              <p className={styles.DetailValue}>7673931021</p>
            </a>
          </div>
          <div className={styles.Detail}>
            <p className={styles.DetailName}>E-mail</p>
            <a href="mailto:gnanasreekar@pm.me">
              <p className={styles.DetailValue}>gnanasreekar@pm.me</p>
            </a>
          </div>
        </div>
        <Illustration />
        <Social />
      </div>
    </div>
  );
};

export default Contact;
