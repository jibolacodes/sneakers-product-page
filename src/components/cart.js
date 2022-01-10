import React, { useState, useEffect, useRef } from 'react'
import cart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'

import CartDisplay from './cartDisplay'

const Cart = ({itemNo}) => {
	const [getData, setGetData] = useState(0);
	const [show, setShow] = useState(false);
	const refContainer = useRef(null);

	useEffect(() => {
		setGetData(() => {
			const newItemNo = parseInt(itemNo);
			if(newItemNo === 0){
				refContainer.current.classList.add('hide');
			}else {
				refContainer.current.classList.remove('hide');
			}
		})
	}, [itemNo])



	return (
		<>
	  <div className="cart-order">
	    <div className="cart">
	      <img src={cart} alt="cart-icon" />
	      <h3 className="total" ref={refContainer}>{itemNo}</h3>
	    </div>
	    <div>
	      <a href="#person">
	        <img className="person-img" src={avatar} alt="avatar" />
	      </a>   
	    </div>
	  </div>
	  </>
	)
}

export default Cart