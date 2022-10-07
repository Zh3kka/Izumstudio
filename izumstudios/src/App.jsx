import styles from './scss/app.scss'
import HeaderMenu from './components/HeaderMenu/HeaderMenu'
import MainMenu from './components/MainMenu/MainMenu'
import Header from './components/Header/Header'
import HeaderTitle from './components/HeaderTitle/HeaderTitle'
import BestStudio from './components/BestStudio/BestStudio'
import BenefitOne from './components/BenefitOne/BenefitOne'
import BenefitTwo from './components/BenefitTwo/BenefitTwo'
import BenefitThree from './components/BenefitThree/BenefitThree'
import BenefitFour from './components/BenefitFour/BenefitFour'
import BenefitFive from './components/BenefitFive/BenefitFive'
import Tasks from './components/Tasks/Tasks'
import Gallery from './components/Gallery/Gallery'

function App() {
	return (
		<div className={styles.body}>
			<HeaderMenu />
			<MainMenu />
			<Header />
			<HeaderTitle />
			<BestStudio />
			<BenefitOne />
			<BenefitTwo />
			<BenefitThree />
			<BenefitFour />
			<BenefitFive />
			<Tasks />
			<Gallery />
		</div>
	)
}

export default App
