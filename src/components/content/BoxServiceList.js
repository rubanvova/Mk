import React from "react";

import TitleText from "../Title";
import Text from "../Text";
import { textFive } from "./constants";
import Button from "../Button/Button";

import styles from "./BoxServiceList.module.css";

const Box = ({ text, color, width }) => {
  return (
    <div className={styles.box} style={{ width: width }}>
      <div className={styles.colorBox} style={{ backgroundColor: color }}></div>
      <div className={styles.text}>
        <TitleText className={styles.clFontsize} children={text} />
        <Text className={styles.clWidth100}>{"ПОДРОБНЕЕ"}</Text>
      </div>
    </div>
  );
};

const BoxServiceList = () => {
  return (
    <div className={styles.wrapper}>
      <TitleText className={styles.clMargin20}>
        {"Перечень оказываемых услуг"}
      </TitleText>
      <div className={styles.table}>
        <div className={styles.row}>
          <Box
            text="Регистрации ИП и юрлиц"
            color={"rgba(222, 195, 119, 0.4)"}
            width="470px"
          />
          <Box
            text="Ликвидация, реорганизация и продажа бизнеса"
            color={"rgba(222, 195, 119, 0.4)"}
            width="670px"
          />
        </div>
        <div className={styles.row}>
          <Box
            text="Взыскание дебиторской задолженности"
            color={"rgba(222, 195, 119, 0.75)"}
            width="570px"
          />
          <Box
            text="Взыскание дебиторской задолженности"
            color={"rgba(222, 195, 119, 0.75)"}
            width="570px"
          />
        </div>
        <div className={styles.row}>
          <Box
            text="Разработка уставных документов и внесение изменений в них"
            color={"#DEC377"}
            width="670px"
          />
          <Box text="Ведение переговоров" color={"#DEC377"} width="470px" />
        </div>
        <div className={styles.row}>
          <Box
            text="Комплексное сопровождение бизнеса"
            color={"rgba(222, 195, 119, 0.75)"}
            width="570px"
          />
          <Box
            text="Сопровождение деловых сделок"
            color={"rgba(222, 195, 119, 0.75)"}
            width="570px"
          />
        </div>
        <div className={styles.row}>
          <Box
            text="Лицензирование бизнеса"
            color={"rgba(222, 195, 119, 0.4)"}
            width="470px"
          />
          <Box
            text="Решение правовых споров"
            color={"rgba(222, 195, 119, 0.4)"}
            width="670px"
          />
        </div>
      </div>
      <div className={styles.footerText}>
        <Text body={textFive} maxWidth="770px" />
        <Button className={styles.buttonMargin}> {"Все услуги"}</Button>
      </div>
    </div>
  );
};

export default BoxServiceList;
