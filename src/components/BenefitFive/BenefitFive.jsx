import React from 'react'
import styles from './BenefitFive.module.scss'
import five from '../../img/five.webp'
import Button from '../UI/Button/Button'

const BenefitFive = () => {
	return (
		<div className={styles.container} id='Apparat'>
			<div className={styles.benefit__five}>
				<div className={styles.titles}>
					<h4>
						<span>Стойкий</span> результат уже а 8-10 процедур курсе
					</h4>
					<p>
						С&nbsp;каждой процедурой бриться нужно реже <br /> Кожа становится
						мягкой и гладкой. <br /> Выпавший волос больше не&nbsp;вырастет.{' '}
						<br /> Эффект на&nbsp;несколько лет.
					</p>
				</div>
				<img src={five} alt='Первое преимущество' />
			</div>
			<Button
				title='Заказать обратный звонок'
				link='https://n177562.yclients.com/group:147144/city:2#1'
			/>
		</div>
	)
}

export default BenefitFive
