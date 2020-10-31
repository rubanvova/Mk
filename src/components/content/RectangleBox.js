import React from "react";
import Text from "../Text";
import images from "../../images";

import styles from "./RectangleBox.module.css";

const data = [
  {
    img: images.icon1,
    str: "Надежная защита",
  },
  {
    img: images.icon2,
    str: "Безупречная репутация",
  },
  {
    img: images.icon3,
    str: "Ориентированность на \nрезультат",
  },
  {
    img: images.icon4,
    str: "Абсолютная \nконфиденциальность",
  },
];

const Box = ({ img, str }) => {
  return (
    <div className={styles.rec}>
      <img src={img} alt="" />
      <Text>{str}</Text>
    </div>
  );
};

const RectangleBox = () => {
  return (
    <div className={styles.rectangles}>
      {data.map((i, index) => (
        <Box key={index} img={i.img} str={i.str} />
      ))}
    </div>
  );
};

export default RectangleBox;
