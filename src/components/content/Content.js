import React from "react";

import Text from "../Text";
import TitleText from "../Title";
import RectangleBox from "./RectangleBox";
import Rectangle from "./Rectangle";
import Button from "../Button/Button";
import ThreeRectangle from "./ThreeRectangle";
import BoxServiceList from "./BoxServiceList";
import { textOne } from "./bigTexts.js";
import { textTwo } from "./bigTexts.js";
import { textThree } from "./bigTexts.js";
import { textFour } from "./bigTexts.js";
import Slider from "../Slider";
import { secondarySlides } from "../../data";
import ReviewsBox from "./ReviewsBox";
import BoxWhite from "./BoxWhite";
import BoxAdvantages from "./BoxAdvantages";
import BoxCooperation from "./BoxCooperation";

import marh from "./img/marh.png";
import cerlce1 from "./img/cerlce1.png";
import cercle2 from "./img/cercle2.png";
import cercle3 from "./img/cercle3.png";
import cercle4 from "./img/cercle4.png";
import cercle5 from "./img/cercle5.png";
import cercle6 from "./img/cercle6.png";
import cercle7 from "./img/cercle7.png";
import cercle8 from "./img/cercle8.png";
import cercle9 from "./img/cercle9.png";
import titlePhoto1 from "./img/titlePhoto1.png";
import titlePhoto2 from "./img/titlePhoto2.png";
import arrowLeft from "./img/arrowLeft.png";
import arrowRight from "./img/arrowRight.png";
import company1 from "./img/company1.svg";
import company2 from "./img/company2.svg";
import company3 from "./img/company3.svg";
import company4 from "./img/company4.png";
import company5 from "./img/company5.png";
import cartinka from "./img/cartinka.png";

import styles from "./Content.module.css";
import BoxPrice from "./BoxPrice";

const Content = () => {
  return (
    <div className={styles.background}>
      <div className={styles.wrapperContent}>
        <RectangleBox />
        <div className={styles.container}>
          <div>
            <TitleText
              fs={"28px"}
              lh={"40px"}
              width={"520px"}
              body={
                "Юридическое сопровождение бизнеса \nот «МК-Правовые технологии»"
              }
            />
            <Text body={textOne} width={"370px"} />
          </div>
          <img src={marh} alt="" />
        </div>
        <div className={styles.mintitle}>
          <TitleText body={"Основные направления деятельности"} />
        </div>
        <div className={styles.boxRectangle}>
          <div className={styles.box}>
            <Rectangle text={"Взыскание долгов"} img={cerlce1} />
            <Rectangle text={"Реорганизация бизнеса"} img={cercle2} />
            <Rectangle text={"Продажа бизнеса"} img={cercle3} />
          </div>
          <div className={styles.box}>
            <Rectangle text={"Юридические консультации"} img={cercle4} />
            <Rectangle text={"Ликвидация организаций"} img={cercle5} />
            <Rectangle text={"Разработка договоров"} img={cercle6} />
          </div>
          <div className={styles.box}>
            <Rectangle text={"Регистрация бизнеса"} img={cercle7} />
            <Rectangle text={"Юридический аутсорсинг"} img={cercle8} />
            <Rectangle text={"Аттестация в строительстве"} img={cercle9} />
          </div>
        </div>
        <div className={styles.button}>
          <Button body={"Все услуги"} />
        </div>
        <div className={styles.textTwo}>
          <div className={styles.TextTitle}>
            <TitleText body={"Основные направления \nдеятельности"} />
          </div>
          <div>
            <Text body={textTwo} maxWidth={"700px"} fs={"28px"} />
          </div>
        </div>
        <Slider
          data={slides}
          classes={{ img: styles.imgSlider }}
          margin
          padding
          onlyImages
        />
      </div>
      <div className={styles.whiteBox}>
        <div className={styles.wrapperReviews}>
          <div className={styles.containerReviews}>
            <TitleText body={"Отзывы наших партнеров"} />
            <div className={styles.reviews}>
              <ReviewsBox
                img={titlePhoto1}
                name={"С.В.Косачев"}
                body={textThree}
              />
              <ReviewsBox
                img={titlePhoto2}
                name={"С.В.Косачев"}
                body={textThree}
              />
            </div>
            <div className={styles.panel}>
              <Button body={"Все отзывы"} />
              <div className={styles.cercles}>
                <div className={styles.cercle}></div>
                <div className={styles.cercle}></div>
                <div className={styles.cercle}> </div>
              </div>
              <div className={styles.arrows}>
                <img src={arrowLeft} alt="" />
                <img src={arrowRight} alt="" />
              </div>
            </div>
            <div className={styles.textThree}>
              <Text body={textFour} maxWidth={"670px"} />
              <div>Наши партнеры</div>
            </div>
            <div className={styles.companys}>
              <img src={company1} alt="" />
              <img src={company2} alt="" />
              <img src={company3} alt="" />
              <img src={company4} alt="" />
              <img src={company5} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapperContent}>
        <ThreeRectangle />
      </div>
      <img src={cartinka} alt="" />
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
