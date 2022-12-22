import React from 'react'
import styles from '../../scss/app.scss'
import BenefitFive from '../BenefitFive/BenefitFive'
import BenefitFour from '../BenefitFour/BenefitFour'
import BenefitThree from '../BenefitThree/BenefitThree'
import BenefitTwo from '../BenefitTwo/BenefitTwo'
import Masters from '../Masters/Masters'
import Mission from '../Mission/Mission'
import Reviews from '../Reviews/Reviews'

const OfferWoman = () => {
	return (
		<div className={styles.body}>
			<BenefitTwo />
			<BenefitThree />
			<BenefitFour />
			<BenefitFive />
			<Reviews />
			<Masters />
			<Mission />
		</div>
	)
}

export default OfferWoman
