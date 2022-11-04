import React from 'react'
import ReactPlayer from 'react-player'
import styles from './Reviews.module.scss'
import vid1 from '../../img/video/2.mp4'
import vid2 from '../../img/video/video2.mp4'
import vid3 from '../../img/video/video1.mp4'
import vid4 from '../../img/video/video4.mp4'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Reviews = () => {
	return (
		<div className={styles.container} id='Reviews'>
			<h1>
				<span>10 000</span>довольных клиентов выбрали #IZUM
			</h1>
			<div className={styles.reviews}>
				<div className={styles.videoReview}>
					<Carousel
						className={styles.carusel}
						showArrows={true}
						showThumbs={false}
						infiniteLoop={true}
						showStatus={false}
						autoPlay={false}
						dynamicHeight={true}
					>
						<div className={styles.images}>
							<ReactPlayer url={vid1} controls width='100%' />
						</div>
						<div className={styles.images}>
							<ReactPlayer url={vid2} controls width='100%' />
						</div>
						<div className={styles.images}>
							<ReactPlayer url={vid3} controls width='100%' />
						</div>
						<div className={styles.images}>
							<ReactPlayer url={vid4} controls width='100%' />
						</div>
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
		</div>
	)
}

export default Reviews
