import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarTitle}>
				<Link to='/' className={styles.navbarTitle}>
					Mi App
				</Link>
			</div>
			<button className={styles.hamburger} onClick={toggleMobileMenu}>
				☰
			</button>
			<ul className={`${styles.navbarList} ${isMobileMenuOpen ? styles.navbarListOpen : ''}`}>
				<li>
					<Link to='/' onClick={toggleMobileMenu}>
						Home
					</Link>
				</li>
				<li>
					<Link to='/login' onClick={toggleMobileMenu}>
						Iniciar sesión
					</Link>
				</li>
				<li>
					<Link to='/register' onClick={toggleMobileMenu}>
						Registrarse
					</Link>
				</li>
				<li>
					<Link to='/contact' onClick={toggleMobileMenu}>
						Contacto
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
