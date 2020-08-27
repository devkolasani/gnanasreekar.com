import React from "react";
import { motion } from "framer-motion";

// Styles
import styles from "./Menu.module.scss";

// Framer Motion Variants
const TextVariants = {
  rest: {
    color: "#bcbabc",
    marginBottom: 0,
  },
  hover: {
    color: "#ffffff",
    marginBottom: 3,
  },
};

const IndicatorVariants = {
  rest: {
    scale: 0,
    marginTop: 0,
  },
  hover: {
    scale: 1,
    marginTop: 3,
  },
};

// Component
const MenuItem = (props) => {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      className={styles.MenuItem}
    >
      <motion.p variants={TextVariants}>{props.ItemName}</motion.p>
      <motion.div
        variants={IndicatorVariants}
        className={styles.ItemIndicator}
      ></motion.div>
    </motion.div>
  );
};

export default MenuItem;
