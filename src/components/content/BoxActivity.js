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
    img: images.cercle2,
    str: "Реорганизация бизнеса",
  },
  {
    img: images.cercle3,
    str: "Продажа бизнеса",
  },
  {
    img: images.cercle4,
    str: "Юридические консультации",
  },
  {
    img: images.cercle5,
    str: "Ликвидация организаций",
  },
  {
    img: images.cercle6,
    str: "Разработка договоров",
  },
  {
    img: images.cercle7,
    str: "Регистрация бизнеса",
  },
  {
    img: images.cercle8,
    str: "Юридический аутсорсинг",
  },
  {
    img: images.cercle9,
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
