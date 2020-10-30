import React from "react";

import Text from "../Text";
import TitleText from "../Title";

import advan1 from "./img/advan1.png";
import advan2 from "./img/advan2.png";
import advan3 from "./img/advan3.png";
import advan4 from "./img/advan4.png";
import treangle from "./img/treangle.png";

import styles from "./BoxAdvantages.module.css";

const BoxAdvantages = () => {
  return (
    <div className={styles.wrapper}>
      <TitleText body="Наши преимущества" m="80px 0px 20px 10px" />
      <div className={styles.boxs}>
        <div className={styles.box}>
          <img src={advan1} alt="" height="130px" width="230px" />
          <Text
            maxWidth="230px"
            body="Лицензия на оказание юридических услуг"
          />
        </div>
        <div className={styles.box}>
          <img src={advan2} alt="" height="130px" width="230px" />
          <Text maxWidth="230px" body="Опытные сотрудники" />
        </div>
        <div className={styles.box}>
          <img src={advan3} alt="" height="130px" width="230px" />
          <Text
            maxWidth="230px"
            body="Коммуникативные навыки – без труда открываем любые двери и быстро решаем нужные вопросы"
          />
        </div>
        <div className={styles.box}>
          <img src={advan4} alt="" height="130px" width="230px" />
          <Text
            maxWidth="230px"
            body="Скрупулезный поход к ведению документации"
          />
        </div>
      </div>
      <div className={styles.boxfooter}>
        <img src={treangle} alt="" />
        <Text
          maxWidth="730px"
          body="Юристы нашей компании готовы дать четкие, основанные на фактах, консультации, касающиеся и «типовой», и нестандартной ситуации, опираясь на сложившуюся служебную практику и многолетний опыт. Мы объективно оцениваем риски и тщательно анализируем каждый случай."
        />
      </div>
    </div>
  );
};

export default BoxAdvantages;
