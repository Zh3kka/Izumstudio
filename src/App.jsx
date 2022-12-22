import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Screens/Home'
import NotFound from './components/Screens/NotFound'
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
				<Route id='home' exact path='/' element={<Home />} />
				<Route id='1' path='/1000' element={<Offer1 />} />
				<Route id='2' path='/2000' element={<Offer2 />} />
				<Route id='3' path='/3000' element={<Offer3 />} />
				<Route id='4' path='/4000' element={<Offer4 />} />
				<Route id='5' path='/5000' element={<Offer5 />} />
				<Route id='6' path='/6000' element={<Offer6 />} />
				<Route path='*' component={<NotFound />} />
			</Routes>
		</Router>
	)
}

export default App
