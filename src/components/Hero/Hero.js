import React from "react";

// Styles and Modules
import Title from "./HeroTitle";
import Skills from "./HeroSkills";
import Social from "./HeroSocial";
import NavMessage from "./ScrollWheel";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.Container}>
        <div className={styles.Content}>
          <Title />
          <Skills />
        </div>
        <div className={styles.Footer}>
          <Social />
          <NavMessage />
        </div>
      </div>
    </div>
  );
};

export default Hero;
