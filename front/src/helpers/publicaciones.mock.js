
export const publicaciones = [
	{
		//publicacion tipo para cuando un dueño reporta a su mascota como perdida
		contactoEmail: 'gagotlib@mail.com',
		contactoNombre: 'gabriel',
		contactoTelefono: '+491601100010',
		fechaPerdida: '2024-09-01',
		fotos: [], //aca van a ir imagenes convertidas a base 64
		mascotaColores: ['Blanco', 'Marron'],
		mascotaEdad: '7',
		mascotaEspecie: 'Perro',
		mascotaOtros: 'nada',
		mascotaRaza: 'Caniche',
		mascotaTamaño: 'Pequeña',
		nombre: 'Gaby',
		publicaDueño: true, //!este es el dato que me diced que la publicacion le pertenece a un dueño
		rescatada: false,
		zona: 'Lanus'
	},
	{
    //publicacion tipo para cuando una persona encuentra un mascota en la calle
		contactoEmail: 'gagotlib@mail.com',
		contactoNombre: 'gabriel',
		contactoTelefono: '+491601100010',
		fechaPerdida: '2024-09-01',
		fotos: [], //aca van a ir imagenes convertidas a base 64
		mascotaColores: ['Blanco', 'Marron'],
		mascotaEdad: '7',
		mascotaEspecie: 'Gato',
		mascotaOtros: 'nada',
		mascotaRaza: 'Siamés',
		mascotaTamaño: 'Pequeña',
		nombre: undefined,
		publicaDueño: false, //!este es el dato que me diced que la publicacion le pertenece a una persona que encontró el animal en la calle
		rescatada: false,
		zona: 'Lanus'
	}
]
