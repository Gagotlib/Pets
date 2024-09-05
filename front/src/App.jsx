import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './views/home/Home'
import Login from './views/login/Login'
import ErrorPage from './views/ErrorPage/ErrorPage'
import Detail from './views/detail/Detail'
import Register from './views/register/Register'
import Publishfound from './views/publishfound/Publishfound'
import Publishlost from './views/publishlost/Publishlost'

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/detail/:nombre' element={<Detail />} />
				<Route path='/register' element={<Register />} />
				<Route path='/publishfound' element={<Publishfound />} />
				<Route path='/publishlost' element={<Publishlost />} />
				<Route path='/*' element={<ErrorPage />} />
			</Routes>

		</>
	)
}

export default App
