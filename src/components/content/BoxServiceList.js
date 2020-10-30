import React from "react";

import TitleText from "../Title";
import Text from "../Text";
import { textFive } from "./bigTexts";
import Button from "../Button/Button";

import styles from "./BoxServiceList.module.css";

const Box = ({ text, color, width }) => {
  return (
    <div className={styles.box} style={{ width: width }}>
      <div className={styles.colorBox} style={{ backgroundColor: color }}></div>
      <div className={styles.text}>
        <TitleText fs="20px" body={text} lh="23px" />
        <Text
          width="100%"
          body="ПОДРОБНЕЕ"
          cursor="pointer"
          display="flex"
          js="flex-end"
        />
      </div>
    </div>
  );
};

const BoxServiceList = () => {
  return (
    <div className={styles.wrapper}>
      <TitleText body={"Перечень оказываемых услуг"} m="0px 20px" />
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
        <Button body="Все услуги" m="20px 0" />
      </div>
    </div>
  );
};

export default BoxServiceList;
