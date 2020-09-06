import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Styles And Modules
import styles from "./Work.module.scss";
import WorkImages from "./WorkImages";
import { WorkContext } from "../../contexts/WorkContext";

const Work = () => {
  const { work, prevWork, nextWork } = useContext(WorkContext);

  return (
    <div className={styles.Work} id="Work">
      <div className={styles.Container}>
        <div className={styles.Title}>
          <div className={styles.TitleContent}>
            <p>Work</p>
            <div className={styles.TitleBar}></div>
          </div>
        </div>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className={styles.Details}
            exit={{ opacity: 0, y: 10 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p className={styles.Name}>{work["name"]}</motion.p>
            <motion.p className={styles.Description}>
              {work["description"]}
            </motion.p>
            <motion.div className={styles.Links}>
              <div className={styles.Link}>
                <p>{work["linkname"]}</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={work["link"]}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30.621"
                    height="30.621"
                    viewBox="0 0 30.621 30.621"
                  >
                    <g
                      id="Icon_feather-external-link"
                      works-name="Icon feather-external-link"
                      transform="translate(-3 -2.379)"
                    >
                      <path
                        id="Path_153"
                        works-name="Path 153"
                        d="M27,19.5v9a3,3,0,0,1-3,3H7.5a3,3,0,0,1-3-3V12a3,3,0,0,1,3-3h9"
                        fill="none"
                        stroke="#bcbabc"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                      />
                      <path
                        id="Path_154"
                        works-name="Path 154"
                        d="M22.5,4.5h9v9"
                        fill="none"
                        stroke="#bcbabc"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                      />
                      <path
                        id="Path_155"
                        works-name="Path 155"
                        d="M15,21,31.5,4.5"
                        fill="none"
                        stroke="#bcbabc"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </motion.div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={work["link"]}
              className={styles.LinkMobile}
            >
              <p>view</p>
            </a>
          </motion.div>
        </AnimatePresence>
        <WorkImages images={work["images"]} />
        <div className={styles.Navigation}>
          <p className={styles.NavIndicator}>{work["id"]}</p>
          <div className={styles.NavLinks}>
            <p className={styles.NavLink} onClick={prevWork}>
              prev
            </p>
            <p className={styles.NavLink} onClick={nextWork}>
              next
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
