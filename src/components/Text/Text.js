import React from "react";
import classnames from "classnames";
import styles from "./Text.module.css";

const Text = ({ style = {}, className, children }) => (
  <div
    className={classnames(styles.box, className)}
    style={{
      ...style,
      paddingTop: "20px",
    }}
  >
    {children}
  </div>
);

export default Text;
