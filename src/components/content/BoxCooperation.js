import React from "react";
import InputMask from "react-input-mask";
import TitleText from "../Title";
import Text from "../Text";

import circl1 from "./img/circleNumber1.png";
import circl2 from "./img/circleNumber2.png";

import styles from "./BoxCooperation.module.css";
import Button from "../Button/Button";

const BoxCooperation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.boxs}>
        <div className={styles.boxOne}>
          <TitleText body="Организация сотрудничества" fs="40px" />
          <div className={styles.circleOne}>
            <img src={circl1} alt="" width="70px" height="70px" />
            <Text
              fw="600"
              fs="15px"
              maxWidth="400px"
              body="Установив контакт с нашим сотрудником, Вы оговорите нюансы предмета обсуждения и согласуете личную встречу."
            />
          </div>
          <div className={styles.circleTwo}>
            <img src={circl2} alt="" width="70px" height="70px" />
            <Text
              fw="600"
              fs="15px"
              maxWidth="400px"
              body="Юрист изучит документы, необходимые для разработки стратегии решения возникшей ситуации. И заключит договор."
            />
          </div>
          <Text
            maxWidth="500px"
            body="Также в нашей компании возможна удаленная форма обслуживания с оказанием полного комплекса юридических услуг в РБ через современные средства связи и мессенджеры."
          />
        </div>
        <div className={styles.boxTwo}>
          <div className={styles.wrap}>
            <div className={styles.inputs}>
              <Text body="Ваше имя" />
              <input className={styles.input} type="text" />
              <Text body="Телефон для связи" />
              <InputMask
                className={styles.input}
                placeholder="+375 (XX)XXX-XX-XX"
                mask="+375 (99)999-99-99"
                maskChar="_"
              />
            </div>
            <Text body="Нажимая на кнопку «Получить консультацию», вы соглашаетесь с условиями Политики конфиденциальности" />
            <Button
              m="20px 0px 0px 0px "
              body="Получить консультацию"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxCooperation;
