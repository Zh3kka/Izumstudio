import React from 'react'
import styles from './BestStudio.module.scss'
import project from '../../img/bs.webp'
import ButtonForm from '../UI/ButtonForm/ButtonForm'

const BestStudio = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h5>
					Лучшая сеть студий лазерной эпиляции по версии премии AURORA AWARDS
					2019 "Beauty&Health"
				</h5>
				<div className={styles.images}>
					<img
						src={project}
						alt='Диплом премии AURORA AWARDS'
						width={550}
						height={450}
					/>
				</div>
			</div>
			<ButtonForm title='Записаться онлайн' />
		</div>
	)
}

export default BestStudio
