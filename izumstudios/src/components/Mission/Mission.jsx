import React from 'react'
import styles from './Mission.module.scss'

const Mission = () => {
	return (
		<div className={styles.container}>
			<div className={styles.titles}>
				<h1>Миссия #IZUM</h1>
				<span>
					Избавить людей от проблем связанных с удалением нежелательных волос,
					повышая их чувство уверенности в себе.
				</span>
				<p>
					С 2018 года мы даем людям возможность делать свою кожу гладкой,
					ухоженной и красивой благодаря безопасной лазерной эпиляции. Мы не
					тратим средства клиентов на лишние пространства и атрибуты. Концепция
					сети #IZUM сделана в формате моноуслуги - мы делаем только лазерную
					эпиляцию. Мы собираем в наших студиях опытных мастеров и используем
					одни из самых мощных лазеров в России.
				</p>
				<span>Рады видеть Вас в сети студий #IZUM.❤️</span>
			</div>
		</div>
	)
}

export default Mission
