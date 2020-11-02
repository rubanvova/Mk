import React, { useState } from "react";
import classnames from "classnames";
import styles from "./ReviewsBox.module.css";
import images from "../../images/";

const ReviewsBox = ({ name, body, img }) => {
  const [active, setActive] = useState(true);

  return (
    <div className={styles.wrapper}>
      <img src={img} alt="" />
      <div className={styles.text}>
        <div className={styles.textfooter}>Директор</div>
        <div className={styles.goldText}>{name}</div>
        <img
          onClick={() => setActive(!active)}
          src={images.arrowLeft}
          alt=""
          height="10px"
          width="10px"
          className={classnames(styles.arrow, {
            [styles.arrowActive]: active,
          })}
        />
        {active ? (
          <div
            className={classnames(styles.body, {
              [styles.noActiveBody]: active,
            })}
          >
            {body}
          </div>
        ) : (
          <div
            className={classnames(styles.body, {
              [styles.noActiveBody]: active,
            })}
          >
            {body}
          </div>
        )}
        <div
          className={styles.textfooter}
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          ЧИТАТЬ ДАЛЬШЕ
        </div>
      </div>
    </div>
  );
};

export default ReviewsBox;
