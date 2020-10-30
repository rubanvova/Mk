import React from "react";
import styles from "./TitleText.module.css";

const TitleText = ({ body, lh, fs, width, m, maxWidth, fw }) => {
  return (
    <div
      className={styles.box}
      style={{
        fontWeight: fw,
        lineHeight: lh,
        fontSize: fs,
        width: width,
        margin: m,
        maxWidth: maxWidth,
      }}
    >
      {body}
    </div>
  );
};

export default TitleText;
