// import React from 'react'
import PropTypes from 'prop-types'

export default function CustomButton({ children, className, action, type = 'button' }) {
	return (
		<button type={type} className={className} onClick={action}>
			{children}
		</button>
	)
}

// Definición de prop-types
CustomButton.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	type: PropTypes.string,
	action: PropTypes.func
}
