import React from 'react'
import styles from './Woman.module.scss'
import Subcard from '../../../img/card.webp'

const womansComplex = [
	{
		id: 1,
		complex: `Комплекс 2 зоны`,
		imagePath: require('../../../img/woman/wom1.webp'),
		namingComplex: 'Подмышки\r\nБикини тотальное\r\n',
		present: '',
		price: 2000,
		oldPrice: 3000,
		link: 'https://n177562.yclients.com/company:659154/idx:0/service#1',
		onePrice: 2000,
		abonentPrice5Procedure: '10 000',
		oldAbonentPrice5Procedure: '15 000',
		buy5Procedure: 'https://o420.yclients.com/loyalty/subscription/406167',
		abonentPrice10Procedure: '20 000',
		oldAbonentPrice10Procedure: '30 000',
		buy10Procedure: 'https://o420.yclients.com/loyalty/subscription/406167',
	},
	{
		id: 2,
		complex: `Комплекс 3 зоны`,
		imagePath: require('../../../img/woman/wom2.webp'),
		namingComplex: `Подмышки\r\nБикини тотальное\r\nГолени\r\n1 малая зона в подарок\r\n`,
		present: '(линия живота, губа, ареолы, пальцы)',
		price: 3000,
		oldPrice: 4000,
		link: 'https://n177562.yclients.com/company:659154/idx:0/service#1',
		onePrice: 3000,
		abonentPrice5Procedure: '15 000',
		oldAbonentPrice5Procedure: '20 000',
		buy5Procedure: 'https://o420.yclients.com/loyalty/subscription/405179',
		abonentPrice10Procedure: '30 000',
		oldAbonentPrice10Procedure: '40 000',
		buy10Procedure: 'https://o420.yclients.com/loyalty/subscription/405181',
	},
	{
		id: 3,
		complex: `Комплекс 5 зоны`,
		imagePath: require('../../../img/woman/wom3.webp'),
		namingComplex: `Подмышки\r\nБикини тотальное\r\nНоги полностью\r\n2 малая зона в подарок\r\n`,
		present: '(линия живота, губа, ареолы, пальцы)',
		price: 4000,
		oldPrice: 5000,
		link: 'https://n177562.yclients.com/company:659154/idx:0/service#1',
		onePrice: 4000,
		abonentPrice5Procedure: '20 000',
		oldAbonentPrice5Procedure: '25 000',
		buy5Procedure: 'https://o420.yclients.com/loyalty/subscription/405136',
		abonentPrice10Procedure: '40 000',
		oldAbonentPrice10Procedure: '50 000',
		buy10Procedure: 'https://o420.yclients.com/loyalty/subscription/403458',
	},
	{
		id: 4,
		complex: `Комплекс Все тело`,
		imagePath: require('../../../img/woman/wom4.webp'),
		namingComplex: `Подмышки\r\nБикини\r\nтотальное\r\nНоги полностью\r\nРуки полностью\r\n3 малые зоны в подарок\r\n`,
		present: '(линия живота, губа, ареолы, пальцы)',
		price: 5000,
		oldPrice: 6000,
		link: 'https://n177562.yclients.com/company:659154/idx:0/service#1',
		onePrice: 5000,
		abonentPrice5Procedure: '25 000',
		oldAbonentPrice5Procedure: '30 000',
		buy5Procedure: 'https://o420.yclients.com/loyalty/subscription/405134',
		abonentPrice10Procedure: '50 000',
		oldAbonentPrice10Procedure: '60 000',
		buy10Procedure: 'https://o420.yclients.com/loyalty/subscription/403457',
	},
	{
		id: 5,
		complex: `Комплекс Абсолютно всё`,
		imagePath: require('../../../img/woman/wom5.webp'),
		namingComplex: `Абсолютно всё\r\n`,
		present: '',
		price: 6000,
		oldPrice: 7000,
		link: 'https://n177562.yclients.com/company:659154/idx:0/service#1',
		onePrice: 6000,
		abonentPrice5Procedure: '30 000',
		oldAbonentPrice5Procedure: '40 000',
		buy5Procedure: 'https://o420.yclients.com/loyalty/subscription/405148',
		abonentPrice10Procedure: '60 000',
		oldAbonentPrice10Procedure: '70 000',
		buy10Procedure: 'https://o420.yclients.com/loyalty/subscription/403463',
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
									<a
										href={woman.link}
										target='_blank'
										rel='noopener noreferrer'
									>
										<button className={styles.primary}>записаться</button>
									</a>
								</div>
							</div>
							<div className={styles.description}>
								<div className={styles.subscription}>
									<h2>Рекомендуем абонементы</h2>
									<p>
										Цена 1 процедуры {woman.onePrice}&#8381; <br />
										Сохранится весь курс
									</p>
									<div className={styles.subImage}>
										<img
											src={Subcard}
											alt='Карта абонемента'
											width={240}
											height={121}
											className={styles.image}
										/>
										<h2>
											Абонемент
											<br />5 процедур
										</h2>
										<div className={styles.subNaming}>
											<p>{woman.abonentPrice5Procedure} &#8381;</p>
											<span>{woman.oldAbonentPrice5Procedure}&#8381;</span>
											<a
												href={woman.buy5Procedure}
												target='_blank'
												rel='noopener noreferrer'
											>
												купить
											</a>
										</div>
									</div>
									<div className={styles.subImage}>
										<img
											src={Subcard}
											alt='Карта абонемента'
											width={240}
											height={121}
											className={styles.image}
										/>
										<h2>
											Абонемент
											<br />
											10 процедур
										</h2>
										<div className={styles.subNaming}>
											<p>{woman.abonentPrice10Procedure}&#8381;</p>
											<span>{woman.oldAbonentPrice10Procedure}&#8381;</span>
											<a
												href={woman.buy10Procedure}
												target='_blank'
												rel='noopener noreferrer'
											>
												купить
											</a>
										</div>
									</div>
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
