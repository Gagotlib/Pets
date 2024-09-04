import { useState } from 'react'
import styles from "./Register.module.css"

export default function Register() {
	const [registerData, setRegisterData] = useState({
		username: '',
		email: '',
		password: ''
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setRegisterData((user) => ({
			...user,
			[name]: value
		}))
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log('registerData', registerData)
	}

	return (
		<div className={styles.container}>
			<div className={styles.formContainer}>
				<h1 className={`${styles.title} ${styles.titleSm}`}>Registro</h1>
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.inputGroup}>
						<label htmlFor='username' id='username' className={styles.label}>
							Username
						</label>
						<input className={styles.input} type='text' name='username' value={registerData.username} onChange={handleChange} placeholder='Nombre de Usuario' />
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor='email' id='email' className={styles.label}>
							Email
						</label>
						<input className={styles.input} type='email' name='email' value={registerData.email} onChange={handleChange} placeholder='Correo Electrónico' />
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor='password' id='password' className={styles.label}>
							Password
						</label>
						<input className={styles.input} type='password' name='password' value={registerData.password} onChange={handleChange} placeholder='Contraseña' />
					</div>
					<div className={styles.buttonContainer}>
						<button type='submit' className={styles.button}>
							Registrarse
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
