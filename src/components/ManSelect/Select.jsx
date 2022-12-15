import React from 'react'
import Man from './Man/Man'
import styles from './Select.module.scss'

const Select = () => {
	return (
		<div className={styles.container} id='Price'>
			<h1>
				{' '}
				<span> Ознакомьтесь </span>
				<br />с подарочными ценами
			</h1>
			<Man />
		</div>
	)
}

export default Select
