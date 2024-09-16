import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../../envs'
import styles from './Foundposts.module.css'
import Tarjeta from '../../components/tarjeta/Tarjeta'
import Spiner from '../../components/spiner/Spiner'

export default function Foundposts() {
	const [publicaciones, setPublicaciones] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(`${BASE_URL}/allOwnerNonPublishes`)
			console.log(response.data)
			setPublicaciones(response.data)
			setIsLoading(false)
		}
		fetchData()
	}, [])

		return (
			<div className={styles.container}>
				<h2 className={styles.title}>Ayuda a estas mascotas a encontrar sus dueños!</h2>
				<div className={styles.cardsContainer}>
					{isLoading && <Spiner />}
					{publicaciones && publicaciones.map((publicacion, index) => <Tarjeta key={index} publicacion={publicacion} />)}
				</div>
			</div>
		)
}
