import React from "react";

import Text from "../Text";
import TitleText from "../Title";
import images from "../../images";
import { textOne } from "./constants";

import styles from "./BoxlegalSupport.module.css";

const BoxlegalSupport = () => {
  return (
    <>
      <div className={styles.containerText}>
        <TitleText className={styles.clWidth520}>
          {"Юридическое сопровождение бизнеса \nот «МК-Правовые технологии»"}
        </TitleText>
        <Text className={styles.clWidth370}>{textOne}</Text>
      </div>
      <img src={images.marh} alt="" />
    </>
  );
};

export default BoxlegalSupport;
