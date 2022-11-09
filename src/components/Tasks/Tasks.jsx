import React from 'react'
import styles from './Tasks.module.scss'

const taskImages = [
	{
		id: 1,
		imageUrl: require('../../img/tasks/task1.jpg'),
		title: 'Стерильно и чисто',
	},
	{
		id: 2,
		imageUrl: require('../../img/tasks/task2.webp'),
		title: 'Не экономим на вспышках и материалах',
	},
	{
		id: 3,
		imageUrl: require('../../img/tasks/task3.webp'),
		title: 'Мастера эпиляции оказывают консультации',
	},
	{
		id: 4,
		imageUrl: require('../../img/tasks/task4.webp'),
		title: 'Имеются закрытые зоны для переодевания',
	},
	{
		id: 5,
		imageUrl: require('../../img/tasks/task5.webp'),
		title: 'Менеджер напомнит о визите',
	},
	{
		id: 6,
		imageUrl: require('../../img/tasks/task6.webp'),
		title: 'Мобильное приложение для онлайн записи',
	},
]

const Tasks = () => {
	return (
		<div className={styles.container}>
			<div className={styles.task__images}>
				{taskImages.map(task => {
					return (
						<h4 key={task.id}>
							{task.title}
							<img
								key={task.id}
								src={task.imageUrl}
								alt={task.title}
								loading='lazy'
							/>
						</h4>
					)
				})}
			</div>
		</div>
	)
}

export default Tasks
