// import React from 'react'
import { useState } from 'react'
import styles from './Publishlost.module.css'

export default function Publishlost() {
	const [images, setImages] = useState([])

	const [formData, setFormData] = useState({
		publicaDueño: true,
		rescatada: false,
		nombre: '',
		fechaPerdida: '',
		zona: '',
		mascotaEspecie: '',
		mascotaRaza: '',
		mascotaColores: [],
		mascotaTamaño: '',
		mascotaEdad: '',
		mascotaOtros: '',
		contactoNombre: '',
		contactoTelefono: '',
		contactoEmail: '',
		fotos: []
	})

	function convertToBase64(e) {
		const files = Array.from(e.target.files)
		const promises = files.map((file) => {
			return new Promise((resolve, reject) => {
				const reader = new FileReader()
				reader.readAsDataURL(file)
				reader.onload = () => {
					console.log('reader.result', reader.result)

					resolve(reader.result)
				}
				reader.onerror = (error) => reject(error)
			})
		})

		Promise.all(promises)
			.then((base64Images) => {
				setImages(base64Images)
				setFormData({
					...formData,
					fotos: base64Images
				})
			})
			.catch((error) => console.error('Error al convertir imágenes:', error))
	}

	const handleChange = (e) => {
		const { name, value } = e.target

		// Convertir el string en un array de colores si es el campo mascotaColores
		if (name === 'mascotaColores') {
			setFormData((prevFormData) => ({
				...prevFormData,
				[name]: value.split(',').map((color) => color.trim()) // Convertir en array y eliminar espacios
			}))
		} else {
			setFormData((prevFormData) => ({
				...prevFormData,
				[name]: value
			}))
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log('enviando formulario', formData)
		//lógica para enviar al back el formulario
	}

	const handleClear = () => {
		setImages([])
		setFormData({
			publicaDueño: true,
			rescatada: false,
			nombre: '',
			fechaPerdida: '',
			zona: '',
			mascotaEspecie: '',
			mascotaRaza: '',
			mascotaColores: [],
			mascotaTamaño: '',
			mascotaEdad: '',
			mascotaOtros: '',
			contactoNombre: '',
			contactoTelefono: '',
			contactoEmail: '',
			fotos: []
		})
		console.log('formulario borrado')
	}

	return (
		<section className={styles.section}>
			<h3 className={styles.title}>¿Perdiste una mascota?</h3>
			<h4 className={styles.subtitle}>Completá el formulario y la gente te ayudará a encontrarlo</h4>
			<div className={styles.formContainer}>
				<form onSubmit={handleSubmit} className={styles.form}>
					<label htmlFor='nombre' className={styles.label}>
						Nombre
					</label>
					<input type='text' name='nombre' id='nombre' placeholder='Ej: Buddy' className={styles.input} onChange={handleChange} required value={formData.nombre} />
					<label htmlFor='fechaPerdida'>Fecha que se perdió</label>
					<input type='date' name='fechaPerdida' id='fechaPerdida' className={styles.input} onChange={handleChange} required value={formData.fechaPerdida} />
					<label htmlFor='zona'>Zona / Barrio en que se perdió la mascota</label>
					<input type='text' name='zona' id='zona' placeholder='Ej: Quilmes' className={styles.input} onChange={handleChange} required value={formData.zona} />
					<label htmlFor='mascotaEspecie'>Tipo de mascota</label>
					<select name='mascotaEspecie' id='mascotaEspecie' className={styles.input} onChange={handleChange} required value={formData.mascotaEspecie}>
						<option value=''>Selecciona la especie</option> {/* Opción por defecto */}
						<option value='Perro'>Perro</option>
						<option value='Gato'>Gato</option>
					</select>
					<label htmlFor='mascotaRaza'>Raza de la mascota</label>
					<input type='text' name='mascotaRaza' id='mascotaRaza' placeholder='Ej: Caniche / Mixto' className={styles.input} onChange={handleChange} required value={formData.mascotaRaza} />
					<label htmlFor='mascotaColores' className={styles.label}>
						Colores de la mascota, separados por coma y en orden de importancia
					</label>
					<input type='text' name='mascotaColores' id='mascotaColores' placeholder='Negro, Marron, Blanco' className={styles.input} onChange={handleChange} required value={formData.mascotaColores} />
					<label htmlFor='mascotaTamaño'>Tamaño de la mascota</label>
					<select name='mascotaTamaño' id='mascotaTamaño' className={styles.input} onChange={handleChange} required value={formData.mascotaTamaño}>
						<option value=''>Selecciona el tamaño</option> {/* Opción por defecto */}
						<option value='Pequeña'>Pequeña</option>
						<option value='Mediana'>Mediana</option>
						<option value='Grande'>Grande</option>
					</select>

					<label htmlFor='mascotaEdad'>Edad de la mascota</label>
					<input type='number' name='mascotaEdad' id='mascotaEdad' placeholder='Ej: 3' className={styles.input} onChange={handleChange} required value={formData.mascotaEdad} />
					<label htmlFor='mascotaOtros'>Otros datos de la mascota</label>
					<textarea
						name='mascotaOtros'
						id='mascotaOtros'
						placeholder='Ej: Tenía collar color negro.. responde al nombre.. tiene chip..'
						className={styles.input}
						onChange={handleChange}
						required
						value={formData.mascotaOtros}
						rows={4}
					/>

					<label htmlFor='fotos'>Fotos de la mascota</label>
					<input accept='/image/*' type='file' name='fotos' id='fotos' className={styles.input} onChange={convertToBase64} multiple />
					{images.map((img, index) => (
						<img key={index} src={img} alt={`mascota ${index}`} width={100} height={100} />
					))}

					<label htmlFor='contactoNombre'>Nombre de contacto</label>
					<input type='text' name='contactoNombre' id='contactoNombre' placeholder='Ej: Juan' className={styles.input} onChange={handleChange} required value={formData.contactoNombre} />
					<label htmlFor='contactoTelefono'>Teléfono de contacto, sin espacios</label>
					<input
						type='text'
						name='contactoTelefono'
						id='contactoTelefono'
						placeholder='Ej: +5491112345678'
						className={styles.input}
						onChange={handleChange}
						required
						value={formData.contactoTelefono}
					/>
					<label htmlFor='contactoEmail'>Email de contacto</label>
					<input type='email' name='contactoEmail' id='contactoEmail' placeholder='Ej: mail@example.com' className={styles.input} onChange={handleChange} required value={formData.contactoEmail} />

					<div className={styles.buttonContainer}>
						<button className={styles.buttonClear} onClick={handleClear}>
							Borrar todo
						</button>
						<button type='submit' className={styles.buttonSend}>
							Publicar
						</button>
					</div>
				</form>
			</div>
		</section>
	)
}
