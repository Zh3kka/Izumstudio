import React from 'react'
import styles from './Tasks.module.scss'
import suc from '../../img/suc.svg'

const Tasks = () => {
	return (
		<div className={styles.container}>
			<h2>Внимательное отношение и забота</h2>
			<ul>
				<li>
					<img src={suc} alt='галочка' /> Стерильно и чисто
				</li>
				<li>
					<img src={suc} alt='галочка' /> Не экономим на вспышках и материалах
				</li>
				<li>
					<img src={suc} alt='галочка' /> Мастера эпиляции оказывают
					консультации
				</li>
				<li>
					<img src={suc} alt='галочка' /> Имеются закрытые зоны для переодевания
				</li>
				<li>
					<img src={suc} alt='галочка' /> Менеджер напомнит о визите и правилах
					подготовки
				</li>
				<li>
					<img src={suc} alt='галочка' /> Мобильное приложение для онлайн записи
				</li>
			</ul>
		</div>
	)
}

export default Tasks
