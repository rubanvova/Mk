import React from "react";
import classnames from "classnames";
import styles from "./Title.module.css";

const TitleText = ({ style = {}, className, children }) => (
  <div
    className={classnames(styles.font, className)}
    style={{
      ...style,
    }}
  >
    {children}
  </div>
);
export default TitleText;
