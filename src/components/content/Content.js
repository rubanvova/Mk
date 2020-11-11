import React from "react";

import Text from "../Text";
import TitleText from "../Title";
import RectangleBox from "./RectangleBox";
import Button from "../Button/Button";
import ThreeRectangle from "./ThreeRectangle";
import BoxServiceList from "./BoxServiceList";
import { textTwo, textFour } from "./constants";
import Slider from "../Slider";
import { secondarySlides } from "../../data";
import BoxAboutas from "./BoxAboutas";
import BoxAdvantages from "./BoxAdvantages";
import BoxCooperation from "./BoxCooperation";
import BoxPrice from "./BoxPrice";
import BoxActivity from "./BoxActivity";
import BoxReviews from "./BoxReviews";
import BoxlegalSupport from "./BoxlegalSupport";

import images from "../../images";

import styles from "./Content.module.css";
import BoxCompanys from "./BoxCompanys";

const Content = () => {
  return (
    <div className={styles.background}>
      <div className={styles.wrapperContent}>
        <RectangleBox />
        <div className={styles.container}>
          <BoxlegalSupport />
        </div>
        <div className={styles.mintitle}>
          <TitleText className={styles.mintitle}>
            {"Основные направления деятельности"}
          </TitleText>
        </div>
        <div className={styles.boxRectangle}>
          <BoxActivity />
        </div>
        <div className={styles.button}>
          <Button> {"Все услуги"} </Button>
        </div>
        <div className={styles.textTwo}>
          <div>
            <TitleText className={styles.TextTitle}>
              {"Основные направления \nдеятельности"}
            </TitleText>
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
              <BoxCompanys />
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
        <BoxAboutas />
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
