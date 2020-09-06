import React, { useState } from "react";
import { Link } from "react-scroll";

// Assets
import navopen from "../../assets/icons/navopenalt.svg";
import navclosed from "../../assets/icons/navclosed.svg";

// Styles and Components
import styles from "./MenuMobile.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const MenuMobile = () => {
  const [status, setStatus] = useState(false);
  return (
    <motion.div className={styles.Menu}>
      <div className={styles.Header}>
        <Link
          to="Hero"
          spy={true}
          smooth={true}
          duration={1000}
          activeClass="active"
          className={styles.Logo}
        >
          <p>RGS.</p>
        </Link>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className={styles.Navigator}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
            key={status}
            onClick={() => {
              setStatus(!status);
            }}
          >
            <motion.img src={status ? navopen : navclosed} alt="Hamburger" />
          </motion.div>
        </AnimatePresence>
      </div>
      <motion.div
        initial={{ display: "none", height: "0vh" }}
        animate={{
          display: status ? "grid" : "none",
          height: status ? "88vh" : "0vh",
        }}
        className={styles.Navigation}
      >
        <motion.div className={styles.NavLinks}>
          <Link
            spy={true}
            to="Work"
            smooth={true}
            duration={1000}
            activeClass="active"
            className={styles.NavLink}
          >
            <p>Work</p>
          </Link>
          <Link
            to="About"
            spy={true}
            smooth={true}
            duration={1000}
            activeClass="active"
            className={styles.NavLink}
          >
            <p>About</p>
          </Link>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            duration={1000}
            activeClass="active"
            className={styles.NavLink}
          >
            <p>Contact</p>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MenuMobile;
