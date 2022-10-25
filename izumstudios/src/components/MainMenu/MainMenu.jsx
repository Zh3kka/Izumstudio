import React from 'react'
import logo from '../../img/logo.webp'
import styles from './MainMenu.module.scss'
import { Link } from 'react-scroll'

const MainMenu = () => {
	return (
		<div className={styles.container}>
			<nav>
				<a href='/'>
					<img src={logo} alt='Логотип izumstudios' width={134} height={80} />
				</a>
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
						<Link to='About' spy={true} smooth={true} duration={300}>
							О сети #IZUM
						</Link>
					</li>
					<li>
						<Link to='Apparat' spy={true} smooth={true} duration={300}>
							Мощный аппарат
						</Link>
					</li>
					<li>
						<Link to='Masters' spy={true} smooth={true} duration={300}>
							Наши специалисты
						</Link>
					</li>
					<li>
						<Link to='Reviews' spy={true} smooth={true} duration={300}>
							Отзывы
						</Link>
					</li>
					<li>
						<Link to='Price' spy={true} smooth={true} duration={300}>
							Цены
						</Link>
					</li>
					<li>
						<Link to='Price' spy={true} smooth={true} duration={300}>
							Абонементы
						</Link>
					</li>
					<li>
						<Link to='Contacts' spy={true} smooth={true} duration={300}>
							Контакты
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default MainMenu
