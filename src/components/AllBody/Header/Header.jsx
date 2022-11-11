import React, { useState } from 'react'
import styles from './Header.module.scss'
import modalVideo from '../../../img/modal.mp4'
import youtube from '../../../img/youtube.svg'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'

const styleTwo = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '80%',
	height: 'auto',
	boxShadow: 20,
}

const styleOne = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '80%',
	height: 'auto',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	TextAlign: 'left',
}

const Header = () => {
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

	return (
		<div className={styles.bg} id='Top'>
			<div className={styles.container}>
				<h1>
					ВАМ ПОДАРОК ЛАЗЕРНАЯ ЭПИЛЯЦИЯ
					<br />
					<span>ВСЕГО ТЕЛА ЗА 2990 ₽</span>
				</h1>
				<div className={styles.buttons}>
					<button onClick={handleOneOpen} className={styles.primary}>
						получить подарок
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
							<Box sx={styleOne}>
								<Typography
									id='transition-modal-title'
									variant='h3'
									color='#000000'
									component='h2'
								>
									Поздравляем! Ваш подарок активирован
								</Typography>
								<Typography
									id='transition-modal-description'
									sx={{ mt: 2 }}
									variant='h4'
									color='#000000'
									component='h2'
								>
									Запишитесь самостоятельно и получите кэшбек 10% на каждую
									процедуру <br />
									<button className={styles.first__modal__button}>
										<a
											href='https://b828575.yclients.com/select-city/2/select-branch?previousStepUrl=%2Fcompany%2F475792%2Fselect-master%3FpreviousStepUrl%3D%252Fcompany%252F601350%252Fselect-master%253FpreviousStepUrl%253D%25252Fcompany%25252F701744%25252Fselect-master%25253Fp&o='
											target='_blank'
											rel='noreferrer'
										>
											Записаться онлайн и получить подарок
										</a>
									</button>
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
			</div>
		</div>
	)
}

export default Header
