import React from 'react'
import styles from './Masters.module.scss'

import car1 from '../../img/car1.jpg'
import car2 from '../../img/car2.jpg'
import car3 from '../../img/car3.jpeg'
import car4 from '../../img/car4.jpg'
import car5 from '../../img/car5.jpg'

const Masters = () => {
	// const masters = [
	// 	{
	// 		imageSrc: { car1 },
	// 		alt: 'master1',
	// 		nameMaster: 'Суприканова Аксинья',
	// 		location: 'м. павелецкая',
	// 		description:
	// 			'Закончила МГМСУ имени А. И. Евдокимова, имеется опыт работы в медицине и косметологии более 3 лет. Готова развиваться в своей сфере вместе Вами! Жду Вас у себя на процедуре!',
	// 	},
	// 	{
	// 		imageSrc: { car2 },
	// 		alt: 'master2',
	// 		nameMaster: 'Суприканова Аксинья',
	// 		location: 'м. павелецкая',
	// 		description:
	// 			'Закончила МГМСУ имени А. И. Евдокимова, имеется опыт работы в медицине и косметологии более 3 лет. Готова развиваться в своей сфере вместе Вами! Жду Вас у себя на процедуре!',
	// 	},
	// 	{
	// 		imageSrc: { car3 },
	// 		alt: 'master3',
	// 		nameMaster: 'Суприканова Аксинья',
	// 		location: 'м. павелецкая',
	// 		description:
	// 			'Закончила МГМСУ имени А. И. Евдокимова, имеется опыт работы в медицине и косметологии более 3 лет. Готова развиваться в своей сфере вместе Вами! Жду Вас у себя на процедуре!',
	// 	},
	// 	{
	// 		imageSrc: { car4 },
	// 		alt: 'master4',
	// 		nameMaster: 'Суприканова Аксинья',
	// 		location: 'м. павелецкая',
	// 		description:
	// 			'Закончила МГМСУ имени А. И. Евдокимова, имеется опыт работы в медицине и косметологии более 3 лет. Готова развиваться в своей сфере вместе Вами! Жду Вас у себя на процедуре!',
	// 	},
	// 	{
	// 		imageSrc: { car5 },
	// 		alt: 'master5',
	// 		nameMaster: 'Суприканова Аксинья',
	// 		location: 'м. павелецкая',
	// 		description:
	// 			'Закончила МГМСУ имени А. И. Евдокимова, имеется опыт работы в медицине и косметологии более 3 лет. Готова развиваться в своей сфере вместе Вами! Жду Вас у себя на процедуре!',
	// 	},
	// ]
	return (
		<div className={styles.cardGroup} id='Masters'>
			{/* {this.masters.map((id, master) => (
				<>
					<div className={styles.card}>
						<img
							src={master.imageSrc}
							alt={master.alt}
							width={360}
							height={360}
						/>
						<h2 className={styles.cardTitle}>{master.nameMaster}</h2>
						<span>{master.location}</span>
						<p>{master.description}</p>
					</div>
				</>
			))} */}

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

export default Masters
