// import React from 'react'
import styles from './Footer.module.css'
import logo from '/src/assets/PetRescue-logo-Footer.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={styles.bodyFooter}>

      <div className={styles.logoContainer}>
        <img
          className={styles.logo}
          src={logo} alt="" />
        <div>

          <ul className={styles.nav}>
            <li>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/login'>
                Iniciar sesión
              </Link>
            </li>
            <li>
              <Link to='/register'>
                Registrarse
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>


      <div className={styles.rightsContainer}>
        <p>© 2024 PetRescue. All rights reserved.</p>

        <p>Terms of Service</p>
      </div>

    </div>
  )
}

export default Footer
