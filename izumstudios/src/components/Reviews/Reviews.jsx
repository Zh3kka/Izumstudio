import React from 'react'
import ReactPlayer from 'react-player'
import styles from './Reviews.module.scss'
import rev1 from '../../img/rev1.jpg'
import rev2 from '../../img/rev2.jpg'
import rev3 from '../../img/rev3.jpg'
import rev4 from '../../img/rev4.jpg'
import rev5 from '../../img/rev5.jpg'
import vid1 from '../../img/video/video1.MOV'
import vid2 from '../../img/video/video22.MOV'
import vid3 from '../../img/video/video3.MOV'
import vid4 from '../../img/video/video4.MOV'
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
						width='100%'
					>
						<div className={styles.images}>
							<ReactPlayer url={vid1} controls loop={true} playing={true} />
						</div>
						<div className={styles.images}>
							<ReactPlayer url={vid2} controls />
						</div>
						<div className={styles.images}>
							<ReactPlayer url={vid3} controls />
						</div>
						<div className={styles.images}>
							<ReactPlayer url={vid4} controls />
						</div>
					</Carousel>
				</div>

				<div className={styles.picReview}>
					<Carousel
						className={styles.carusel}
						showArrows={true}
						showThumbs={false}
						infiniteLoop={true}
						showStatus={false}
						width='100%'
					>
						<div className={styles.images}>
							<img src={rev1} alt='review' width={300} height={300} />
						</div>
						<div className={styles.images}>
							<img src={rev2} alt='review' width={300} height={300} />
						</div>
						<div className={styles.images}>
							<img src={rev3} alt='review' width={300} height={300} />
						</div>
						<div className={styles.images}>
							<img src={rev4} alt='review' width={300} height={300} />
						</div>
						<div className={styles.images}>
							<img src={rev5} alt='review' width={300} height={300} />
						</div>
					</Carousel>
				</div>
			</div>
		</div>
	)
}

export default Reviews
