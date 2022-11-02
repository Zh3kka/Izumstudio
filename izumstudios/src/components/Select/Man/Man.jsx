import React from 'react'
import man1 from '../../../img/man/man1.webp'
import man2 from '../../../img/man/man2.webp'
import man3 from '../../../img/man/man3.webp'
import man4 from '../../../img/man/man4.webp'
import man5 from '../../../img/man/man5.webp'

import styles from './Man.module.scss'
import Subcard from '../../../img/card.webp'

const Man = () => {
	return (
		<div className={styles.container}>
			<h2>Комплекс 2 зоны</h2>
			<div className={styles.complex}>
				<img src={man1} alt='комплекс 1' width={429} height={410} />
				<div className={styles.description}>
					<div className={styles.naming}>
						<p>
							Подмышки <br /> Пах полностью
						</p>
						<h2>Разовый визит</h2>
						<p>3000&#8381;</p>
						<span>4000&#8381;</span>
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
								<p>15 000 &#8381;</p>
								<span>20 000&#8381;</span>
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
								<p>30 000&#8381;</p>
								<span>40 000&#8381;</span>
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
				<img src={man2} alt='комплекс 3 зоны' width={429} height={410} />
				<div className={styles.description}>
					<div className={styles.naming}>
						<p>
							Подмышки <br /> Пах полностью <br /> Шея сзади <br /> 1 малая зона
							в подарок <br />{' '}
							<span>(межбровье, линия живота, губа, ареолы, пальцы)</span>
						</p>
						<h2>Разовый визит</h2>
						<p>3000&#8381;</p>
						<span>4000&#8381;</span>
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
								<p>15 000 &#8381;</p>
								<span>20 000&#8381;</span>
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
								<p>30 000&#8381;</p>
								<span>40 000&#8381;</span>
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
			<h2>Комплекс 5 зоны</h2>
			<div className={styles.complex}>
				<img src={man3} alt='комплекс 5 зон' width={429} height={410} />
				<div className={styles.description}>
					<div className={styles.naming}>
						<p>
							Подмышки <br /> Пах полностью <br /> Окантовка бороды и стрижки{' '}
							<br /> Линия поясницы или <br /> 2 малая зона в подарок <br />{' '}
							<span>(межбровье, линия живота, губа, ареолы, пальцы)</span>
						</p>
						<h2>Разовый визит</h2>
						<p>3000&#8381;</p>
						<span>4000&#8381;</span>
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
								<p>15 000 &#8381;</p>
								<span>20 000&#8381;</span>
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
								<p>30 000&#8381;</p>
								<span>40 000&#8381;</span>
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
				<img src={man4} alt='Комплекс Всё тело' width={429} height={410} />
				<div className={styles.description}>
					<div className={styles.naming}>
						<p>
							Подмышки <br /> Пах полностью <br /> Окантовка бороды и стрижки{' '}
							<br />
							Спина полностью <br /> 3 малая зона в подарок <br />{' '}
							<span>(межбровье, линия живота, губа, ареолы, пальцы)</span>
						</p>
						<h2>Разовый визит</h2>
						<p>3000&#8381;</p>
						<span>4000&#8381;</span>
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
								<p>15 000 &#8381;</p>
								<span>20 000&#8381;</span>
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
								<p>30 000&#8381;</p>
								<span>40 000&#8381;</span>
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
				<img src={man5} alt='комплекс абсолютно все' width={429} height={410} />
				<div className={styles.description}>
					<div className={styles.naming}>
						<p>Абсолютно всё</p>
						<h2>Разовый визит</h2>
						<p>3000&#8381;</p>
						<span>4000&#8381;</span>
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
								<p>15 000 &#8381;</p>
								<span>20 000&#8381;</span>
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
								<p>30 000&#8381;</p>
								<span>40 000&#8381;</span>
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
		</div>
	)
}
export default Man
