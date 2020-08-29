import React from "react";
import { motion } from "framer-motion";

// Styles
import styles from "./Hero.module.scss";

// Framer Variants
const TitleVariants = {
  rest: {
    width: "4vw",
  },
  animate: {
    width: "5vw",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const Title = () => {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="animate"
      className={styles.Title}
    >
      <p>Gnana</p>
      <p>Sreekar.</p>
      <motion.div
        variants={TitleVariants}
        className={styles.TitleBar}
      ></motion.div>
    </motion.div>
  );
};

export default Title;
