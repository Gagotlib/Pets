import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'react-image-gallery/styles/css/image-gallery.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { format, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'
import styles from './Detail.module.css'
import ImageGallery from 'react-image-gallery'
import { BASE_URL } from '../../envs'

const formatDate = (dateString) => {
	const date = parseISO(dateString)
	return format(date, 'eeee d MMMM yyyy', { locale: es })
}

const Detail = () => {

	const { id } = useParams()
	const [publicacion, setPublicacion] = useState(null)

	useEffect(() => {
		console.log('ID:', id)
		if (id) {
			const fetchData = async () => {
				try {
					const response = await axios.get(`${BASE_URL}/findById/${id}`)
					console.log('Publicación:', response.data)
					setPublicacion(response.data)
				} catch (error) {
					console.error('Error fetching data:', error)
				}
			}

			fetchData()
		} else {
			console.error('ID is undefined')
		}
	}, [id])

	// Configuración del Modal
	const handleContact = () => {
		Swal.fire({
			title: '<strong>Datos de contacto</strong>',
			showCloseButton: true,
			focusConfirm: false,
			html: `<p>Nombre :  ${publicacion.usuario_nombre}</p> <p>Email :  ${publicacion.usuario_email}</p> <p>Telefono :  ${publicacion.usuario_telefono}</p>`
		})
	}

	// Retorno temprano si `publicacion` es null
	if (!publicacion) {
		return <div className={styles.container}>Cargando publicación...</div>
	}

	const fechaFormateada = formatDate(publicacion.fecha)

	const imagenes = publicacion.fotos.map((foto) => ({
		original: foto,
		thumbnail: foto
	}))

	return (
		<div className={styles.container}>
			<div className={styles.customCard}>
				<div className={styles.col4}>
					<ImageGallery items={imagenes} showBullets={true} autoPlay={true} showThumbnails={true} showNav={true} />
				</div>
				<div className={styles.col8}>
					{publicacion.rescatada ? (
						<div className={styles.cardBody}>
							<h5 className={styles.cardTitle}>Gracias a Pet Rescue pude reencontrarme con mi familia!</h5>
						</div>
					) : (
						<div className={styles.cardBody}>
							<>
								{publicacion.mascota_nombre ? (
									<h5 className={styles.cardTitle}>Mi nombre es {publicacion.mascota_nombre}</h5>
								) : (
									<h5 className={styles.cardTitle}>Hola! Estoy perdido en {publicacion.zona}</h5>
								)}
							</>
							{publicacion.publica_duenio ? <p>Se perdio el: {fechaFormateada}</p> : <p>Fue visto el: {fechaFormateada} </p>}
							
							{publicacion.publica_duenio && <p>Se perdió en zona: {publicacion.zona}</p>}

							<p>Raza: {publicacion.mascota_raza}</p>
							<p>Tamaño: {publicacion.mascota_tamanio}</p>
							<p>
								<span>
									Colores:
									{publicacion.mascota_colores.map((c) => (
										<span key={c}> {c}, </span>
									))}
								</span>
							</p>
							{publicacion.publica_duenio ? <p>Edad: {publicacion.mascota_edad}</p> : <p>Edad aproximada: {publicacion.mascota_edad} años.</p>}
							<p className={styles.cardText}>Otros detalles: {publicacion.mascota_descripcion}</p>

							<button type='button' className={styles.contactButton} onClick={() => handleContact(publicacion)}>
								Contactar
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Detail
