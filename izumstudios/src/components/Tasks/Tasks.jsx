import React from 'react'
import styles from './Tasks.module.scss'
import suc from '../../img/suc.svg'

const Tasks = () => {
	return (
		<div className={styles.container}>
			<h2>Внимательное отношение и забота</h2>
			<ul>
				<li>
					<img src={suc} alt='галочка' width={20} height={25} /> Все студии с
					новым интерьером
				</li>
				<li>
					<img src={suc} alt='галочка' width={20} height={25} /> Стерильно и
					чисто
				</li>
				<li>
					<img src={suc} alt='галочка' width={20} height={25} /> Имеются зоны
					для переодевания
				</li>
				<li>
					<img src={suc} alt='галочка' width={20} height={25} /> Не экономим на
					вспышках и материалах
				</li>
				<li>
					<img src={suc} alt='галочка' width={20} height={25} /> Косметологи
					оказывают консультации
				</li>
				<li>
					<img src={suc} alt='галочка' width={20} height={25} /> Менеджер
					напомнит о визите и правилах подготовки
				</li>
				<li>
					<img src={suc} alt='галочка' width={20} height={25} /> Служба заботы
					окажет поддержку
				</li>
			</ul>
		</div>
	)
}

export default Tasks
