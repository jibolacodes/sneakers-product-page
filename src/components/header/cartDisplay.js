import React from 'react'
import product1 from '../../assets/images/image-product-1.jpg'
import trash from '../../assets/images/icon-delete.svg'

const cartDisplay = () => {
	return (
    <section className="cart-box">      
		 <div className="cart-display">
      <div className="title">
        <h2>Cart</h2>
      </div>
      <div className="border-line"></div>
        <section className="center">
          <div className="checkout">
           <div className="checkout-img">
              <img src={product1} alt="checkout-img" />
            </div>
            <div className="checkout-detail">
              <p>Fall Limited Edition Sneakers</p>
              <p>$125.00 x 3 <span>$375.00</span></p>
            </div>

            <button className="trash-btn">
              <img src={trash} alt="trash" />
            </button>
          </div>
          <div className="btn-container">
            <button className="btn">checkout</button>
          </div>
        </section>
      </div>
    </section>
	)
}

export default cartDisplay