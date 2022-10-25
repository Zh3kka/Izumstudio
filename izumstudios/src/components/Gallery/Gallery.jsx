import React from 'react'
import styles from './Gallery.module.scss'
import first from '../../img/1.webp'
import second from '../../img/2.webp'
import three from '../../img/3.webp'
import four from '../../img/4.webp'
import five from '../../img/5.webp'
import six from '../../img/6.webp'

const Gallery = () => {
	return (
		<div className={styles.container}>
			<div className={styles.images}>
				<img src={first} alt='первая картинка галерии' />
				<img src={second} alt='вторая картинка галерии' />
				<img src={three} alt='третья картинка галерии' />
				<img src={four} alt='четвертая картинка галерии' />
				<img src={five} alt='пятая картинка галерии' />
				<img src={six} alt='шестая картинка галерии' />
			</div>
			<button className={styles.primary}>записаться онлайн</button>
		</div>
	)
}

export default Gallery
