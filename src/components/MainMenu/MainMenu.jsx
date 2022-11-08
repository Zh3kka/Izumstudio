import React, { useState } from 'react'
import logo from '../../img/logo.webp'
import styles from './MainMenu.module.scss'
import { Link } from 'react-scroll'
import { HiMenu, HiOutlineX } from 'react-icons/hi'

const MainMenu = () => {
	const [nav, setNav] = useState(false)
	return (
		<div className={styles.container}>
			<nav>
				<Link
					to='Top'
					spy={true}
					smooth={true}
					duration={300}
					activeClass={styles.active}
					href='/'
				>
					<img src={logo} alt='Логотип izumstudios' width={135} height={83} />
				</Link>
				<div className={styles.mainMenu}>
					<ul>
						<li>
							<Link
								activeClass={styles.active}
								to='Top'
								spy={true}
								smooth={true}
								duration={300}
								href='/'
							>
								Главная
							</Link>
						</li>
						<li>
							<Link
								activeClass={styles.active}
								href='/'
								to='Apparat'
								spy={true}
								smooth={true}
								duration={300}
								offset={-50}
							>
								Мощный аппарат
							</Link>
						</li>
						<li>
							<Link
								activeClass={styles.active}
								href='/'
								to='Masters'
								spy={true}
								smooth={true}
								duration={300}
								offset={-60}
							>
								Наши специалисты
							</Link>
						</li>
						<li>
							<Link
								activeClass={styles.active}
								href='/'
								to='Reviews'
								spy={true}
								smooth={true}
								duration={300}
							>
								Отзывы
							</Link>
						</li>
						<li>
							<Link
								activeClass={styles.active}
								href='/'
								to='Price'
								spy={true}
								smooth={true}
								duration={300}
								offset={-50}
							>
								Цены
							</Link>
						</li>
						<li>
							<Link
								activeClass={styles.active}
								href='/'
								to='Price'
								spy={true}
								smooth={true}
								duration={300}
								offset={-50}
							>
								Абонементы
							</Link>
						</li>
						<li>
							<Link
								activeClass={styles.active}
								href='/'
								to='Contacts'
								spy={true}
								smooth={true}
								duration={300}
								offset={-50}
							>
								Контакты
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<div className={styles.icon} onClick={() => setNav(!nav)}>
				{nav ? <HiOutlineX size={30} /> : <HiMenu size={30} />}
			</div>
			<div className={nav ? styles.popup : styles.none}>
				<ul>
					<li>
						<Link
							activeClass={styles.active}
							to='Top'
							spy={true}
							smooth={true}
							duration={300}
						>
							Главная
						</Link>
					</li>
					<li>
						<Link
							to='About'
							spy={true}
							smooth={true}
							duration={300}
							activeClass={styles.active}
						>
							О сети #IZUM
						</Link>
					</li>
					<li>
						<Link
							to='Apparat'
							spy={true}
							smooth={true}
							duration={300}
							activeClass={styles.active}
						>
							Мощный аппарат
						</Link>
					</li>
					<li>
						<Link
							to='Masters'
							spy={true}
							smooth={true}
							duration={300}
							activeClass={styles.active}
						>
							Наши специалисты
						</Link>
					</li>
					<li>
						<Link
							to='Reviews'
							spy={true}
							smooth={true}
							duration={300}
							activeClass={styles.active}
						>
							Отзывы
						</Link>
					</li>
					<li>
						<Link
							to='Price'
							spy={true}
							smooth={true}
							duration={300}
							activeClass={styles.active}
						>
							Цены
						</Link>
					</li>
					<li>
						<Link
							to='Price'
							spy={true}
							smooth={true}
							duration={300}
							activeClass={styles.active}
						>
							Абонементы
						</Link>
					</li>
					<li>
						<Link
							to='Contacts'
							spy={true}
							smooth={true}
							duration={300}
							activeClass={styles.active}
						>
							Контакты
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default MainMenu
