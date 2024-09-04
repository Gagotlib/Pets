// import React from 'react'

import styles from './Home.module.css'
import ListaDeTarjetas from '../../components/tarjeta/ListaDeTarjetas'
import { Link } from 'react-router-dom'

function Home() {
	// const posteos = axios.get(rutaasdasdasd/posts)

	//lista iterada de animales
	const animales = Array.from({ length: 10 }, () => ({
		foto: '/perro.jpg',
		nombre: 'Dubi',
		direccion: 'Calle 123, Encarnacion',
		genero: 'Macho',
		edad: '5 años'
	}))

	return (
		<main>
			<div className={styles.container}>
				<h1 className={styles.title}>Bienvenido a Mascotas Conectadas!</h1>
				<p className={styles.subtitle}>¡Tu comunidad para reunir mascotas perdidas y encontradas! </p>
				<p className={styles.text}>
					Aquí entendemos lo importante que es para ti encontrar a tu compañero peludo. Por eso, hemos creado una plataforma simple y efectiva para ayudarte a reunirte con tu mascota o para que puedas
					ayudar a otros a encontrar la suya
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

			<div>
				<h1>Lista de Mascotas</h1>
				<ListaDeTarjetas animales={animales} />
			</div>
		</main>
	)
}

export default Home
