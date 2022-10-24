import React from 'react'
import styles from './Footer.module.scss'
import FooterLogo from '../../img/logo.webp'
import insta from '../../img/insta.svg'
import whatsapp from '../../img/whatsapp.svg'

const Footer = () => {
	return (
		<footer>
			<div className={styles.container}>
				<div className={styles.footer__info}>
					<img src={FooterLogo} width={120} height={75} alt='футер лого' />
					<div className={styles.social}>
						<img src={insta} width={25} height={25} alt='инстаграмм' />
						<img src={whatsapp} width={25} height={25} alt='инстаграмм' />
					</div>
					<p>
						8 (495) 149-70-36 <br />
						izumstudios@mail.ru
					</p>
				</div>
				<div className={styles.footer__nav}>
					<nav>
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
				<div className={styles.footer__title}>
					<h5>
						Вся представленная на сайте информация, касающаяся стоимости услуг,
						носит информационный характер и ни при каких условиях не является
						публичной офертой, определяемой положениями Статьи 437(2)
						Гражданского кодекса РФ.
					</h5>
				</div>
				<div className={styles.footer__politics}>
					<h3>
						Политика конфиденциальности
						<br />
						Все права защищены
					</h3>
				</div>
			</div>
		</footer>
	)
}

export default Footer
