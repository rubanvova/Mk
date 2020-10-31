import React from "react";

import Text from "../Text";
import TitleText from "../Title";
import RectangleBox from "./RectangleBox";
import Button from "../Button/Button";
import ThreeRectangle from "./ThreeRectangle";
import BoxServiceList from "./BoxServiceList";
import { textOne, textTwo, textFour } from "./constants";
import Slider from "../Slider";
import { secondarySlides } from "../../data";
import BoxWhite from "./BoxWhite";
import BoxAdvantages from "./BoxAdvantages";
import BoxCooperation from "./BoxCooperation";

import images from "../../images";

import styles from "./Content.module.css";
import BoxPrice from "./BoxPrice";
import BoxActivity from "./BoxActivity";
import BoxReviews from "./BoxReviews";

const Content = () => {
  return (
    <div className={styles.background}>
      <div className={styles.wrapperContent}>
        <RectangleBox />
        <div className={styles.container}>
          <div>
            <TitleText className={styles.clWidth520}>
              {
                "Юридическое сопровождение бизнеса \nот «МК-Правовые технологии»"
              }
            </TitleText>
            <Text className={styles.clWidth370}>{textOne}</Text>
          </div>
          <img src={images.marh} alt="" />
        </div>
        <div className={styles.mintitle}>
          <TitleText children={"Основные направления деятельности"} />
        </div>
        <div className={styles.boxRectangle}>
          <BoxActivity />
        </div>
        <div className={styles.button}>
          <Button> {"Все услуги"} </Button>
        </div>
        <div className={styles.textTwo}>
          <div className={styles.TextTitle}>
            <TitleText>{"Основные направления \nдеятельности"}</TitleText>
          </div>
          <div>
            <Text className={styles.clMaxWidth700}>{textTwo}</Text>
          </div>
        </div>
        <Slider
          data={secondarySlides}
          classes={{ img: styles.imgSlider }}
          margin
          padding
          onlyImages
        />
      </div>
      <div className={styles.whiteBox}>
        <div className={styles.wrapperReviews}>
          <div className={styles.containerReviews}>
            <TitleText className={styles.clmargin10}>
              {"Отзывы наших партнеров"}
            </TitleText>
            <BoxReviews />
            <div className={styles.textThree}>
              <Text className={styles.clWidth670}> {textFour}</Text>
              <div>Наши партнеры</div>
            </div>
            <div className={styles.companys}>
              <img src={images.company1} alt="" />
              <img src={images.company2} alt="" />
              <img src={images.company3} alt="" />
              <img src={images.company4} alt="" />
              <img src={images.company5} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapperContent}>
        <ThreeRectangle />
      </div>
      <img src={images.cartinka} alt="" />
      <div className={styles.wrapperContent}>
        <BoxServiceList />
      </div>
      <div className={styles.whiteBoxTwo}>
        <BoxWhite />
      </div>
      <div className={styles.wrapperContent}>
        <BoxAdvantages />
        <BoxCooperation />
        <BoxPrice />
      </div>
    </div>
  );
};

export default Content;
