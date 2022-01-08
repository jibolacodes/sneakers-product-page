import React, { useState, useEffect } from 'react'
import cart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'

const Cart = ({itemNo}) => {
	return (
	  <div className="cart-order">
	    <div className="cart">
	      <img src={cart} alt="cart-icon" />
	      <h3 className="total">{itemNo}</h3>
	    </div>
	    <div>
	      <a href="#person">
	        <img className="person-img" src={avatar} alt="avatar" />
	      </a>   
	    </div>
	  </div>	
	)
}

export default Cart