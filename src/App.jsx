// import styles from './scss/app.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import MainMenu from './components/MainMenu/MainMenu'
// import Header from './components/Header/Header'
// import BestStudio from './components/BestStudio/BestStudio'
// import BenefitOne from './components/BenefitOne/BenefitOne'
// import BenefitTwo from './components/BenefitTwo/BenefitTwo'
// import BenefitThree from './components/BenefitThree/BenefitThree'
// import BenefitFour from './components/BenefitFour/BenefitFour'
// import BenefitFive from './components/BenefitFive/BenefitFive'
// import Masters from './components/Masters/Masters'
// import Reviews from './components/Reviews/Reviews'
// import Select from './components/Select/Select'
// import Mission from './components/Mission/Mission'
// import Contacts from './components/Contacts/Contacts'
// import Footer from './components/Footer/Footer'
// import Quiz from './components/Quiz/Quiz'
import Home from './components/Screens/Home'
import Offer from './components/Screens/Offer'

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/offer' element={<Offer />} />
			</Routes>
		</Router>
		// <div className={styles.body}>
		// 	<MainMenu />
		// 	<Header />
		// 	<BestStudio />
		// 	<BenefitOne />
		// 	<BenefitTwo />
		// 	<BenefitThree />
		// 	<BenefitFour />
		// 	<BenefitFive />
		// 	<Select />
		// 	<Reviews />
		// 	<Masters />
		// 	<Mission />
		// 	<Quiz />
		// 	<Contacts />
		// 	<Footer />
		// </div>
	)
}

export default App
