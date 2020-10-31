import React from "react";
import Rectangle from "./Rectangle";
import images from "../../images";
import styles from "./BoxActivity.module.css";

const data = [
  {
    img: images.cerlce1,
    str: "Взыскание долгов",
  },
  {
    img: images.cerlce2,
    str: "Реорганизация бизнеса",
  },
  {
    img: images.cerlce3,
    str: "Продажа бизнеса",
  },
  {
    img: images.cerlce4,
    str: "Юридические консультации",
  },
  {
    img: images.cerlce5,
    str: "Ликвидация организаций",
  },
  {
    img: images.cerlce6,
    str: "Разработка договоров",
  },
  {
    img: images.cerlce7,
    str: "Регистрация бизнеса",
  },
  {
    img: images.cerlce8,
    str: "Юридический аутсорсинг",
  },
  {
    img: images.cerlce9,
    str: "Аттестация в строительстве",
  },
];

const Box = ({ str, img }) => {
  return (
    <div className={styles.box}>
      <Rectangle text={str} img={img} />
    </div>
  );
};

const BoxActivity = () => {
  return (
    <>
      {data.map((i, index) => (
        <Box key={index} str={i.str} img={i.img} />
      ))}
    </>
  );
};

export default BoxActivity;
