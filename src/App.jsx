import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Screens/Home'
import OfferWoman from './components/Screens/OfferWoman'
import OfferMan from './components/Screens/OfferMan'

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/all-woman' element={<OfferWoman />} />
				<Route exact path='/all-man' element={<OfferMan />} />
			</Routes>
		</Router>
	)
}

export default App
