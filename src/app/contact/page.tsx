import React from "react";
import styles from "./contactStyles.module.css";

export default function page() {
  return (
    <>
      <div className="w-screen h-20 bg-black fixed z-50"></div>
      <div className={styles.parallax}>
        <div className={styles.parallaxLayerBase}>
          <div className="absolute left-1/2 -translate-x-1/2">
            This is the foreground
          </div>
        </div>
        <div className={styles.parallaxLayerBack}>
          <div className="absolute left-1/2 -translate-x-1/2">
            This is the background
          </div>
        </div>
      </div>
    </>
  );
}
