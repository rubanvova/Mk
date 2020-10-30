import React from "react";
import Text from "../Text";

import icon1 from "./img/icon1.png";
import icon2 from "./img/icon2.png";
import icon3 from "./img/icon3.png";
import icon4 from "./img/icon4.png";

import styles from "./RectangleBox.module.css";

const RectangleBox = () => {
  return (
    <div className={styles.rectangles}>
      <div className={styles.rec}>
        <img src={icon1} alt="" />
        <Text body={"Надежная защита"} />
      </div>
      <div className={styles.rec}>
        <img src={icon2} alt="" />
        <Text body={"Безупречная репутация"} />
      </div>
      <div className={styles.rec}>
        <img src={icon3} alt="" style={{ paddingTop: "14px" }} />
        <Text body={"Ориентированность на \nрезультат"} />
      </div>
      <div className={styles.rec}>
        <img src={icon4} alt="" style={{ paddingTop: "14px" }} />
        <Text body={"Абсолютная \nконфиденциальность"} />
      </div>
    </div>
  );
};

export default RectangleBox;
