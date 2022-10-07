import React from "react";
import styles from "./BenefitTwo.module.scss";
import two from "../../img/two.webp";

const BenefitTwo = () => {
  return (
    <div className={styles.container}>
      <img src={two} alt="Первое преимущество" />
      <div className={styles.titles}>
        <h4>
          <span>Рекордная</span> скорость процедуры
        </h4>
        <p>1 час "Всё тело" за счет частоты импульса 10ГЦ</p>
      </div>
    </div>
  );
};

export default BenefitTwo;
