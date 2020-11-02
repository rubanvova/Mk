import React, { useState } from "react";

import logo from "./img/logo.svg";
import searh from "./img/searh.svg";
import burger from "./img/menu.png";
import close from "./img/close.png";

import styles from "./Header.module.css";

const Header = () => {
  const [showMenu, setShowmenu] = useState(false);

  const handlerMenu = () => {
    setShowmenu(!showMenu);
  };
  return (
    <div className={styles.wrapperHeader}>
      <div className={styles.boxOne}>
        <div className={styles.lenguage}>
          <div>Язык</div>
          <div>русский</div>
        </div>
        <div>
          <div className={styles.view}></div>
        </div>
        <div className={styles.phoneNumber}>
          <div>+375 (44) 755-01-01</div>
          <div>+375 (29) 550-01-01</div>
        </div>
      </div>
      <div className={styles.boxTwo}>
        <img src={logo} alt="" />
        <div className={styles.burger}>
          {showMenu ? (
            <img src={close} alt="" onClick={handlerMenu} />
          ) : (
            <img
              onClick={handlerMenu}
              src={burger}
              alt=""
              height="24px"
              width="24px"
            />
          )}
        </div>
        {showMenu ? (
          <div className={styles.menuBurger}>
            <div>Главная</div>
            <div>О нас</div>
            <div>Услуги</div>
            <div>Тарифы</div>
            <div>Инфоцентр</div>
            <div>Контакты</div>
            <img src={searh} alt="" />
          </div>
        ) : (
          ""
        )}
        <div className={styles.menu}>
          <div>Главная</div>
          <div>О нас</div>
          <div>Услуги</div>
          <div>Тарифы</div>
          <div>Инфоцентр</div>
          <div>Контакты</div>
          <img src={searh} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
