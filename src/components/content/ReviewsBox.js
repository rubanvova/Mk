import React from "react";
import styles from "./ReviewsBox.module.css";

const ReviewsBox = ({ name, body, img }) => {
  return (
    <div className={styles.wrapper}>
      <img src={img} alt="" />
      <div className={styles.text}>
        <div className={styles.textfooter}>Директор</div>
        <div className={styles.goldText}>{name}</div>
        <div className={styles.body}>{body}</div>
        <div className={styles.textfooter} style={{ paddingTop: "20px" }}>
          ЧИТАТЬ ДАЛЬШЕ
        </div>
      </div>
    </div>
  );
};

export default ReviewsBox;
