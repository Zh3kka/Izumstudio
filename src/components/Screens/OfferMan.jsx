import React from 'react'
import styles from '../../scss/app.scss'
import BenefitFive from '../BenefitFive/BenefitFive'
import BenefitFour from '../BenefitFour/BenefitFour'
import BenefitOne from '../BenefitOne/BenefitOne'
import BenefitThree from '../BenefitThree/BenefitThree'
import BenefitTwo from '../BenefitTwo/BenefitTwo'
import BestStudio from '../BestStudio/BestStudio'

const OfferWoman = () => {
	return (
		<div className={styles.body}>
			<BestStudio />
			<BenefitOne />
			<BenefitTwo />
			<BenefitThree />
			<BenefitFour />
			<BenefitFive />
		</div>
	)
}

export default OfferWoman
