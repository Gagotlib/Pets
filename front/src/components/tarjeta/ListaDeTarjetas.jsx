import { Link } from 'react-router-dom'
import Tarjeta from './Tarjeta'
import styles from './Tarjeta.module.css'

const ListaDeTarjetas = ({ publicacions }) => {
	const publicacionesLimitadas = publicacions.slice(0, 5)

	return (
		<div className={styles.listaDeTarjetas}>
			<div className={styles.lista}>
				{publicacionesLimitadas.map((publicacion, index) => (
					<Tarjeta key={index} publicacion={publicacion} />
				))}
			</div>
			{publicacions[0].publica_duenio === true && publicacions[0].rescatada === false && (
				<Link to='/lostposts' className={styles.verMasBotton}>
					{' '}
					Ver mas publicaciones{' '}
				</Link>
			)}
			{publicacions[0].publica_duenio === false && publicacions[0].rescatada === false && (
				<Link to='/foundposts' className={styles.verMasBotton}>
					{' '}
					Ver mas publicaciones
				</Link>
			)}
			{publicacions[0].rescatada === true && (
				<Link to='/happyendings' className={styles.verMasBotton}>
					{' '}
					Ver mas publicaciones
				</Link>
			)}
		</div>
	)
}

export default ListaDeTarjetas
