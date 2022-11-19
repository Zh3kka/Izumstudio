import React, { useState } from 'react'
import styles from './ButtonForm.module.scss'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import axios from 'axios'

const ButtonForm = ({ title }) => {
	const [number, setNumber] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		const data = {
			Phone: number,
		}
		axios
			.post(
				'https://sheet.best/api/sheets/423faee7-bafa-4331-bb68-fda45d105922',
				data
			)
			.then(response => {
				setNumber('')
			})
	}
	// first modal
	const [openOneModal, setOpenOneModal] = useState(false)
	const handleOneOpen = () => setOpenOneModal(true)
	const handleOneClose = () => setOpenOneModal(false)
	// first modal

	// third modal
	const [openThirdModal, setOpenThirdModal] = useState(false)
	const handleOpenThirdModal = () => setOpenThirdModal(true)
	const handleCloseThirdModal = () => setOpenThirdModal(false)
	// third modal
	return (
		<button onClick={handleOneOpen} style={{ padding: '15px' }}>
			{title}
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
											Запишитесь онлайн и получайте <br /> кэшбэк 10% с каждой
											процедуры
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
		</button>
	)
}

export default ButtonForm
