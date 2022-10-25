import React from 'react'
import styles from './Carusel.module.scss'

import car1 from '../../img/car1.jpg'
import car2 from '../../img/car2.jpg'
import car3 from '../../img/car3.jpeg'
import car4 from '../../img/car4.jpg'
import car5 from '../../img/car5.jpg'

const Carusel = () => {
	return (
		<div className={styles.cardGroup} id='Masters'>
			<div className={styles.card}>
				<img src={car1} alt='master1' width={360} height={360} />
				<h2 className={styles.cardTitle}>Супрунова Аксинья</h2>
				<span>м. Павелецкая</span>
				<p>
					Закончила МГМСУ имени А. И. Евдокимова, имеется опыт работы в медицине
					и косметологии более 3 лет. Готова развиваться в своей сфере вместе
					Вами! Жду Вас у себя на процедуре!
				</p>
			</div>
			<div className={styles.card}>
				<img src={car2} alt='master1' width={360} height={360} />
				<h2 className={styles.cardTitle}>Супрунова Аксинья</h2>
				<span>м. Павелецкая</span>
				<p>
					Закончила МГМСУ имени А. И. Евдокимова, имеется опыт работы в медицине
					и косметологии более 3 лет. Готова развиваться в своей сфере вместе
					Вами! Жду Вас у себя на процедуре!
				</p>
			</div>
			<div className={styles.card}>
				<img src={car3} alt='master1' width={360} height={360} />
				<h2 className={styles.cardTitle}>Супрунова Аксинья</h2>
				<span>м. Павелецкая</span>
				<p>
					Закончила МГМСУ имени А. И. Евдокимова, имеется опыт работы в медицине
					и косметологии более 3 лет. Готова развиваться в своей сфере вместе
					Вами! Жду Вас у себя на процедуре!
				</p>
			</div>
			<div className={styles.card}>
				<img src={car4} alt='master1' width={360} height={360} />
				<h2 className={styles.cardTitle}>Супрунова Аксинья</h2>
				<span>м. Павелецкая</span>
				<p>
					Закончила МГМСУ имени А. И. Евдокимова, имеется опыт работы в медицине
					и косметологии более 3 лет. Готова развиваться в своей сфере вместе
					Вами! Жду Вас у себя на процедуре!
				</p>
			</div>
			<div className={styles.card}>
				<img src={car5} alt='master1' width={360} height={360} />
				<h2 className={styles.cardTitle}>Супрунова Аксинья</h2>
				<span>м. Павелецкая</span>
				<p>
					Закончила МГМСУ имени А. И. Евдокимова, имеется опыт работы в медицине
					и косметологии более 3 лет. Готова развиваться в своей сфере вместе
					Вами! Жду Вас у себя на процедуре!
				</p>
			</div>
		</div>
	)
}

export default Carusel
