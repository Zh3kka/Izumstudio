import React from 'react'
import styles from './Reviews.module.scss'
import pic1 from '../../img/car1.jpg'
import Carousel from 'react-bootstrap/Carousel'

const Reviews = () => {
	return (
		<div className={styles.container} id='Reviews'>
			<h1>
				<span>10 000</span>довольных клиентов выбрали #IZUM
			</h1>
			<div className={styles.reviews}>
				<div className={styles.videoReview}>
					<Carousel>
						<Carousel.Item>
							<img src={pic1} alt='First slide' width={500} height={300} />
						</Carousel.Item>
						<Carousel.Item>
							<img src={pic1} alt='second slide' width={500} height={300} />
						</Carousel.Item>
						<Carousel.Item>
							<img src={pic1} alt='threed slide' width={500} height={300} />
						</Carousel.Item>
					</Carousel>
				</div>
				<div className={styles.picReview}>
					<Carousel>
						<Carousel.Item>
							<img src={pic1} alt='First slide' width={500} height={300} />
						</Carousel.Item>
						<Carousel.Item>
							<img src={pic1} alt='second slide' width={500} height={300} />
						</Carousel.Item>
						<Carousel.Item>
							<img src={pic1} alt='threed slide' width={500} height={300} />
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
			<button>записаться онлайн</button>
		</div>
	)
}

export default Reviews
