import React from 'react'
import styles from './Reviews.module.scss'
import Button from '../UI/Button/Button'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const videoReview = [
	{
		id: 1,
		videoPath: require('../../img/video/2.mp4'),
	},
	{
		id: 2,
		videoPath: require('../../img/video/video2.mp4'),
	},
	{
		id: 3,
		videoPath: require('../../img/video/video1.mp4'),
	},
	{
		id: 4,
		videoPath: require('../../img/video/video4.mp4'),
	},
]

const Reviews = () => {
	return (
		<div className={styles.container} id='Reviews'>
			<div className={styles.reviews}>
				<div className={styles.videoReview}>
					<h1>
						<span>10 000</span>довольных клиентов выбрали <span>#IZUM</span>
					</h1>
					<Carousel
						className={styles.carusel}
						showArrows={true}
						showThumbs={false}
						infiniteLoop={true}
						showStatus={false}
						autoPlay={false}
						dynamicHeight={true}
					>
						{videoReview.map(item => {
							return (
								<div className={styles.images} key={item.id}>
									<video
										src={item.videoPath}
										controls
										width='100%'
										height='400'
										type='video/mp4'
									/>
								</div>
							)
						})}
					</Carousel>
				</div>

				<div className={styles.picReview}>
					<div className={styles.yandex__rev}>
						<iframe
							className={styles.iframe}
							src='https://yandex.ru/maps-reviews-widget/23773373471?comments'
							title='reviews'
						></iframe>
						<a
							className={styles.iframe__link}
							href='https://yandex.ru/maps/org/izum/23773373471/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Сеть лазерной эпиляции IZUM
						</a>
					</div>
				</div>
			</div>
			<Button
				title='Хочу так же'
				link='https://n177562.yclients.com/group:147144/city:2#1'
			/>
		</div>
	)
}

export default Reviews
