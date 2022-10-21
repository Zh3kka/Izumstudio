import React from 'react'
import styles from './HeaderTitle.module.scss'

const HeaderTitle = () => {
	return (
		<div className={styles.heading}>
			<h3>
				Диодный лазер нового поколения. Рекордная скорость процедуры - 1 час всё
				тело. <span>Абсолютно безопасно</span>.<br />
				Новые ощущения благодаря системе охлаждения.
			</h3>
		</div>
	)
}

export default HeaderTitle
