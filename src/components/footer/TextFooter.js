import React from "react";
import styles from "./Text.module.css";

const Text = ({ body, width, maxWidth, cursor, fw, display, js, p }) => {
  return (
    <div
      className={styles.box}
      style={{
        fontWeight: fw,
        paddingTop: p,
        width: width,
        maxWidth: maxWidth,
        display: display,
        justifyContent: js,
        cursor: cursor,
      }}
    >
      {body}
    </div>
  );
};

export default Text;
