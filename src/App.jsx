import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllBody from './pages/AllBody'
import Home from './pages/Home'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/all-body' element={<AllBody />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
