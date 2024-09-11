export function capitalizeFirstLetter(text) {
	return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}
export function capitalizeWords(str) {
	return str
		.split(',')
		.map((word) => word.trim().charAt(0).toUpperCase() + word.trim().slice(1).toLowerCase())
		.join(', ')
}
