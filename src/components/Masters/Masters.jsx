import React from 'react'
import styles from './Masters.module.scss'

const masters = [
	{
		id: 1,
		image: require('../../img/car1.jpg'),
		alt: 'master1',
		nameMaster: 'Суприканова Аксинья',
		location: 'м. павелецкая',
		description:
			'Закончила МГМСУ имени А. И. Евдокимова, имеется опыт работы в медицине и косметологии более 3 лет. Готова развиваться в своей сфере вместе Вами! Жду Вас у себя на процедуре!',
	},
	{
		id: 2,
		image: require('../../img/car2.jpg'),
		alt: 'master2',
		nameMaster: 'Суприканова Аксинья',
		location: 'м. павелецкая',
		description:
			'Закончила МГМСУ имени А. И. Евдокимова, имеется опыт работы в медицине и косметологии более 3 лет. Готова развиваться в своей сфере вместе Вами! Жду Вас у себя на процедуре!',
	},
	{
		id: 3,
		image: require('../../img/car3.jpeg'),
		alt: 'master3',
		nameMaster: 'Суприканова Аксинья',
		location: 'м. павелецкая',
		description:
			'Закончила МГМСУ имени А. И. Евдокимова, имеется опыт работы в медицине и косметологии более 3 лет. Готова развиваться в своей сфере вместе Вами! Жду Вас у себя на процедуре!',
	},
	{
		id: 4,
		image: require('../../img/car4.jpg'),
		alt: 'master4',
		nameMaster: 'Суприканова Аксинья',
		location: 'м. павелецкая',
		description:
			'Закончила МГМСУ имени А. И. Евдокимова, имеется опыт работы в медицине и косметологии более 3 лет. Готова развиваться в своей сфере вместе Вами! Жду Вас у себя на процедуре!',
	},
	{
		id: 5,
		image: require('../../img/car5.jpg'),
		alt: 'master5',
		nameMaster: 'Суприканова Аксинья',
		location: 'м. павелецкая',
		description:
			'Закончила МГМСУ имени А. И. Евдокимова, имеется опыт работы в медицине и косметологии более 3 лет. Готова развиваться в своей сфере вместе Вами! Жду Вас у себя на процедуре!',
	},
]

const Masters = () => {
	return (
		<div className={styles.cardGroup} id='Masters'>
			{masters.map(master => {
				return (
					<div className={styles.card} key={master.id}>
						<img src={master.image} alt={master.alt} width={360} height={360} />
						<h2 className={styles.cardTitle}>{master.nameMaster}</h2>
						<span>{master.location}</span>
						<p>{master.description}</p>
					</div>
				)
			})}
		</div>
	)
}

export default Masters
