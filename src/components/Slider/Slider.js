import React, { useState } from "react";
import classnames from "classnames";

import TitleText from "../Title";
import Text from "../Text";
import styles from "./SliderShow.module.css";
import arrowLeft from "../../images/arrowLeft.png";
import arrowRight from "../../images/arrowRight.png";

import Button from "../Button/Button";

const Slider = ({
  data,
  onlyImages,
  classes = {},
  height,
  margin,
  padding,
}) => {
  const [index, setIndex] = useState(0);
  const increment = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    }
    if (index + 1 === data.length) {
      setIndex(0);
    }
  };
  const decrement = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
    if (index - 1 < 0) {
      setIndex(data.length - 1);
    }
  };

  return (
    <div className={styles.container}>
      {onlyImages ? (
        <div className={classnames(styles.arrows)}>
          <img
            src={arrowLeft}
            className={classnames(styles.left, styles.arrow)}
            onClick={decrement}
            alt=""
          />
          <img
            src={arrowRight}
            className={classnames(styles.right, styles.arrow)}
            onClick={increment}
            alt=""
          />
        </div>
      ) : null}
      {data.map((e, i) => (
        <Item
          padding={padding}
          margin={margin}
          height={height}
          classes={classes}
          onlyImages={onlyImages}
          key={i}
          active={index === i}
          dec={decrement}
          inc={increment}
          data={e}
        />
      ))}
    </div>
  );
};

const Item = ({
  data,
  active,
  onlyImages,
  classes,
  height,
  margin,
  padding,
  dec,
  inc,
}) => {
  const { img, title, text } = data;
  const yesOrno = height ? "100%" : "";
  const marginwidth = margin ? "0px 20px" : "";
  const top = padding ? "30px" : "";
  return (
    <div
      style={{ margin: marginwidth, paddingTop: top }}
      className={classnames(styles.item, {
        [styles.active]: active,
      })}
    >
      <div className={classnames(styles.img, classes.img)}>
        <img
          style={{ height: yesOrno }}
          className={styles.images}
          src={img}
          alt=""
        />
      </div>

      {onlyImages ? null : (
        <div className={styles.box}>
          <div className={styles.text}>
            <TitleText> {title}</TitleText>
            <Text>{text}</Text>
            <div className={styles.button}>
              <Button children="Подробнее" />
            </div>
          </div>
          <div className={styles.arrowShows}>
            <img src={arrowLeft} onClick={inc} alt="" />
            <img src={arrowRight} onClick={dec} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
