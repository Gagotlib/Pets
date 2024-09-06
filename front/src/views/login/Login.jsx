import { useState } from 'react'
import styles from './Login.module.css'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

// import { Spinner } from "../../components/spiner/Spiner"

export default function Login() {
const navigate = useNavigate()
	const [loginData, setLoginData] = useState({
		email: '',
		password: ''
	})
	// const [isloging, setIsloging] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target
		setLoginData((user) => ({
			...user,
			[name]: value
		}))
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		Swal.fire({
			title: '<strong>Login exitoso</strong>',
			icon: 'info',
			showCloseButton: true,
			showCancelButton: false,
			focusConfirm: false,
			confirmButtonText: `
              Salir
            `,
			confirmButtonAriaLabel: 'Thumbs up, great!',
			text: `Usuario: ${loginData.email}`,

			willClose: () => {
				
				navigate("/")
			}
		})

	}

	return (
		<div className={styles.container}>
			<div className={styles.formContainer}>
				{/* {showToast && <Toast message='Login successful' type='success' />}
				{errorToast && <Toast message='Username or password are incorrect' type='error' />} */}
				<h1 className={`${styles.title} ${styles.titleSm}`}>Iniciar sesión</h1>
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.inputGroup}>
						<label htmlFor='email' id='email' className={styles.label}>
							Email
						</label>
						<input type='text' id='email' name='email' className={styles.input} placeholder='name@email.com' value={loginData.email} onChange={handleChange} required />
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor='password' id='password' className={styles.label}>
							Contraseña
						</label>
						<input type='password' id='password' name='password' className={styles.input} placeholder='******' value={loginData.password} onChange={handleChange} required />
					</div>
					<div className={styles.buttonContainer}>
						<button type='submit' className={styles.button}>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
