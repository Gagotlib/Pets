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
import Footer from './components/footer/Footer'
import Contact from './views/Contact/Contact'
import Lostposts from './views/lostposts/Lostposts'
import Foundposts from './views/foundposts/Foundposts'
import Happyendings from './views/happyendings/Happyendings'

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/detail/:id' element={<Detail />} />
				<Route path='/register' element={<Register />} />
				<Route path='/publishfound' element={<Publishfound />} />
				<Route path='/publishlost' element={<Publishlost />} />
				<Route path='/lostposts' element={<Lostposts />} />
				<Route path='/foundposts' element={<Foundposts />} />
				<Route path='/happyendings' element={<Happyendings />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/*' element={<ErrorPage />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
