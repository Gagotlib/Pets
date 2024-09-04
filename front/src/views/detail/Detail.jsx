import React from 'react'
import Gallery from '../../components/gallery/Gallery'
import styles from './Detail.module.css'
import Swal from 'sweetalert2'

const Detail = () => {

    const handleContact = () => {
        Swal.fire({
            title: "<strong>debe estar Registrado</strong>",
            icon: "info",
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `
              Entrar
            `,
            confirmButtonAriaLabel: "Thumbs up, great!",
            cancelButtonText: `
              Registrarme
            `,
            cancelButtonAriaLabel: "Thumbs down"
          });
    }

    return (

        <div className={styles.bodyDetail}>

            <h1>Mascota Perdida</h1>

            <div className={styles.galleryAndDescription}>

                <div className={styles.galleryContainer}>
                    <Gallery />
                </div>

                <div className={styles.descriptionContainer}>
                    <div>
                        <h2>Detalle de Mascota</h2>
                        <ul>
                            <li>Nombre: Moises</li>
                            <li>Edad: 2 años</li>
                            <li>Color: amarillo y blanco</li>
                            <li>peso 3 kg</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Detalle del Dueño</h2>
                        <ul>
                            <li>Nombre: Martin</li>
                            <li>localidad: Villaguay</li>
                        </ul>

                        <button className={styles.buttonContact}
                        onClick={handleContact}
                        >Contactar
                        </button>
                    </div>

                </div>

            </div>


        </div>

    )
}

export default Detail