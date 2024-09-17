import styles from './Tarjeta.module.css'
import { Link } from 'react-router-dom'

const Tarjeta = ({ publicacion }) => {
	// console.log(publicacion)

	return (
		<Link to={`/detail/${publicacion.id}`} className={styles.tarjeta}>
			<div className={styles.fotoContainer}>
				<img src={publicacion.fotos[0]} alt={publicacion.mascota_nombre} className={styles.foto} />
			</div>
			<div className={styles.info}>
				<h2 className={styles.nombre}>{publicacion.mascota_nombre}</h2>
				<p className={styles.direccion}>
					<strong>Zona:</strong> {publicacion.zona}
				</p>
				<p className={styles.edad}>
					<strong>Fecha:</strong> {publicacion.fecha}
				</p>
			</div>
		</Link>
	)
}

export default Tarjeta
