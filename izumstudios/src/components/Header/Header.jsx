import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<div className={styles.fon}>
			<div className={styles.container}>
				<h1>
					Избавьтесь от лишних волос пройдя курс{' '}
					<span> безопасной эпиляции на диодном аппарате </span>нового поколения
				</h1>
				<div className={styles.buttons}>
					<button className={styles.primary}>записаться онлайн</button>
					<button className={styles.secondary}>
						Познакомиться с #Izum за 40 секунд
					</button>
				</div>
			</div>
		</div>
	)
}

export default Header
