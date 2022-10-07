import React from "react";
import styles from './HeaderTitle.module.scss'

const HeaderTitle = () => {
  return (
    <div className={styles.heading}>
      <h3>
        <strong>Диодный лазер нового поколения</strong>. Рекордная скорость процедуры - 1 час всё
        тело. Абсолютно безопасно.<br/>Новые ощущения благодаря системе охлаждения.
      </h3>
    </div>
  );
};

export default HeaderTitle;
