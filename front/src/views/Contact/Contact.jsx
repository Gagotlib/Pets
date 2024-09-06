// import React from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Contact.module.css"
import Swal from 'sweetalert2'

export default function Contact() {
  	const navigate = useNavigate()
  function handleOnSubmit(e) {
    e.preventDefault()
    Swal.fire({
			title: '<strong>Gracias por contactarse</strong>',
			icon: 'info',
			showCloseButton: true,
			showCancelButton: false,
			focusConfirm: false,
			confirmButtonText: `
              Salir
            `,
			confirmButtonAriaLabel: 'Thumbs up, great!',
			text: 'Nos pondremos en contacto con usted lo antes posible.',
			willClose: () => {
				navigate('/')
			}
		})
  }

  return (
		<div className={styles.contactView}>
			<h1 className={styles.title}>Contactanos</h1>
			<form className={styles.contactForm} onSubmit={(e)=>handleOnSubmit(e)}>
				<div>
					<label className={styles.label} htmlFor='nombre'>
						{' '}
						Nombre :{' '}
					</label>
					<input className={styles.input} type='text' name='nombre' id='nombre' placeholder='Tu Nombre' required />
				</div>
				<div>
					<label className={styles.label} htmlFor='email'>
						{' '}
						Email :{' '}
					</label>
					<input className={styles.input} type='email' name='email' id='email' placeholder='Tu Email' required />
				</div>
				<div>
					<label className={styles.label} htmlFor='consulta'>
						{' '}
						Consulta :{' '}
					</label>
					<textarea className={styles.input} type='text' name='consulta' id='consulta' placeholder='Tu Consulta' required />
				</div>
				<div>
					<button type='submit'>Enviar</button>
				</div>
			</form>
		</div>
	)
}
