import React from "react";
import { motion } from "framer-motion";

// Styles and Modules
import Title from "./HeroTitle";
import Skill from "./HeroSkill";
import Social from "./HeroSocial";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.Container}>
        <div className={styles.Content}>
          <Title />
          <div className={styles.Skills}>
            <p>
              What I can do. &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <Skill SkillName="Android Development" />
            <Skill SkillName="Youtube Production" />
          </div>
        </div>
        <motion.div className={styles.Footer}>
          <Social />
          <motion.div className={styles.NavMessage}>
            <p>scroll down</p>
            <p>to see more</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
