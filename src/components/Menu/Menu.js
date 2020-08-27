import React from "react";

// Styles and Components
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <div className={styles.Container}>
        <div className={styles.Logo}>
          <p>RGS.</p>
        </div>
        <div className={styles.MenuItems}>
          <MenuItem ItemName="Work" />
          <MenuItem ItemName="About" />
          <MenuItem ItemName="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
