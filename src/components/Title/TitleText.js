import React from "react";
import classnames from "classnames";
import styles from "./TitleText.module.css";

const TitleText = ({ style = {}, className, children }) => (
  <div
    className={classnames(styles.box, className)}
    style={{
      ...style,
    }}
  >
    {children}
  </div>
);
export default TitleText;
