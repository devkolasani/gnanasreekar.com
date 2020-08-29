import React from "react";
import { motion } from "framer-motion";

// Styles
import styles from "./Hero.module.scss";

// Framer Variants
const DotVariants = {
  rest: {
    width: "1vh",
    background: "#bcbabc",
  },
  animate: {
    width: "3vh",
    background: "#efa649",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const Skill = (props) => {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="animate"
      className={styles.Skill}
    >
      <motion.div
        variants={DotVariants}
        className={styles.SkillDot}
      ></motion.div>
      <p>{props.SkillName}</p>
    </motion.div>
  );
};

export default Skill;
