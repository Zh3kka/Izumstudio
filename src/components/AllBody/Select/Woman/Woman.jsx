import React from 'react'
import ButtonFormSelect from '../../../UI/ButtonFormSelect/ButtonFormSelect'
import styles from './Woman.module.scss'

const womansComplex = [
	{
		id: 1,
		complex: `Комплекс 2 зоны`,
		imagePath: require('../../../../img/woman/wom1.webp'),
		namingComplex: `Подмышки\r\nБикини тотальное`,
		present: '',
		price: 1990,
		oldPrice: 2990,
		link: 'https://b838978.yclients.com/company/659154/select-services?o=m1881891',
	},
	{
		id: 2,
		complex: `Комплекс 3 зоны`,
		imagePath: require('../../../../img/woman/wom2.webp'),
		namingComplex: `Подмышки\r\nБикини тотальное\r\nГолени\r\n1 малая зона в подарок\r\n`,
		present: '(линия живота, губа, ареолы, пальцы)',
		price: 2990,
		oldPrice: 4000,
		link: 'https://b838978.yclients.com/company/659154/select-services?o=m1881891',
	},
	{
		id: 3,
		complex: `Комплекс 5 зоны`,
		imagePath: require('../../../../img/woman/wom3.webp'),
		namingComplex: `Подмышки\r\nБикини тотальное\r\nНоги полностью\r\n2 малая зона в подарок\r\n`,
		present: '(линия живота, губа, ареолы, пальцы)',
		price: 3990,
		oldPrice: 5000,
		link: 'https://b838978.yclients.com/company/659154/select-services?o=m1881891',
	},
	{
		id: 4,
		complex: `Комплекс Все тело`,
		imagePath: require('../../../../img/woman/wom4.webp'),
		namingComplex: `Подмышки\r\nБикини\r\nтотальное\r\nНоги полностью\r\nРуки полностью\r\n3 малые зоны в подарок\r\n`,
		present: '(линия живота, губа, ареолы, пальцы)',
		price: 4990,
		oldPrice: 6000,
		link: 'https://b838978.yclients.com/company/659154/select-services?o=m1881891',
	},
	{
		id: 5,
		complex: `Комплекс Абсолютно всё`,
		imagePath: require('../../../../img/woman/wom5.webp'),
		namingComplex: `Абсолютно всё\r\n`,
		present: '',
		price: 5990,
		oldPrice: 7000,
		link: 'https://b838978.yclients.com/company/659154/select-services?o=m1881891',
	},
]

const Woman = () => {
	return (
		<div className={styles.container}>
			{womansComplex.map(woman => {
				return (
					<div className={styles.womans} key={woman.id}>
						<h2>{woman.complex}</h2>
						<div className={styles.complex}>
							<div className={styles.naming}>
								<img src={woman.imagePath} alt={woman.namingComplex} />
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

export default Woman
