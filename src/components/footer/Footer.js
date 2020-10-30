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

const Footer = () => {
  return (
    <div className={styles.wrapperFooter}>
      <div className={styles.border}></div>
      <div className={styles.contentFooter}>
        <div className={styles.footerDes}>
          <TitleText
            width="230px"
            body="ООО “МК-ПРАВОВЫЕ ТЕХНОЛОГИИ”"
            m="0px 30px 70px 0px"
            fs="20px"
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
            <Text body="КАРТА САЙТА" />
            <img
              src={arrow}
              alt=""
              height="11px"
              width="60px"
              style={{ margin: "26px 0px 0px 20px" }}
            />
          </div>
          <div className={styles.arrow}>
            <Text width="100px" body="Политика конфиденциальности" />
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
            <Text body="НАШИ ОФИСЫ" />
          </div>
          <div className={styles.city}>
            <div className={styles.minsk}>
              <TitleText body="КОНТАКТЫ В МИСНКЕ" fs="14px" />
              <TextFooter
                body={
                  "+375 (44) 755-01-01 \n +375 (29) 550-01-01 \n+375 (17) 374-40-60"
                }
              />
              <TitleText body="Адрес" fs="14px" fw="600" />
              <TextFooter
                body={"г.Минск, ул. Широкая, д. 3,\n пом.146, оф. 4"}
                fs="14px"
              />
              <TitleText
                lh="20px"
                body={"Телефон для связи резидентов \n Российской Федерации "}
                fs="14px"
                m="20px 0px 0px 0px"
              />
              <TextFooter body={"whatsapp +7 (989) 166 24 00 \n"} />
              <TitleText
                lh="20px"
                body={"info@jurisprudent.by"}
                fs="14px"
                m="20px 0px 0px 0px"
              />
            </div>
            <div className={styles.mogilev}>
              <TitleText body="ОТДЕЛ В МОГИЛЕВЕ" fs="14px" />
              <TitleText body="Адрес" fs="14px" lh={"20px"} fw="600" />
              <TextFooter
                body={"г. Могилев, ул. Космонавтов,\nд. 19, оф. 507"}
              />
              <TitleText body="mogilev@jurisprudent.by" fs="14px" lh={"20px"} />

              <TitleText body="ОТДЕЛ В БРЕСТЕ" fs="14px" />
              <TitleText body="Адрес" fs="14px" lh={"20px"} fw="600" />
              <TextFooter body={"г. Брест, б-р Шевченко,\n д. 4, оф. 401 "} />
              <TitleText
                body="brest@jurisprudent.by"
                fs="14px"
                lh={"20px"}
                fw="600"
              />

              <TitleText body="ОТДЕЛ В ВИТЕБСКЕ" fs="14px" />
              <TitleText body="Адрес" fs="14px" lh={"20px"} fw="600" />
              <TextFooter body={"г. Витебск, ул.Гоголя,\n д. 14, оф. 614"} />
              <TitleText
                body="vitebsk@jurisprudent.by"
                fs="14px"
                lh={"20px"}
                fw="600"
              />
            </div>
            <div className={styles.grodno}>
              <TitleText body="ОТДЕЛ В ГРОДНО" fs="14px" />
              <TitleText body="Адрес" fs="14px" lh={"20px"} fw="600" />
              <TextFooter
                body={"г. Гродно, ул. Карла Маркса,\n д. 31-1, оф. 1010"}
              />
              <TitleText
                body="grodno@jurisprudent.by"
                fs="14px"
                lh={"20px"}
                fw="600"
              />
              <TitleText body="ОТДЕЛ В ГОМЕЛЕ" fs="14px" />
              <TitleText body="Адрес" fs="14px" lh={"20px"} fw="600" />
              <TextFooter body={"г. Гомель, пр. Ленина, д. 10,\n оф. 901"} />
              <TitleText
                body="gomel@jurisprudent.by"
                fs="14px"
                lh={"20px"}
                fw="600"
              />
            </div>
          </div>
        </div>
        <div className={styles.time}>
          <Text body="ВРЕМЯ РАБОТЫ" />
          <div className={styles.bd}></div>
          <TitleText
            body="Прием посетителей"
            fs="14px"
            lh={"20px"}
            fw="600"
            m="10px 0px 0px 0px "
          />
          <TextFooter
            body={
              "Ежедневно с 8.00 до 19.00\nВыходной: суббота - воскресенье.\n"
            }
          />
          <TitleText
            body="Прием звонков"
            fs="14px"
            lh={"20px"}
            fw="600"
            m="20px 0px 0px 0px "
          />
          <TextFooter body={"Ежедневно с 8.00 до 22.00\nБез выходных "} />
          <TitleText
            body="Онлайн консультант"
            fs="14px"
            lh={"20px"}
            fw="600"
            m="20px 0px 0px 0px "
          />
          <TextFooter body={"Круглосуточно 24/7\nБез выходных "} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
