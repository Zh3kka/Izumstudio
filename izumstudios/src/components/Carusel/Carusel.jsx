import React from 'react'
import styles from './Carusel.module.scss'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

import car1 from '../../img/car1.jpg'
import car2 from '../../img/car2.jpg'
import car3 from '../../img/car3.jpeg'
import car4 from '../../img/car4.jpg'
import car5 from '../../img/car5.jpg'

const Carusel = () => {
	return (
		<CardGroup className={styles.cardGroup}>
			<Card className={styles.card}>
				<Card.Img variant='top' src={car1} width={360} height={360} />
				<Card.Body>
					<Card.Title className={styles.cardTitle}>
						<strong>Соловьева Анастасия</strong>
					</Card.Title>
					<Card.Text>
						Работает в аппаратной косметологии более 7 лет. Опыт работа на таких
						лазерах, как Fotona, Mediostar Pro, Soprano, SB platinum, Kiers Kes,
						Candela, Anchorfree 808m, Imperium 2.0.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<small className='text-muted'>
						<b>м. Таганская</b>
					</small>
				</Card.Footer>
			</Card>
			<Card className={styles.card}>
				<Card.Img variant='top' src={car2} width={360} height={360} />
				<Card.Body>
					<Card.Title className={styles.cardTitle}>
						<strong>Супрунова Аксинья</strong>
					</Card.Title>
					<Card.Text>
						Работает в аппаратной косметологии более 7 лет. Опыт работа на таких
						лазерах, как Fotona, Mediostar Pro, Soprano, SB platinum, Kiers Kes,
						Candela, Anchorfree 808m, Imperium 2.0.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<small className='text-muted'>
						<b>м. Павелецкая</b>
					</small>
				</Card.Footer>
			</Card>
			<Card className={styles.card}>
				<Card.Img variant='top' src={car3} width={360} height={360} />
				<Card.Body>
					<Card.Title className={styles.cardTitle}>
						<strong>Антоненко Екатерина</strong>
					</Card.Title>
					<Card.Text>
						Работает в аппаратной косметологии более 7 лет. Опыт работа на таких
						лазерах, как Fotona, Mediostar Pro, Soprano, SB platinum, Kiers Kes,
						Candela, Anchorfree 808m, Imperium 2.0.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<small className='text-muted'>
						<b>м. Новослободская</b>
					</small>
				</Card.Footer>
			</Card>
			<Card className={styles.card}>
				<Card.Img variant='top' src={car4} width={360} height={360} />
				<Card.Body>
					<Card.Title className={styles.cardTitle}>
						<strong>Ярахмедова Мадина</strong>
					</Card.Title>
					<Card.Text>
						Имеется опыт работы на таких лазерах как: Capello, LightSheer
						Duet,Honor Ice, Soprano XL, Candela, Imperium 2.0. Работает с
						лазерными аппаратами уже 3 года.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<small className='text-muted'>
						<b>м. Павелецкая</b>
					</small>
				</Card.Footer>
			</Card>
			<Card className={styles.card}>
				<Card.Img variant='top' src={car5} width={360} height={360} />
				<Card.Body>
					<Card.Title className={styles.cardTitle}>
						<strong>Супрунова Аксинья</strong>
					</Card.Title>
					<Card.Text>
						Закончила МГМСУ имени А. И. Евдокимова, имеется опыт работы в
						медицине и косметологии более 3 лет. Готова развиваться в своей
						сфере вместе Вами! Жду Вас у себя на процедуре!
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<small className='text-muted'>
						<b>м. Павелецкая</b>
					</small>
				</Card.Footer>
			</Card>
		</CardGroup>
	)
}

export default Carusel
