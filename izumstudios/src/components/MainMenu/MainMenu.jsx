import React from 'react'
import logo from '../../img/logo.webp'
import style from './MainMenu.module.scss'

const MainMenu = () => {
	return (
		<div className={style.container}>
			<nav>
				<a href='/'>
					<img src={logo} alt='Логотип izumstudios' width={134} height={80} />
				</a>
				<ul>
					<li>
						<a href='/'>На главную</a>
					</li>
					<li>
						<a href='/'>О сети #IZUM</a>
					</li>
					<li>
						<a href='/'>Мощный аппарат</a>
					</li>
					<li>
						<a href='/'>Наши специалисты</a>
					</li>
					<li>
						<a href='/'>Отзывы</a>
					</li>
					<li>
						<a href='/'>Цены</a>
					</li>
					<li>
						<a href='/'>Абонементы</a>
					</li>
					<li>
						<a href='/'>Контакты</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default MainMenu
