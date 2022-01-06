import React, { useState } from 'react'

import Sidebar from '../header/sidebar'
import Links from '../header/links'
import logo from '../../assets/images/logo.svg'
import hamburger from '../../assets/images/icon-menu.svg'


const Navbar = () => {
	const [links, setLinks] = useState(Links);
	const [show, setShow] = useState(false);
	return (
		<>
		  <div className="navbar">
		    <button className="hamburger" onClick={()=>setShow(!show)}>
		    	<img src={hamburger} alt="open-icon" />
		    </button>
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
	 	{show && <Sidebar />}
	 	</>
	)
}

export default Navbar