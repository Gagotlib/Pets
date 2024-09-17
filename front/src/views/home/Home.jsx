// import React from 'react'
import { useEffect, useState } from 'react'
import styles from './Home.module.css'
import ListaDeTarjetas from '../../components/tarjeta/ListaDeTarjetas'
// import { publicaciones } from '../../helpers/publicaciones.mock'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Spiner from '../../components/spiner/Spiner'
import { BASE_URL } from '../../envs'

function Home() {
	const [publicaciones, setPublicaciones] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(`${BASE_URL}/all`)
			// console.log(response.data)
			setPublicaciones(response.data)
			setIsLoading(false)
		}

		fetchData()
	}, [])

	// Estado para manejar la categoria seleccionada
	const [filtro, setFiltro] = useState('dueños')

	// Filtrar segun la categoria seleccionada
	const mascotasFiltradas = publicaciones.filter((publicacion) => {
		if (filtro === 'dueños') {
			return publicacion.publica_duenio && !publicacion.rescatada
		} else if (filtro === 'otros') {
			return !publicacion.publica_duenio && !publicacion.rescatada
		}
		return []
	})

	const mascotasEncontradas = publicaciones.filter((publicacion) => {
		return publicacion.rescatada
	})

	return (
		<main className={styles.main}>
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
				<button className={`${styles.filterButton} ${filtro === 'dueños' ? styles.active : ''}`} onClick={() => setFiltro('dueños')}>
					Mascotas perdidas
				</button>
				<button className={`${styles.filterButton} ${filtro === 'otros' ? styles.active : ''}`} onClick={() => setFiltro('otros')}>
					Mascotas encontradas
				</button>
			</div>

			<div className={styles.tarjetasContainer}>
				<h2>
					{filtro === 'dueños' && 'Ayudanos a encontrar a estas mascotas '}
					{filtro === 'otros' && 'Estas mascotas estan buscando a sus dueños'}
				</h2>
				{isLoading ? <Spiner /> : <ListaDeTarjetas publicacions={mascotasFiltradas} />}
			</div>
			<div className={styles.tarjetasContainer2}>
				<h2>Estas mascotas se reencontraron con sus dueños gracias a Pet Rescue!</h2>
				{isLoading ? <Spiner /> : <ListaDeTarjetas publicacions={mascotasEncontradas} />}
			</div>
		</main>
	)
}

export default Home
