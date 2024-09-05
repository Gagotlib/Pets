import Tarjeta from './Tarjeta';
import styles from './Tarjeta.module.css';

const ListaDeTarjetas = ({ publicacions }) => {
  return (
		<div className={styles.lista}>
			{publicacions.map((publicacion, index) => (
				<Tarjeta
					key={index}
					fotos={publicacion.fotos}
					nombre={publicacion.nombre}
					direccion={publicacion.zona}
					genero={publicacion.mascotaEspecie}
					edad={publicacion.mascotaEdad}
					id={publicacion.id}
				/>
			))}
		</div>
	)
};

export default ListaDeTarjetas;
