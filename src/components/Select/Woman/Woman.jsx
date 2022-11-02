import React from 'react'
import woman1 from '../../../img/woman/wom1.webp'
import woman2 from '../../../img/woman/wom2.webp'
import woman3 from '../../../img/woman/wom3.webp'
import woman4 from '../../../img/woman/wom4.webp'
import woman5 from '../../../img/woman/wom5.webp'
import styles from './Woman.module.scss'
import Subcard from '../../../img/card.webp'

const Woman = () => {
	return (
		<div className={styles.container}>
			<h2>Комплекс 2 зоны</h2>
			<div className={styles.complex}>
				<img src={woman1} alt='комплекс 1' width={429} height={410} />
				<div className={styles.description}>
					<div className={styles.naming}>
						<p>
							Подмышки <br /> Бикини тотальное
						</p>
						<h2>Разовый визит</h2>
						<p>2000&#8381;</p>
						<span>3000&#8381;</span>
						<a
							href='https://n177562.yclients.com/group:147144/city:2#1'
							target='_blank'
							rel='noreferrer'
						>
							<button className={styles.primary}>записаться</button>
						</a>
					</div>
					<div className={styles.subscription}>
						<h2>Рекомендуемые абонементы</h2>
						<p>
							Цена 1 процедуры 2000&#8381; <br />
							Сохранится весь курс
						</p>
						<div className={styles.subImage}>
							<img
								src={Subcard}
								alt='Карта абонемента'
								width={240}
								height={121}
								className={styles.image}
								style={{ zIndex: -1 }}
							/>
							<h2>
								Абонемент
								<br />5 процедур
							</h2>
							<div className={styles.subNaming}>
								<p>10 000 &#8381;</p>
								<span>15 000&#8381;</span>
								<a
									href='https://o420.yclients.com/loyalty/subscription/406167'
									target='_blank'
									rel='noreferrer'
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
								<br />5 процедур
							</h2>
							<div className={styles.subNaming}>
								<p>20 000&#8381;</p>
								<span>30 000&#8381;</span>
								<a
									href='https://o420.yclients.com/loyalty/subscription/406167'
									target='_blank'
									rel='noreferrer'
								>
									купить
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h2>Комплекс 3 зоны</h2>
			<div className={styles.complex}>
				<img src={woman2} alt='комплекс 1' width={429} height={410} />
				<div className={styles.description}>
					<div className={styles.naming}>
						<p>
							Подмышки <br /> Бикини тотальное <br /> Голени <br /> 1 малая зона
							в подарок <br /> <span>(линия живота, губа, ареолы, пальцы)</span>
						</p>
						<h2>Разовый визит</h2>
						<p>2000&#8381;</p>
						<span>3000&#8381;</span>
						<a
							href='https://n177562.yclients.com/group:147144/city:2#1'
							target='_blank'
							rel='noreferrer'
						>
							<button className={styles.primary}>записаться</button>
						</a>
					</div>
					<div className={styles.subscription}>
						<h2>Рекомендуемые абонементы</h2>
						<p>
							Цена 1 процедуры 2000&#8381; <br />
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
								<p>10 000 &#8381;</p>
								<span>15 000&#8381;</span>
								<a
									href='https://o420.yclients.com/loyalty/subscription/406167'
									target='_blank'
									rel='noreferrer'
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
								<br />5 процедур
							</h2>
							<div className={styles.subNaming}>
								<p>20 000&#8381;</p>
								<span>30 000&#8381;</span>
								<a
									href='https://o420.yclients.com/loyalty/subscription/406167'
									target='_blank'
									rel='noreferrer'
								>
									купить
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h2>Комплекс 5 зон</h2>
			<div className={styles.complex}>
				<img src={woman3} alt='комплекс 1' width={429} height={410} />
				<div className={styles.description}>
					<div className={styles.naming}>
						<p>
							Подмышки <br /> Бикини тотальное <br /> Ноги полностью <br /> 2
							малая зона в подарок <br />{' '}
							<span>(линия живота, губа, ареолы, пальцы)</span>
						</p>
						<h2>Разовый визит</h2>
						<p>2000&#8381;</p>
						<span>3000&#8381;</span>
						<a
							href='https://n177562.yclients.com/group:147144/city:2#1'
							target='_blank'
							rel='noreferrer'
						>
							<button className={styles.primary}>записаться</button>
						</a>
					</div>
					<div className={styles.subscription}>
						<h2>Рекомендуемые абонементы</h2>
						<p>
							Цена 1 процедуры 2000&#8381; <br />
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
								<p>10 000 &#8381;</p>
								<span>15 000&#8381;</span>
								<a
									href='https://o420.yclients.com/loyalty/subscription/406167'
									target='_blank'
									rel='noreferrer'
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
								<br />5 процедур
							</h2>
							<div className={styles.subNaming}>
								<p>20 000&#8381;</p>
								<span>30 000&#8381;</span>
								<a
									href='https://o420.yclients.com/loyalty/subscription/406167'
									target='_blank'
									rel='noreferrer'
								>
									купить
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h2>Комплекс Всё тело</h2>
			<div className={styles.complex}>
				<img src={woman4} alt='комплекс 1' width={429} height={410} />
				<div className={styles.description}>
					<div className={styles.naming}>
						<p>
							Подмышки <br /> Бикини тотальное <br /> Ноги полностью <br /> Руки
							полностью <br /> 3 малая зона в подарок <br />{' '}
							<span>(линия живота, губа, ареолы, пальцы)</span>
						</p>
						<h2>Разовый визит</h2>
						<p>2000&#8381;</p>
						<span>3000&#8381;</span>
						<a
							href='https://n177562.yclients.com/group:147144/city:2#1'
							target='_blank'
							rel='noreferrer'
						>
							<button className={styles.primary}>записаться</button>
						</a>
					</div>
					<div className={styles.subscription}>
						<h2>Рекомендуемые абонементы</h2>
						<p>
							Цена 1 процедуры 2000&#8381; <br />
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
								<p>10 000 &#8381;</p>
								<span>15 000&#8381;</span>
								<a
									href='https://o420.yclients.com/loyalty/subscription/406167'
									target='_blank'
									rel='noreferrer'
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
								<br />5 процедур
							</h2>
							<div className={styles.subNaming}>
								<p>20 000&#8381;</p>
								<span>30 000&#8381;</span>
								<a
									href='https://o420.yclients.com/loyalty/subscription/406167'
									target='_blank'
									rel='noreferrer'
								>
									купить
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h2>Комплекс Абсолютно всё</h2>
			<div className={styles.complex}>
				<img src={woman5} alt='комплекс 1' />
				<div className={styles.description}>
					<div className={styles.naming}>
						<p>Абсолютно всё</p>
						<h2>Разовый визит</h2>
						<p>2000&#8381;</p>
						<span>3000&#8381;</span>
						<a
							href='https://n177562.yclients.com/group:147144/city:2#1'
							target='_blank'
							rel='noreferrer'
						>
							<button className={styles.primary}>записаться</button>
						</a>
					</div>
					<div className={styles.subscription}>
						<h2>Рекомендуемые абонементы</h2>
						<p>
							Цена 1 процедуры 2000&#8381; <br />
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
								<p>10 000 &#8381;</p>
								<span>15 000&#8381;</span>
								<a href='/'>Купить</a>
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
								<br />5 процедур
							</h2>
							<div className={styles.subNaming}>
								<p>20 000&#8381;</p>
								<span>30 000&#8381;</span>
								<a href='/'>Купить</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Woman
