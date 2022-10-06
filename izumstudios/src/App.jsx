import styles from './scss/app.scss'
import HeaderMenu from './components/HeaderMenu/HeaderMenu'
import MainMenu from './components/MainMenu/MainMenu'
import Header from './components/Header/Header'

function App() {
	return (
		<div className={styles.body}>
			<HeaderMenu />
			<MainMenu />
			<Header />
		</div>
	)
}

export default App
