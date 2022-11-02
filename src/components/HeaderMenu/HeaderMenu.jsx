import React from 'react'
import phone from '../../img/phone.svg'
import styles from './HeaderMenu.module.scss'

const HeaderMenu = () => {
	return (
		<div className={styles.container}>
			<div className={styles.menu}>
				<ul>
					<li>6 студий в Москве</li>
					<li>Ежедневно с 10 до 22</li>
					<li>
						<a href='tel:+74952605751'>
							{' '}
							<img src={phone} width={14} height={14} alt='Телефон' /> 8 (495)
							260-57-51
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default HeaderMenu
