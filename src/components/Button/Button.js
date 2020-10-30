import React from "react";
import styles from "./Button.module.css";

const Button = ({ body, m, width, maxWidth }) => {
  return (
    <button
      className={styles.button}
      style={{ margin: m, width: width, maxWidth: maxWidth }}
    >
      {body}
    </button>
  );
};

export default Button;
