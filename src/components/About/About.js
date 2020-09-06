import React from "react";

// Styles, Assets And Modules
import Illustration from "./AboutArt";
import Resume from "../../assets/Resume.pdf";
import styles from "./About.module.scss";

const About = () => {
  let desc = `Hello, I'm Gnana Sreekar. How's it going?\n\
I'm an Android developer based in India and a hardware geek. \
I love working on IoT projects like automating my home.\
I'm a tech enthusiast, have a YouTube channel that focuses on all things tech.`;

  return (
    <div className={styles.About} id="About">
      <div className={styles.Container}>
        <div className={styles.Title}>
          <div className={styles.TitleContent}>
            <p>About</p>
            <div className={styles.TitleBar}></div>
          </div>
        </div>
        <div className={styles.Description}>
          <p>{desc}</p>
        </div>
        <div className={styles.DescriptionMobile}>
          <p>
            Hello, I'm Gnana Sreekar. How's it going? I'm an Android developer
            based in India and a hardware geek.
          </p>
        </div>
        <div className={styles.Download}>
          <a
            href={Resume}
            target="_blank"
            download="Resume.pdf"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
        <Illustration />
      </div>
    </div>
  );
};

export default About;
