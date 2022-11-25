import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

const SERVICE_ID = 'service_gg2xwb6'
const TEMPLATE_ID = 'template_sloah69'
const USER_ID = '9xkeprUJ77y2G4xvX'

const FormMail = () => {
	const handleOnSubmit = e => {
		e.preventDefault()
		emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
			result => {
				console.log(result.text)
				Swal.fire({
					icon: 'success',
					title: 'Message Sent Successfully',
				})
			},
			error => {
				console.log(error.text)
				Swal.fire({
					icon: 'error',
					title: 'Ooops, something went wrong',
					text: error.text,
				})
			}
		)
		e.target.reset()
	}
	return (
		<div>
			<Form onSubmit={handleOnSubmit}>
				<Form.Field
					id='form-input-control-email'
					control={Input}
					label='Введите Ваш номер телефона'
					name='Введите Ваш номер телефона'
					placeholder='phone'
					required
					icon='phone'
					iconPosition='left'
				/>
				<Button type='submit' color='green'>
					Submit
				</Button>
			</Form>
		</div>
	)
}

export default FormMail
