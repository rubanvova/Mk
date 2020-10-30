import React from "react";

import logo from "./img/logo.svg";
import searh from "./img/searh.svg";

import styles from "./Header.module.css";

const Header = () => {
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
