import React from "react";
import classnames from "classnames";
import styles from "./Text.module.css";

const Text = ({ style = {}, className, children }) => {
  return (
    <div
      className={classnames(styles.box, className)}
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Text;
