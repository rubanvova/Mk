import React from "react";
import TitleText from "../Title";
import Text from "../Text";

import circle from "./img/cyrcle.png";

import styles from "./BoxWhite.module.css";

const BoxWhite = () => {
  return (
    <div className={styles.wrraper}>
      <div className={styles.rowOne}>
        <div className={styles.text}>
          <TitleText body="Почему нам доверяют" maxWidth="500px" />
          <Text
            maxWidth="470px"
            body="Прозрачность и открытость для клиентов – наш принцип, который с самого начала исключает любые недопонимания. Мы тщательно продумали работу каждого юриста внутри коллектива, что обеспечивает высокое качество юридических услуг компании."
          />
        </div>
        <div className={styles.circles}>
          <div className={styles.circle}>
            <img src={circle} alt="" width="40px" height="40px" />
            <TitleText body="безупречная репутация" fs="17px" />
          </div>
          <div className={styles.circle}>
            <img src={circle} alt="" width="40px" height="40px" />
            <TitleText body="абсолютная конфиденциальность" fs="17px" />
          </div>
          <div className={styles.circle}>
            <img src={circle} alt="" width="40px" height="40px" />
            <TitleText body="внимание к каждому клиенту" fs="17px" />
          </div>
          <div className={styles.circle}>
            <img src={circle} alt="" width="40px" height="40px" />
            <TitleText
              body="успешный опыт решения нестандартных вопросов"
              fs="17px"
              width="370px"
              lh="25px"
            />
          </div>
        </div>
      </div>
      <div className={styles.border}></div>
      <div className={styles.rowtwo}>
        <div className={styles.text}>
          <TitleText body="Что получает клиент" />
          <Text
            width="470px"
            body="Юристы нашей компании готовы дать четкие, основанные на фактах, консультации, касающиеся и «типовой», и нестандартной ситуации, опираясь на сложившуюся служебную практику и многолетний опыт. Мы объективно оцениваем риски и тщательно анализируем каждый случай."
          />
        </div>
        <div className={styles.circles}>
          <div className={styles.circle}>
            <img src={circle} alt="" width="40px" height="40px" />
            <TitleText body="надежная защита бизнеса" fs="17px" />
          </div>
          <div className={styles.circle}>
            <img src={circle} alt="" width="40px" height="40px" />
            <TitleText body="актуальная правовая помощь" fs="17px" />
          </div>
          <div className={styles.circle}>
            <img src={circle} alt="" width="40px" height="40px" />
            <TitleText body="своевременная оценка рисков" fs="17px" />
          </div>
          <div className={styles.circle}>
            <img src={circle} alt="" width="40px" height="40px" />
            <TitleText
              body="компетентное решение правовых вопросов"
              fs="17px"
              width="370px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxWhite;
