import React from 'react'
import styles from './BenefitTwo.module.scss'
import two from '../../img/two.webp'

const BenefitTwo = () => {
	return (
		<div className={styles.container} id='Apparat'>
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
	)
}

export default BenefitTwo
