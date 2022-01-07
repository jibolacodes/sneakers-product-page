import React from 'react'
import trash from '../assets/images/icon-delete.svg'
import image1 from '../assets/images/image-product-1.jpg'
import thumbnail from '../assets/images/image-product-1-thumbnail.jpg'
import minus from '../assets/images/icon-minus.svg'
import plus from '../assets/images/icon-plus.svg'
import cart from '../assets/images/icon-cart.svg'

import { ReactComponent as Multiply } from '../assets/images/icon-multiply.svg'
import { ReactComponent as Next } from '../assets/images/icon-next.svg'
import { ReactComponent as Prev } from '../assets/images/icon-previous.svg'


const product = () => {
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

        <section className="product-info">
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
          <h1 className="product-info-title">fall limited edition sneakers</h1>
          <p className="more-info">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole,
             they'll withstand everything the weather can offer.
          </p>
          <div className="pricing">
            <div className="current-price">
              <h1>$125.00<span className="special-offer">50%</span>
              </h1>
            </div>
            <div className="old-price">
              <p>$250.00</p>
            </div>
          </div>

          <form action="#">
          <div className="order-action">
            <div className="order-no">
              <div className="order-no-center">
                <button>
                  <img src={minus} alt="" />
                </button>
                <input type="number" />
                <button>
                  <img src={plus} alt="" />
                </button>
              </div>
            </div>
            <div className="btn-center">
              <button className="btn">
                <span>
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path className="btn-cart" d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
                Add to cart</span>
              </button>
            </div>
          </div         
          </form>




          <div className="order-action">
            <div className="order-no">
              <div className="order-no-center">
                <button>
                  <img src={minus} alt="" />
                </button>
                <span>3</span>
                <button>
                  <img src={plus} alt="" />
                </button>
              </div>
            </div>
            <div className="btn-center">
              <button className="btn">
                <span>
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path className="btn-cart" d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
                Add to cart</span>
              </button>
            </div>
          </div>
        </section>
      </div>
	)
}

export default product