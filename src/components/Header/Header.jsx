import React, { useState } from 'react'
import styles from './Header.module.scss'
import bgVideo from '../../img/bgvideo.mp4'
import modalVideo from '../../img/modal.mp4'
import youtube from '../../img/youtube.svg'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import axios from 'axios'

const styleTwo = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '94%',
	height: 'auto',
	boxShadow: 20,
}

const Header = () => {
	const [number, setNumber] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		console.log(number)
		const data = {
			Phone: number,
		}
		axios
			.post(
				'https://sheet.best/api/sheets/423faee7-bafa-4331-bb68-fda45d105922',
				data
			)
			.then(response => {
				console.log(response)
				setNumber('')
			})
	}
	// first modal
	const [openOneModal, setOpenOneModal] = useState(false)
	const handleOneOpen = () => setOpenOneModal(true)
	const handleOneClose = () => setOpenOneModal(false)
	// first modal

	// second modal
	const [openTwoModal, setOpenTwoModal] = useState(false)
	const handleOpenTwoModal = () => setOpenTwoModal(true)
	const handleCloseTwoModal = () => setOpenTwoModal(false)
	// second modal

	// third modal
	const [openThirdModal, setOpenThirdModal] = useState(false)
	const handleOpenThirdModal = () => setOpenThirdModal(true)
	const handleCloseThirdModal = () => setOpenThirdModal(false)
	// third modal

	return (
		<div className={styles.bg} id='Top'>
			<video
				src={bgVideo}
				className={styles.videoBg}
				autoPlay
				muted
				loop
				type='video/mp4'
			/>
			<div className={styles.container}>
				<h1>
					Избавьтесь от лишних волос пройдя курс{' '}
					<span> безопасной эпиляции на диодном аппарате </span>нового поколения
				</h1>
				<div className={styles.buttons}>
					<button
						className={styles.primary}
						onClick={handleOneOpen}
						style={{ padding: '15px' }}
					>
						Записаться онлайн
					</button>
					<Modal
						aria-labelledby='transition-modal-title'
						aria-describedby='transition-modal-description'
						open={openOneModal}
						onClose={handleOneClose}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500,
						}}
					>
						<Fade in={openOneModal}>
							<Box className={styles.second__modal}>
								<Typography
									id='transition-modal-description'
									sx={{ mt: 2 }}
									variant='h4'
									color='#000000'
									component='h2'
								>
									<form
										autoComplete='off'
										onSubmit={handleSubmit}
										className={styles.form}
									>
										<label type='phone' className={styles.label}>
											Введите Ваш номер телефона
										</label>
										<div className={styles.form__action}>
											<input
												placeholder='Номер телефона'
												type='tel'
												id='phone'
												name='phone'
												value={number}
												onChange={e => setNumber(e.target.value)}
												required
											/>
											<button type='submit' onClick={handleOpenThirdModal}>
												Отправить
											</button>
										</div>
									</form>
									<Modal
										aria-labelledby='transition-modal-title'
										aria-describedby='transition-modal-description'
										open={openThirdModal}
										onClose={handleCloseThirdModal}
										closeAfterTransition
										BackdropComponent={Backdrop}
										BackdropProps={{
											timeout: 500,
										}}
									>
										<Fade in={openThirdModal}>
											<Box className={styles.third__modal}>
												<h2>Спасибо!</h2> <br />
												<h2>
													Запишитесь онлайн и получайте <br /> кэшбэк 10% с
													каждой процедуры
												</h2>
												<a
													href='https://b828575.yclients.com/select-city/2/select-branch?previousStepUrl=%2Fcompany%2F475792%2Fselect-master%3FpreviousStepUrl%3D%252Fcompany%252F601350%252Fselect-master%253FpreviousStepUrl%253D%25252Fcompany%25252F701744%25252Fselect-master%25253Fp&o='
													target='_blank'
													rel='noreferrer'
												>
													<button className={styles.third__modal__button}>
														Записаться
													</button>
												</a>
											</Box>
										</Fade>
									</Modal>
								</Typography>
							</Box>
						</Fade>
					</Modal>
					<button onClick={handleOpenTwoModal} className={styles.secondary}>
						<img src={youtube} alt='Лого ютуба' width={70} height={70} />{' '}
						<p>
							Познакомиться с #IZUM <br />
							за 40 секунд
						</p>
					</button>
					<Modal
						aria-labelledby='transition-modal-title'
						aria-describedby='transition-modal-description'
						open={openTwoModal}
						onClose={handleCloseTwoModal}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500,
						}}
					>
						<Fade in={openTwoModal}>
							<Box sx={styleTwo}>
								<video width='100%' height='100%' controls autoPlay muted>
									<source src={modalVideo} type='video/mp4' />
									Your browser does not support the video tag.
								</video>
							</Box>
						</Fade>
					</Modal>
				</div>
				{/* <img src={bgtest} className={styles.bgtest} alt='bgtest' /> */}
			</div>
		</div>
	)
}

export default Header
