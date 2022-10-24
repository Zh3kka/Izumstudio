import styles from './scss/app.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
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
import Carusel from './components/Carusel/Carusel'
import Reviews from './components/Reviews/Reviews'
import Select from './components/Select/Select'
import Mission from './components/Mission/Mission'
import { Contacts } from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import Quiz from './components/Quiz/Quiz'

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
			<Carusel />
			<Reviews />
			<Select />
			<Quiz />
			<Mission />
			<Contacts />
			<Footer />
		</div>
	)
}

export default App
