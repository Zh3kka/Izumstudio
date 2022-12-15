import React from 'react'
import styles from '../../scss/app.scss'
import BenefitOne from '../BenefitsMan/BenefitOne/BenefitOne'
import BenefitTwo from '../BenefitsMan/BenefitTwo/BenefitTwo'
import BenefitThree from '../BenefitsMan/BenefitThree/BenefitThree'
import BenefitFour from '../BenefitsMan/BenefitFour/BenefitFour'
import BenefitFive from '../BenefitsMan/BenefitFive/BenefitFive'
import BestStudio from '../BestStudio/BestStudio'
import Contacts from '../Contacts/Contacts'
import Footer from '../Footer/Footer'
import HeaderMan from '../HeaderMan/Header/Header'
import MainMenu from '../MainMenu/MainMenu'
import Masters from '../Masters/Masters'
import Mission from '../Mission/Mission'
import Quiz from '../Quiz/Quiz'
import Reviews from '../Reviews/Reviews'
import ManSelect from '../ManSelect/Select'

const OfferMan = () => {
	return (
		<div className={styles.body}>
			<MainMenu />
			<HeaderMan />
			<ManSelect />
			<BestStudio />
			<BenefitOne />
			<BenefitTwo />
			<BenefitThree />
			<BenefitFour />
			<BenefitFive />
			<Reviews />
			<Masters />
			<Mission />
			<Quiz />
			<Contacts />
			<Footer />
		</div>
	)
}

export default OfferMan
