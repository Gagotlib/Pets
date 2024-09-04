import  { useState } from 'react'
import Tarjeta from './tarjeta';
import styles from './Tarjeta.module.css';

const ListaDeTarjetas = ({ animales }) => {
  return (
    <div className={styles.lista}>
      {animales.map((animal, index) => (
        <Tarjeta 
          key={index}
          foto={animal.foto}
          nombre={animal.nombre}
          direccion={animal.direccion}
          genero={animal.genero}
          edad={animal.edad}
        />
      ))}
    </div>
  );
};

export default ListaDeTarjetas;
