import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// components
import Navbar from './navbar'
import Cart from './cart'


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