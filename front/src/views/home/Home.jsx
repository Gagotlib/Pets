// import React from 'react'
import { useState } from 'react'
import styles from './Home.module.css'
import ListaDeTarjetas from '../../components/tarjeta/ListaDeTarjetas'
import { publicaciones } from '../../helpers/publicaciones.mock'
import { Link } from 'react-router-dom'

function Home() {
	// const posteos = axios.get(rutaasdasdasd/posts)

	/*	//lista iterada de animales
	const animales = Array.from({ length: 10 }, () => ({
		foto: '/perro.jpg',
		nombre: 'Dubi',
		direccion: 'Calle 123, Encarnacion',
		genero: 'Macho',
		edad: '5 años'
	}))
*/
	// Estado para manejar la categoria seleccionada
	const [filtro, setFiltro] = useState('dueños')

	// Filtrar segun la categoria seleccionada
	const mascotasFiltradas = publicaciones.filter((publicacion) => {
		if (filtro === 'dueños') {
			return publicacion.publicaDueño && !publicacion.rescatada
		} else if (filtro === 'otros') {
			return !publicacion.publicaDueño && !publicacion.rescatada
		} else if (filtro === 'rescatadas') {
			return publicacion.rescatada
		}
		return []
	})

	return (
		<main>
			<div className={styles.container}>
				<h1 className={styles.title}>Bienvenido a Pet Rescue!</h1>
				<p className={styles.subtitle}>¡Tu comunidad para reunir mascotas perdidas y encontradas! </p>
				<p className={styles.text}>
					Aquí entendemos lo importante que es para ti encontrar a tu compañero peludo. Por eso, hemos creado una plataforma simple y efectiva para ayudarte a reunirte con tu mascota o para que puedas
					ayudar a otros a encontrar la suya.
				</p>
				<br />
				<div className={styles.buttonsContainer}>
					<Link to={'/publishlost'} className={styles.buttonPerdi}>
						Perdí mi mascota
					</Link>
					<Link to={'/publishfound'} className={styles.buttonEncontre}>
						Encontré una mascota
					</Link>
				</div>
			</div>

			{/* Selector de filtro */}
			<div className={styles.filterContainer}>
				<label htmlFor='filtro'>Filtrar por:</label>
				<select id='filtro' value={filtro} onChange={(e) => setFiltro(e.target.value)} className={styles.selectFiltro}>
					<option value='dueños'>Mascotas perdidas por sus dueños</option>
					<option value='otros'>Mascotas encontradas perdidas por otras personas</option>
					<option value='rescatadas'>Mascotas rescatadas</option>
				</select>
			</div>

			<div className={styles.tarjetasContainer}>
				<h2>
					{filtro === 'dueños' && 'Mascotas perdidas '}
					{filtro === 'otros' && 'Mascotas encontradas perdidas por otras personas'}
					{filtro === 'rescatadas' && 'Mascotas Rescatadas'}
				</h2>
				<ListaDeTarjetas publicacions={mascotasFiltradas} />
			</div>
		</main>
	)
}

export default Home
