import React from 'react'
import styles from './Contacts.module.scss'
import metro from '../../img/metro.webp'
import map from '../../img/map.webp'

export const Contacts = () => {
	return (
		<div className={styles.container} id='Contacts'>
			<h1>Контакты</h1>
			<div className={styles.information}>
				<div className={styles.leftInfo}>
					<div className={styles.infoTitle}>
						<a href='/'>Заказать обратный звонок</a>
						<a href='tel:+74951204581'>8(495)120-45-81</a>
						<a href='mailto:mail to:izumstudios@mail.ru'>izumstudios@mail.ru</a>
					</div>
					<div className={styles.adress}>
						<p>
							<img src={metro} alt='метро' /> <img src={metro} alt='метро' />{' '}
							<img src={metro} alt='метро' />{' '}
							<span>&nbsp;Новокузнецкая,&nbsp;</span> ул.Пятницкая, 20, стр.1
						</p>
						<p>
							<img src={metro} alt='метро' /> <img src={metro} alt='метро' />{' '}
							<img src={metro} alt='метро' />{' '}
							<span>&nbsp;Таганская,&nbsp;</span> ул.Николоямская, 40, стр.1
						</p>
						<p>
							<img src={metro} alt='метро' /> <img src={metro} alt='метро' />{' '}
							<span>&nbsp;Новослободская,&nbsp;</span>ул.Долгоруковская, 4А
						</p>
						<p>
							<img src={metro} alt='метро' /> <img src={metro} alt='метро' />{' '}
							<span>&nbsp;Парк культуры,&nbsp;</span> ул.Пречистенка, 40/2с1
						</p>
						<p>
							<img src={metro} alt='метро' /> <img src={metro} alt='метро' />{' '}
							<span>&nbsp;Павелецкая,&nbsp;</span> ул.Кожевническая, 7, стр.1
						</p>
						<p>
							<img src={metro} alt='метро' /> <img src={metro} alt='метро' />{' '}
							<span>&nbsp;Смоленская,&nbsp;</span> ул. Арбат, 54/2 стр. 1
						</p>
					</div>
					<button>Онлайн консультация</button>
				</div>
				<div className={styles.map}>
					<a
						href='https://yandex.ru/maps/213/moscow/?ll=37.602334%2C55.753190&mode=usermaps&source=constructorLink&um=constructor%3A1901685d6cf1f00db1775ac8ad35e5ca2ecf72c3a9bb231f50b04030c8740058&z=12'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={map} alt='карта' width={560} height={380} />
					</a>
				</div>
			</div>
		</div>
	)
}
