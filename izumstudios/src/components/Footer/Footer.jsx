import React from 'react'
import styles from './Footer.module.scss'
import { Link } from 'react-scroll'
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
						<a href='tel:+74952605751'>8 (495) 260-57-51</a>
						<a href='mailto: izumstudios@mail.ru'>izumstudios@mail.ru</a>
					</p>
				</div>
				<div className={styles.footer__nav}>
					<nav>
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
					<h5>
						Политика конфиденциальности
						<br />
						Все права защищены
					</h5>
				</div>
			</div>
		</footer>
	)
}

export default Footer
