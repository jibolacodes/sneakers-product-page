import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Navbar from './header/navbar'
import Cart from './header/cart'
import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-menu.svg'

const Header = () => {
	return (
		<>
		<header>
			<Navbar />
		  <Cart />
		</header>
		<div className="border-line"></div>
		</>
	)
}

export default Header