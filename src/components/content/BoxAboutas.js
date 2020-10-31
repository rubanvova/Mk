import React from "react";
import TitleText from "../Title";
import Text from "../Text";

import circle from "../../images/cyrcle.png";

import styles from "./BoxWhite.module.css";

const BoxAboutas = () => {
  return (
    <div className={styles.wrraper}>
      <div className={styles.rowOne}>
        <div className={styles.text}>
          <TitleText className={styles.clMaxWodth500}>
            {"Почему нам доверяют"}
          </TitleText>
          <Text className={styles.clmaxWidth470px}>
            {
              "Прозрачность и открытость для клиентов – наш принцип, который с самого начала исключает любые недопонимания. Мы тщательно продумали работу каждого юриста внутри коллектива, что обеспечивает высокое качество юридических услуг компании."
            }
          </Text>
        </div>
        <div className={styles.circles}>
          <div className={styles.circle}>
            <img src={circle} alt="" width="40px" height="40px" />
            <TitleText className={styles.clfontSize17}>
              {"безупречная репутация"}
            </TitleText>
          </div>
          <div className={styles.circle}>
            <img src={circle} alt="" width="40px" height="40px" />
            <TitleText className={styles.clfontSize17}>
              {"абсолютная конфиденциальность"}
            </TitleText>
          </div>
          <div className={styles.circle}>
            <img src={circle} alt="" width="40px" height="40px" />
            <TitleText className={styles.clfontSize17}>
              {"внимание к каждому клиенту"}
            </TitleText>
          </div>
          <div className={styles.circle}>
            <img src={circle} alt="" width="40px" height="40px" />
            <TitleText className={styles.clfontSize17Width}>
              {"успешный опыт решения нестандартных вопросов"}
            </TitleText>
          </div>
        </div>
      </div>
      <div className={styles.border}></div>
      <div className={styles.rowtwo}>
        <div className={styles.text}>
          <TitleText children="Что получает клиент" />
          <Text className={styles.clmaxWidth470px}>
            {
              "Юристы нашей компании готовы дать четкие, основанные на фактах, консультации, касающиеся и «типовой», и нестандартной ситуации, опираясь на сложившуюся служебную практику и многолетний опыт. Мы объективно оцениваем риски и тщательно анализируем каждый случай."
            }
          </Text>
        </div>
        <div className={styles.circles}>
          <div className={styles.circle}>
            <img src={circle} alt="" width="40px" height="40px" />
            <TitleText className={styles.clfontSize17}>
              {"надежная защита бизнеса"}
            </TitleText>
          </div>
          <div className={styles.circle}>
            <img src={circle} alt="" width="40px" height="40px" />
            <TitleText className={styles.clfontSize17}>
              {"актуальная правовая помощь"}
            </TitleText>
          </div>
          <div className={styles.circle}>
            <img src={circle} alt="" width="40px" height="40px" />
            <TitleText className={styles.clfontSize17}>
              {"своевременная оценка рисков"}
            </TitleText>
          </div>
          <div className={styles.circle}>
            <img src={circle} alt="" width="40px" height="40px" />
            <TitleText className={styles.clWidth370px}>
              {"компетентное решение правовых вопросов"}
            </TitleText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxAboutas;
