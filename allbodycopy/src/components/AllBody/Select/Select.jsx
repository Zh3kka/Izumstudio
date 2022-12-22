import React from 'react'
import Woman from './Woman/Woman'
import styles from './Select.module.scss'

const Select = () => {
	return (
		<div className={styles.container} id='Price'>
			<h1>
				{' '}
				<span> Ознакомьтесь </span>
				<br />с подарочными ценами
			</h1>
			<Woman />
		</div>
	)
}

export default Select
