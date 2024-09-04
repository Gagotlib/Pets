import  { useState } from 'react'
import styles from './Tarjeta.module.css';

const Tarjeta = ({ foto, nombre, direccion, genero, edad }) => {
  return (
    <div className={styles.tarjeta}>
      <img src={foto} alt={nombre} className={styles.foto} />
      <div className={styles.info}>
        <h2 className={styles.nombre}>{nombre}</h2>
        <p className={styles.direccion}><strong>Dirección:</strong> {direccion}</p>
        <p className={styles.genero}><strong>Género:</strong> {genero}</p>
        <p className={styles.edad}><strong>Edad:</strong> {edad}</p>
      </div>
    </div>
  );
};

export default Tarjeta;
