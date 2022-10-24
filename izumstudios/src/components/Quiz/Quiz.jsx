import React, { useState } from 'react'
import styles from './Quiz.module.scss'

const questions = [
	{
		questionText: 'Какой вид удаления волос Вы сейчас используете?',
		answerOptions: [
			{ answerText: 'Лазерная эпиляция' },
			{ answerText: 'Воск/Шугаринг' },
			{ answerText: 'Бритва' },
			{ answerText: 'Эпилятор/Пинцет' },
			{ answerText: 'Другое' },
		],
	},
	{
		questionText: 'Выберите тип волос в зонах эпиляции',
		answerOptions: [
			{ answerText: 'Темные' },
			{ answerText: 'Белые/седые' },
			{ answerText: 'Русые; темно-русые' },
		],
	},
	{
		questionText: 'Выберите тип (цвет) кожи',
		answerOptions: [
			{ answerText: 'Светлый' },
			{ answerText: 'Смуглый' },
			{ answerText: 'Тёмный' },
		],
	},
]

const Quiz = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0)

	const handleAnswerOptionClick = () => {
		const nextQuestion = currentQuestion + 1

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion)
		}
	}
	return (
		<div className={styles.container}>
			<div className={styles.quiz}>
				<div className={styles.quiz__section}>
					<div className={styles.quiz__info}>
						<h5>
							Пройдите тест из 4 вопросов и мы{' '}
							<span> подберем для подходящий для Вас комплекс</span>
						</h5>
						<h1>
							{currentQuestion + 1}/{questions.length}
						</h1>
					</div>
					<div className={styles.question__text}>
						<h1>{questions[currentQuestion].questionText}</h1>
						<div className={styles.answer__question}>
							{questions[currentQuestion].answerOptions.map(item => (
								<button onClick={() => handleAnswerOptionClick()}>
									{item.answerText}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Quiz
