import React from 'react'
import ReactPlayer from 'react-player'
import styles from './Reviews.module.scss'
import star from '../../img/star.svg'
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
					<Carousel
						className={styles.carusel}
						showArrows={true}
						showThumbs={false}
						infiniteLoop={true}
						showStatus={false}
					>
						<div className={styles.images}>
							<p>
								&quot;Впервые делала процедуру, все очень понравилось, мастеру
								отедльное спасибо, очень приятная девушка, подробно рассказала о
								всех тонкостях лазерной эпиляции, удобное расположение)&quot;
							</p>
							<div className={styles.star_date}>
								<div className={styles.stars}>
									<img src={star} alt='звезда' width={14} height={14} />
									<img src={star} alt='звезда' width={14} height={14} />
									<img src={star} alt='звезда' width={14} height={14} />
									<img src={star} alt='звезда' width={14} height={14} />
									<img src={star} alt='звезда' width={14} height={14} />
								</div>
								<span>21.10.2022</span>
							</div>
							<h2>Елена Т.</h2>
						</div>
						<div className={styles.images}>
							<p>
								&quot;Хожу в эту студию уже месяцев 6, была в разных районах,
								везде всё замечательно. Всегда вежливые и доброжелательные
								девушки, всё расскажут и объяснят. Чисто и гигиенично.&quot;
							</p>
							<div className={styles.star_date}>
								<div className={styles.stars}>
									<img src={star} alt='звезда' width={14} height={14} />
									<img src={star} alt='звезда' width={14} height={14} />
									<img src={star} alt='звезда' width={14} height={14} />
									<img src={star} alt='звезда' width={14} height={14} />
									<img src={star} alt='звезда' width={14} height={14} />
								</div>
								<span>29.09.2022</span>
							</div>
							<h2>Валенитна М.</h2>
						</div>
						<div className={styles.images}>
							<p>
								&quot;Хорошая студия, была уже 4 раза, результат замечательный)
								Мастера работают профессионально, вежливые и с индивидуальным
								подходом. Очень благодарнаЙ!&quot;
							</p>
							<div className={styles.star_date}>
								<div className={styles.stars}>
									<img src={star} alt='звезда' width={14} height={14} />
									<img src={star} alt='звезда' width={14} height={14} />
									<img src={star} alt='звезда' width={14} height={14} />
									<img src={star} alt='звезда' width={14} height={14} />
									<img src={star} alt='звезда' width={14} height={14} />
								</div>
								<span>18.10.2022</span>
							</div>
							<h2>Анастасия Д.</h2>
						</div>
						<div className={styles.images}>
							<p>
								&quot;Супер студия, очень приятная девушка мастер, все
								объяснила, рассказала, подарили подарок ещё и дали клубную карту
								Буду проходить весь курс в 10 процедур только тут!!!
								Советую&quot;
							</p>
							<div className={styles.star_date}>
								<div className={styles.stars}>
									<img src={star} alt='звезда' width={14} height={14} />
									<img src={star} alt='звезда' width={14} height={14} />
									<img src={star} alt='звезда' width={14} height={14} />
									<img src={star} alt='звезда' width={14} height={14} />
									<img src={star} alt='звезда' width={14} height={14} />
								</div>
								<span>28.08.2021</span>
							</div>
							<h2>Анастасия Т.</h2>
						</div>
					</Carousel>
					<a
						href='https://yandex.ru/search/?text=izumstudios&lr=213'
						target='_blank'
						rel='noopener noreferrer'
					>
						Ссылка на отзывы
					</a>
				</div>
			</div>
		</div>
	)
}

export default Reviews
