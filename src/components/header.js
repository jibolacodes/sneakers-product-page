import React from 'react'
// components
import Navbar from './navbar'
import Cart from './cart'


const Header = ({itemNo, toggleModal}) => {
	return (
		<>
		<header>
			<Navbar />
			<Cart itemNo={itemNo} toggleModal={toggleModal}/>			
		</header>
		<div className="border-line"></div>
		</>
	)
}

export default Header