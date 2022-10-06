import React from 'react'
import logo from '../../img/logo.png'
import styles from './HeaderMenu.module.scss'

const HeaderMenu = () => {
	return (
		<div className={styles.container}>
			<div className={styles.some}>
				<img src={logo} width={150} height={null} alt='лого #izumstudios' />
				<div className={styles.menu}>
					<ul>
						<li>6 студий в Москве</li>
						<li>Ежедневно с 10 до 22</li>
						<li>
							<a href='tel:+74951596977'>8 (495) 159-69-77</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default HeaderMenu
