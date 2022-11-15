import React from 'react'
import styles from './Button.module.scss'

const Button = ({ title, link }) => {
	return (
		<a href={link} target='_blank' rel='noopener noreferrer'>
			<button className={styles.primary}>{title}</button>
		</a>
	)
}

export default Button
