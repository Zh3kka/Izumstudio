import React from "react";
import styles from "./BenefitFour.module.scss";
import four from "../../img/four.webp";

const BenefitFour = () => {
  return (
    <div className={styles.container}>
      <img src={four} alt="Первое преимущество" />
      <div className={styles.titles}>
        <h4>
          <span>Безопасная</span> процедура курсе
        </h4>
        <p>
          Риск ожогов исключен благодаря автоматической настройке мощности для
          каждой зоны эпиляции. Можно эпилировать все тело: лицо, шея, подмышки,
          живот, грудь, спина, руки, ноги, пальцы
        </p>
      </div>
    </div>
  );
};

export default BenefitFour;
