import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Screens/Home'
import Offer1 from './components/Screens/Offer1'
import Offer2 from './components/Screens/Offer2'
import Offer3 from './components/Screens/Offer3'
import Offer4 from './components/Screens/Offer4'
import Offer5 from './components/Screens/Offer5'
import Offer6 from './components/Screens/Offer6'

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/1000' element={<Offer1 />} />
				<Route exact path='/2000' element={<Offer2 />} />
				<Route exact path='/3000' element={<Offer3 />} />
				<Route exact path='/4000' element={<Offer4 />} />
				<Route exact path='/5000' element={<Offer5 />} />
				<Route exact path='/6000' element={<Offer6 />} />
			</Routes>
		</Router>
	)
}

export default App
