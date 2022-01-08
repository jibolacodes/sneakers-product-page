import React, { useState, useEffect } from 'react'
import trash from '../assets/images/icon-delete.svg'
import image1 from '../assets/images/image-product-1.jpg'
import thumbnail from '../assets/images/image-product-1-thumbnail.jpg'
import minus from '../assets/images/icon-minus.svg'
import plus from '../assets/images/icon-plus.svg'
import cart from '../assets/images/icon-cart.svg'
import CartDisplay from '../components/cart'

import { ReactComponent as Multiply } from '../assets/images/icon-multiply.svg'
import { ReactComponent as Next } from '../assets/images/icon-next.svg'
import { ReactComponent as Prev } from '../assets/images/icon-previous.svg'


const Product = ({cart}) => {
	return (
		<div className="product-container">
	        <div className="product-slide">
	          <div className="current-image">
	            <img src={image1} alt="current-image" />
	          </div>
	          <div className="thumbnail">
	            <a href="">
	              <img src={thumbnail} alt="" />
	            </a>
	            <a href="">
	              <img src={thumbnail} alt="" />
	            </a>
	            <a href="">
	              <img src={thumbnail} alt="" />
	            </a>
	            <a href="">
	              <img src={thumbnail} alt="" />
	            </a>
	          </div>
	        </div>
          {
            cart.map((item)=> {
              const {id, title, price, desc} = item
              return (
                <section className="product-info" key={id}>
                  <div className="image-slide">
                    <div className="btn-slide">
                      <button className="slide-btn prev-btn">
                        <Prev />
                      </button>
                      <button className="slide-btn next-btn">
                        <Next />
                      </button>
                    </div>
                    <img src={image1} alt="" />
                  </div>
                  <p className="company-title">sneaker company</p>
                  <h1 className="product-info-title">{title}</h1>
                  <p className="more-info">
                    {desc}
                  </p>
                  <div className="pricing">
                    <div className="current-price">
                      <h1>${price}<span className="special-offer">50%</span>
                      </h1>
                    </div>
                    <div className="old-price">
                      <p>${price * 2}.00</p>
                    </div>
                  </div>
                </section>

              )
            })
          }
      </div>
	)
}

export default Product