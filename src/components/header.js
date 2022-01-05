import React, { useState} from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Cart from '../components/cart'
import Links from '../components/links'
// mobile navbar
import navMobile from '../components/navMobile'


import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-menu.svg'

const Header = () => {
	const [links, setLinks] = useState(Links);
	return (
		<>
			<header>
		    <div className="navbar">
		     	<div className="hamburger">
		       	<img src={hamburger} alt="" />
		      </div>
		     	<div className="logo-img">
		        <img src={logo} alt="logo" />  
		      </div>
		      <nav>
		          {
		          	links.map((link) => {
		          		const {id, name, url} = link
		          		return (
		          			<ul key={id}>
			          			<a href={url}>
			            		<li>{name}</li>
			          			</a>
		          			</ul>
		          		)
		          	})
		          }
		     	</nav>
		    </div>
		    <Cart />
		  </header>
		  <div className="border-line"></div>
		</>
	)
}

export default Header