import React from "react";
import TitleText from "../Title";
import Text from "../Text";

import styles from "./BoxPrice.module.css";
import Button from "../Button/Button";

const BoxPrice = () => {
  return (
    <div className={styles.wrapper}>
      <TitleText className={styles.clMargin}>
        {"Стоимость юридических услуг в Минске"}
      </TitleText>
      <Text className={styles.clmaxWidth670}>
        {
          "Стоимость услуг формируется согласно тарифам, установленным в компании и в зависимости от времени, затраченного юристом на разрешение возникшей ситуации. Принцип прозрачности делает наши цены обоснованными и понятными для клиента."
        }
      </Text>
      <Button className={styles.buttonMargin}> {"Тарифы"} </Button>
    </div>
  );
};

export default BoxPrice;
