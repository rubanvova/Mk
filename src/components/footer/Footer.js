import React from "react";
import TitleText from "../Title";
import Text from "../Text";
import TextFooter from "./TextFooter";

import facc from "./img/facc.png";
import iln from "./img/iln.png";
import inst from "./img/inst.png";
import ok from "./img/ok.png";
import tub from "./img/tub.png";
import vk from "./img/vk.png";
import arrow from "./img/bigarrow.png";

import styles from "./Footer.module.css";

const City = ({ city, adress, email }) => {
  return (
    <>
      <TitleText className={styles.clFontSize14} children={city} />
      <TitleText className={styles.cllineHeight} children="Адрес" />
      <TextFooter children={adress} />
      <TitleText className={styles.clEmail} children={email} />
    </>
  );
};

const Footer = () => {
  return (
    <div className={styles.wrapperFooter}>
      <div className={styles.border}></div>
      <div className={styles.contentFooter}>
        <div className={styles.footerDes}>
          <TitleText
            className={styles.clWidth230}
            children="ООО “МК-ПРАВОВЫЕ ТЕХНОЛОГИИ”"
          />
          <div className={styles.grey}>
            УНП <div>192710862</div>
          </div>
          <div className={styles.grey}>
            Наш рейтинг <div>5 из 5 (15 отзывов)</div>
          </div>
          <div className={styles.imgs}>
            <img src={facc} alt="" />
            <img src={iln} alt="" />
            <img src={inst} alt="" />
            <img src={ok} alt="" />
            <img src={tub} alt="" />
            <img src={vk} alt="" />
          </div>
          <div className={styles.arrow}>
            <Text> {"КАРТА САЙТА"} </Text>
            <img
              src={arrow}
              alt=""
              height="11px"
              width="60px"
              style={{ margin: "26px 0px 0px 20px" }}
            />
          </div>
          <div className={styles.arrow}>
            <Text className={styles.clWidth100}>
              {"Политика конфиденциальности"}
            </Text>
            <img
              src={arrow}
              alt=""
              height="11px"
              width="60px"
              style={{ margin: "40px 0px 0px 70px" }}
            />
          </div>
        </div>
        <div>
          <div className={styles.title}>
            <Text> {"НАШИ ОФИСЫ"}</Text>
          </div>
          <div className={styles.city}>
            <div className={styles.minsk}>
              <TitleText
                className={styles.clFontSize14}
                children="КОНТАКТЫ В МИСНКЕ"
              />
              <TextFooter
                children={
                  "+375 (44) 755-01-01 \n +375 (29) 550-01-01 \n+375 (17) 374-40-60"
                }
              />
              <TitleText children="Адрес" className={styles.cllineHeight} />
              <TextFooter
                children={"г.Минск, ул. Широкая, д. 3,\n пом.146, оф. 4"}
                className={styles.clFontSize14}
              />
              <TitleText
                className={styles.clMargin}
                children={
                  "Телефон для связи резидентов \n Российской Федерации "
                }
              />
              <TextFooter children={"whatsapp +7 (989) 166 24 00 \n"} />
              <TitleText
                className={styles.clMargin}
                children={"info@jurisprudent.by"}
              />
            </div>
            <div className={styles.mogilev}>
              <City
                city={"ОТДЕЛ В МОГИЛЕВЕ"}
                adress={"г. Могилев, ул. Космонавтов,\nд. 19, оф. 507"}
                email="mogilev@jurisprudent.by"
              />
              <City
                city={"ОТДЕЛ В БРЕСТЕ"}
                adress={"г. Брест, б-р Шевченко,\n д. 4, оф. 401"}
                email="brest@jurisprudent.by"
              />
              <City
                city={"ОТДЕЛ В ВИТЕБСКЕ"}
                adress={"г. Витебск, ул.Гоголя,\n д. 14, оф. 614"}
                email="vitebsk@jurisprudent.by"
              />
            </div>
            <div className={styles.grodno}>
              <City
                city={"ОТДЕЛ В ГРОДНО"}
                adress={"г. Гродно, ул. Карла Маркса,\n д. 31-1, оф. 1010"}
                email="grodno@jurisprudent.by"
              />
              <City
                city={"ОТДЕЛ В ГОМЕЛЕ"}
                adress={"г. Гомель, пр. Ленина, д. 10,\n оф. 901"}
                email="gomel@jurisprudent.by"
              />
            </div>
          </div>
        </div>
        <div className={styles.time}>
          <Text> {"ВРЕМЯ РАБОТЫ"}</Text>
          <div className={styles.bd}></div>
          <TitleText className={styles.clFont} children="Прием посетителей" />
          <TextFooter
            children={
              "Ежедневно с 8.00 до 19.00\nВыходной: суббота - воскресенье.\n"
            }
          />
          <TitleText className={styles.clFont} children="Прием звонков" />
          <TextFooter children={"Ежедневно с 8.00 до 22.00\nБез выходных "} />
          <TitleText className={styles.clFont} children="Онлайн консультант" />
          <TextFooter children={"Круглосуточно 24/7\nБез выходных "} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
