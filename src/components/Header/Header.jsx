import React from 'react'
import styles from './Header.module.scss'
import youtube from '../../img/youtube.svg'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '80%',
	boxShadow: 20,
}

const Header = () => {
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	return (
		<div className={styles.bg} id='Top'>
			<div className={styles.container}>
				<h1>
					Избавьтесь от лишних волос пройдя курс{' '}
					<span> безопасной эпиляции на диодном аппарате </span>нового поколения
				</h1>
				<div className={styles.buttons}>
					<a
						href='https://n177562.yclients.com/group:147144/city:2#1'
						target='_blank'
						rel='noreferrer'
					>
						<button className={styles.primary}>записаться онлайн</button>
					</a>
					<button onClick={handleOpen} className={styles.secondary}>
						<img src={youtube} alt='Лого ютуба' width={70} height={70} />{' '}
						<p>
							Познакомиться с #IZUM <br />
							за 40 секунд
						</p>
					</button>
					<Modal
						aria-labelledby='transition-modal-title'
						aria-describedby='transition-modal-description'
						open={open}
						onClose={handleClose}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500,
						}}
					>
						<Fade in={open}>
							<Box sx={style}>
								<video width='100%' height='100%' controls>
									<source
										src='https://www.youtube.com/watch?v=IFsHjiOgPEM&feature=emb_logo'
										type='video/mp4'
									/>
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
