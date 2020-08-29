import React from "react";
import { motion } from "framer-motion";

// Styles and Components
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <motion.div
        className={styles.Container}
        initial={{ y: -10 }}
        animate={{ y: 0 }}
      >
        <div className={styles.Logo}>
          <p>RGS.</p>
        </div>
        <div className={styles.MenuItems}>
          <MenuItem ItemName="Work" />
          <MenuItem ItemName="About" />
          <MenuItem ItemName="Contact" />
        </div>
      </motion.div>
    </div>
  );
};

export default Menu;
