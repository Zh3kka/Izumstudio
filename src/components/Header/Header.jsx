import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<div className={styles.bg} id='Top'>
			<div className={styles.container}>
				<h1>
					Избавьтесь от лишних волос пройдя курс{' '}
					<span> безопасной эпиляции на диодном аппарате </span>нового поколения
				</h1>
				<div className={styles.buttons}>
					<a
						href='https://n177562.yclients.com/group:147144/city:2#1'
						target='_blank'
						rel='noreferrer'
					>
						<button className={styles.primary}>записаться онлайн</button>
					</a>
					<a
						href='https://www.youtube.com/watch?v=IFsHjiOgPEM'
						target='_blank'
						rel='noreferrer'
					>
						<button className={styles.secondary}>
							Познакомиться с #Izum за 40 секунд
						</button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Header
