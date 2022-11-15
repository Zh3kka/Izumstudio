import React from 'react'
import styles from './BenefitTwo.module.scss'
import two from '../../img/two.webp'
import Button from '../UI/Button/Button'

const BenefitTwo = () => {
	return (
		<div className={styles.container} id='Apparat'>
			<div className={styles.benefit__two}>
				<img src={two} alt='Первое преимущество' />
				<div className={styles.titles}>
					<h4>
						<span>Рекордная</span> скорость процедуры
					</h4>
					<p>
						1&nbsp;час &laquo;Всё тело&raquo; за&nbsp;счёт высокочастотного
						импульса 10гц
					</p>
				</div>
			</div>
			<Button
				title='Получить спецпредложение'
				link='https://n177562.yclients.com/group:147144/city:2#1'
			/>
		</div>
	)
}

export default BenefitTwo
