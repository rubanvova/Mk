import React from "react";
import TitleText from "../Title";
import Text from "../Text";

import styles from "./BoxPrice.module.css";
import Button from "../Button/Button";

const BoxPrice = () => {
  return (
    <div className={styles.wrapper}>
      <TitleText
        body="Стоимость юридических услуг в Минске"
        m="100px 0px 0px 0px  "
      />
      <Text
        maxWidth="670px"
        body="Стоимость услуг формируется согласно тарифам, установленным в компании и в зависимости от времени, затраченного юристом на разрешение возникшей ситуации. Принцип прозрачности делает наши цены обоснованными и понятными для клиента."
      />
      <Button body="Тарифы" m="20px 0px 0px 0px" />
    </div>
  );
};

export default BoxPrice;
