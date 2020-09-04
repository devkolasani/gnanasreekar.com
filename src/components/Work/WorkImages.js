import React, { useState, useEffect } from "react";

// Styles And Modules
import styles from "./Work.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const WorkImages = (props) => {
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(props.images[0]);

  useEffect(() => {
    const cycleImage = () => {
      if (index === props.images.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
      setImage(props.images[index]);
    };
    const interval = setInterval(cycleImage, 4000);
    return () => clearInterval(interval);
  }, [index, props.images, image]);

  return (
    <div className={styles.Images}>
      <motion.div
        className={styles.ImageBackground}
        initial={{ width: "28vh", height: "28vh" }}
        animate={{ width: "32vh", height: "32vh" }}
        transition={{ duration: 0.8 }}
      ></motion.div>
      <AnimatePresence exitBeforeEnter>
        <motion.img
          exit={{ opacity: 0, scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className={styles.Image}
          key={index}
          src={image}
          alt="Mockup"
        />
      </AnimatePresence>
    </div>
  );
};

export default WorkImages;
