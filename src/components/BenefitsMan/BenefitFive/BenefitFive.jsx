import React from 'react'
import styles from './BenefitFive.module.scss'
import five from '../../../img/benefitsMan/sec2.webp'
import ButtonForm from '../../UI/ButtonForm/ButtonForm'

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
			<ButtonForm
				title='Заказать обратный звонок'
				link='https://b177562.yclients.com/select-city/2/select-branch?previousStepUrl=%2Fcompany%2F659154%2Fselect-services%3Fo%3D&o='
			/>
		</div>
	)
}

export default BenefitFive
