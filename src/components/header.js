import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// components
import Navbar from './navbar'
import Cart from './cart'
// images
import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-menu.svg'

const Header = ({itemNo}) => {
	return (
		<>
		<header>
			<Navbar />
			<Cart itemNo={itemNo}/>			
		</header>
		<div className="border-line"></div>
		</>
	)
}

export default Header