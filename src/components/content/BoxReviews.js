import React from "react";
import ReviewsBox from "./ReviewsBox";
import Button from "../Button";
import images from "../../images";
import { textThree } from "./constants";
import styles from "./BoxReviews.module.css";

const BoxReviews = () => {
  return (
    <>
      <div className={styles.reviews}>
        <ReviewsBox
          img={images.titlePhoto1}
          name={"С.В.Косачев"}
          body={textThree}
        />
        <ReviewsBox
          img={images.titlePhoto2}
          name={"С.В.Косачев"}
          body={textThree}
        />
      </div>
      <div className={styles.panel}>
        <Button> {"Все отзывы"}</Button>
        <div className={styles.cercles}>
          <div className={styles.cercle} />
          <div className={styles.cercle} />
          <div className={styles.cercle} />
        </div>
        <div className={styles.arrows}>
          <img src={images.arrowLeft} alt="" />
          <img src={images.arrowRight} alt="" />
        </div>
      </div>
    </>
  );
};

export default BoxReviews;
