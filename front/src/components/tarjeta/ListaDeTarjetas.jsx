import Tarjeta from './Tarjeta';
import styles from './Tarjeta.module.css';

const ListaDeTarjetas = ({ publicacions }) => {
  return (
		<div className={styles.lista}>
			{publicacions.map((publicacion, index) => (
				<Tarjeta
					key={index}
					fotos={publicacion.fotos}
					nombre={publicacion.mascota_nombre}
					direccion={publicacion.zona}
					genero={publicacion.mascota_especie}
					edad={publicacion.mascota_edad}
					id={publicacion.id}
				/>
			))}
		</div>
	)
};

export default ListaDeTarjetas;
