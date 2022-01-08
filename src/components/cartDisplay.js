import React, {useState} from 'react'
import product1 from '../assets/images/image-product-1.jpg'
import trash from '../assets/images/icon-delete.svg'

import CartItem from './cartItem'

const CartDisplay = ({cart, itemNo}) => {
  const [deleteItem, setDeleteItem] = useState(false);

	return (
    <section className="cart-box">      
		 <div className="cart-display">
      <div className="title">
        <h2>Cart</h2>
      </div>
      <div className="border-line"></div>
              {
                cart.map((item)=> {
                  const {id, title, price} = item;
                  return (
                <section className="center" >
                  <div className="checkout">
                     <div className="checkout-img">
                        <img src={product1} alt="product-img" />
                      </div>
                    <div className="checkout-detail" key={id}>
                      <p>{title}</p>
                      <p>${price}.00 x {itemNo} <span>${price * itemNo}.00</span></p>
                    </div> 
                    <button className="trash-btn" onClick={()=>setDeleteItem(!deleteItem)}>
                      <img src={trash} alt="trash" />
                    </button>
                  </div>
                  <div className="btn-container">
                    <button className="btn">checkout</button>
                  </div>
                  {deleteItem && <CartItem /> }
                </section>
                  )
                })
              }

      </div>
    </section>
	)
}

export default CartDisplay