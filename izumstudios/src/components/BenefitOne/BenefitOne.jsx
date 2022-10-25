import React from 'react'
import styles from './BenefitOne.module.scss'
import one from '../../img/one.webp'

const BenefitOne = () => {
	return (
		<div className={styles.container} id='Apparat'>
			<div className={styles.titles}>
				<h4>
					<span>Мощный премиальный аппарат</span> — требуется меньше процедур в
					курсе
				</h4>
				<p>
					Один из самых мощных диодных лазеров в России - 1000 Ватт при мощности
					аппарата 4000 Ватт Это в 1,5 раза мощнее обычных
				</p>
			</div>
			<img src={one} alt='Первое преимущество' />
		</div>
	)
}

export default BenefitOne
