import React from "react";
import classnames from "classnames";
import styles from "./Button.module.css";

const Button = ({ style = {}, className, children }) => (
  <button className={classnames(styles.button, className)} style={{ ...style }}>
    {children}
  </button>
);

export default Button;
