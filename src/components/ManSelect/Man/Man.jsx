import React from 'react'
import ButtonFormSelect from '../../UI/ButtonFormSelect/ButtonFormSelect'
import styles from './Man.module.scss'

const womansComplex = [
	{
		id: 1,
		complex: `Комплекс 2 зоны`,
		imagePath: require('../../../img/man/man1.webp'),
		namingComplex: 'Подмышки\r\nПах полностью\r\n',
		present: '',
		price: 990,
		oldPrice: 4000,
		link: 'https://b832422.yclients.com/select-city/2/select-branch?referrer=https:%2F%2Fyclients.com%2F&previousStepUrl=%2Fcompany%2F659154%2Fselect-master%3Freferrer%3Dhttps:%252F%252Fyclients.com%252F%26o%3D&o=',
	},
	{
		id: 2,
		complex: `Комплекс 3 зоны`,
		imagePath: require('../../../img/man/man2.webp'),
		namingComplex: `Подмышки\r\nПах полностью\r\nШея сзади\r\n1 малая зона в подарок\r\n`,
		present: '(межбровье, линия живота, губа, ареолы, пальцы)',
		price: 1990,
		oldPrice: 5000,
		link: 'https://b832422.yclients.com/select-city/2/select-branch?referrer=https:%2F%2Fyclients.com%2F&previousStepUrl=%2Fcompany%2F659154%2Fselect-master%3Freferrer%3Dhttps:%252F%252Fyclients.com%252F%26o%3D&o=',
	},
	{
		id: 3,
		complex: `Комплекс 5 зоны`,
		imagePath: require('../../../img/man/man3.webp'),
		namingComplex: `Подмышки\r\nПах полностью\r\nОкантовка бороды и стрижки\r\nЛиния поясницы или\r\n2 малая зона в подарок\r\n`,
		present: '(межбровье, линия живота, губа, ареолы, пальцы)',
		price: 2990,
		oldPrice: 6000,
		link: 'https://b832422.yclients.com/select-city/2/select-branch?referrer=https:%2F%2Fyclients.com%2F&previousStepUrl=%2Fcompany%2F659154%2Fselect-master%3Freferrer%3Dhttps:%252F%252Fyclients.com%252F%26o%3D&o=',
	},
	{
		id: 4,
		complex: `Комплекс Все тело`,
		imagePath: require('../../../img/man/man4.webp'),
		namingComplex: `Подмышки\r\nПах полностью\r\nОкантовка бороды и стрижки\r\nСпина полностью\r\n3 малая зона в подарок\r\n`,
		present: '(межбровье, линия живота, губа, ареолы, пальцы)',
		price: 3990,
		oldPrice: 7000,
		link: 'https://b832422.yclients.com/select-city/2/select-branch?referrer=https:%2F%2Fyclients.com%2F&previousStepUrl=%2Fcompany%2F659154%2Fselect-master%3Freferrer%3Dhttps:%252F%252Fyclients.com%252F%26o%3D&o=',
	},
	{
		id: 5,
		complex: `Комплекс Абсолютно всё`,
		imagePath: require('../../../img/man/man5.webp'),
		namingComplex: `Абсолютно всё\r\n`,
		present: '',
		price: 4990,
		oldPrice: 8000,
		link: 'https://b832422.yclients.com/select-city/2/select-branch?referrer=https:%2F%2Fyclients.com%2F&previousStepUrl=%2Fcompany%2F659154%2Fselect-master%3Freferrer%3Dhttps:%252F%252Fyclients.com%252F%26o%3D&o=',
	},
]

const Man = () => {
	return (
		<div className={styles.container}>
			{womansComplex.map(woman => {
				return (
					<div className={styles.womans} key={woman.id}>
						<h2>{woman.complex}</h2>
						<div className={styles.complex}>
							<div className={styles.naming}>
								<img
									src={woman.imagePath}
									alt='комплекс 1'
									width={429}
									height={410}
								/>
								<div className={styles.info}>
									<h5>
										{woman.namingComplex} <span>{woman.present}</span>{' '}
									</h5>
									<h2>Разовый визит</h2>
									<p>{woman.price}&#8381;</p>
									<span>{woman.oldPrice}&#8381;</span>
									<ButtonFormSelect title='Записаться' />
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}
export default Man
