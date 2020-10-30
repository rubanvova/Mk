import React from "react";
import styles from "./Rectangle.module.css";

const Rectangle = ({ text, img }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <div>{text} </div>
        <div>ПОДРОБНЕЕ</div>
      </div>
      <div className={styles.img}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Rectangle;
