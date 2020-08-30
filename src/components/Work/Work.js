import React from "react";

// Styles And Modules
import styles from "./Work.module.scss";

const WorkRef = useRef(null);

const Work = () => {
  return (
    <div className={styles.Work}>
      <div className={styles.Container}></div>
    </div>
  );
};

export default Work;
