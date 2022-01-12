import React, { useState, useEffect, useRef } from 'react'
import cart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'

const Cart = ({itemNo, toggleModal}) => {
	const [getData, setGetData] = useState(0);
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
		  <div className="cart">
		    <button className="cart-btn" onClick={()=>toggleModal()}>
		      <img src={cart} alt="cart-icon" />
		      <h3 className="total" ref={refContainer}>{itemNo}</h3>
		    </button>
		    <div>
		      <div className="person">
		        <img className="person-img" src={avatar} alt="avatar" />
		      </div>   
		    </div>
		  </div>
	  </>
	)
}

export default Cart