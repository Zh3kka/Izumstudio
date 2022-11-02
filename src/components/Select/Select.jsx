import React, { useEffect, useState } from 'react'
import Man from './Man/Man'
import Woman from './Woman/Woman'
import styles from './Select.module.scss'

const Select = () => {
	const [sex, setSex] = useState('woman')
	const [manContentVisible, setManContentVisible] = useState(false)
	const [womanContentVisible, setWomanContentVisible] = useState(false)

	useEffect(() => {
		sex === 'man' ? setManContentVisible(true) : setManContentVisible(false)
		sex === 'woman'
			? setWomanContentVisible(true)
			: setWomanContentVisible(false)
	}, [sex])
	return (
		<div className={styles.container} id='Price'>
			<h1>
				{' '}
				<span> Спецпредложения</span>
				<br />
				для новых клиентов
			</h1>
			<div className={styles.select}>
				<select
					className={styles.formSelect}
					value={sex}
					onChange={e => setSex(e.target.value)}
				>
					<option value='woman'>Женщинам</option>
					<option value='man'>Мужчинам</option>
				</select>
			</div>
			{manContentVisible && <Man />}
			{womanContentVisible && <Woman />}
		</div>
	)
}

export default Select