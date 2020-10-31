import React from "react";
import Text from "../Text";
import TitleText from "../Title";
import images from "../../images";

import styles from "./ThreeRectangle.module.css";

const ThreeRectangle = () => {
  return (
    <div className={styles.wrapperRec}>
      <div className={styles.box}>
        <div className={styles.recOne}>
          <TitleText className={styles.clFontSize26}>
            {"Просто объясним сложные вещи"}
          </TitleText>
          <Text>
            {
              "В своей практике, мы дотошно соблюдаем законность, учитываем сложившуюся правовую практику и правила юридической этики. Мы считаем, что в поддержке бизнеса важно учитывать конкретные проблемы клиента и строить сотрудничество по принципу тщательного изучения всех нюансов возникшей ситуации. Всегда честны и объективны."
            }
          </Text>
        </div>
        <div className={styles.recTwo}>
          <TitleText className={styles.clFontSize26}>
            {"Надежно защитим права и интересы"}
          </TitleText>
          <Text>
            {
              "Заказав комплексные юридические услуги в ООО «МК-Правовые технологии», можно больше не платить зарплату штатному юристу, страховые отчисления и налоги с его доходов. Можно не оплачивать отпуск, больничные и не беспокоиться о нахождении работника на рабочем месте в нужный момент. "
            }
          </Text>
          <img src={images.treangle} alt="" />
        </div>
      </div>
      <div className={styles.recThree}>
        <TitleText className={styles.clFontSize26}>
          {"Вы платите только\nза результат!"}
        </TitleText>
        <Text className={styles.clmaxWidth800}>
          {
            "Заказав комплексные юридические услуги в ООО «МК-Правовые технологии», можно больше не платить зарплату штатному юристу, страховые отчисления и налоги с его доходов. Можно не оплачивать отпуск, больничные и не беспокоиться о нахождении работника на рабочем месте в нужный момент. "
          }
        </Text>
      </div>
    </div>
  );
};

export default ThreeRectangle;
