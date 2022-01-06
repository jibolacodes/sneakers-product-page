import React from 'react'
import cart from '../../assets/images/icon-cart.svg'
import avatar from '../../assets/images/image-avatar.png'

const Cart = () => {
	return (
	  <div className="cart-order">
	    <div className="cart">
	      <img src={cart} alt="cart-icon" />
	      <span className="total">3</span>
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