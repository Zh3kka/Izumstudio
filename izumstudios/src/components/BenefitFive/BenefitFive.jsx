import React from 'react'
import styles from './BenefitFive.module.scss'
import five from '../../img/five.webp'

const BenefitFive = () => {
	return (
		<div className={styles.container} id='Apparat'>
			<div className={styles.titles}>
				<h4>
					<span>Стойкий</span> результат за 8-10 процедур курсе
				</h4>
				<p>
					С каждым посещением бриться нужно реже. Кожа становится мягкой и
					гладкой. Выпавший волос больше не вырастет. Эффект на несколько лет.
				</p>
			</div>
			<img src={five} alt='Первое преимущество' />
		</div>
	)
}

export default BenefitFive
