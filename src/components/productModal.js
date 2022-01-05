import React from 'react'

import image1 from '../assets/images/image-product-1.jpg'
import thumbnail from '../assets/images/image-product-1-thumbnail.jpg'
import { ReactComponent as Multiply } from '../assets/images/icon-multiply.svg'
import { ReactComponent as Next } from '../assets/images/icon-next.svg'
import { ReactComponent as Prev } from '../assets/images/icon-previous.svg'

const productModal = () => {
	return (
	<div className="product-modal">
        <div className="close-center">
          <button className="close-btn">
       			<Multiply className="multiply" />
          </button>
        </div>

	        <div className="product-slide">

		        <div className="top-img">
		          <button className="slide-btn prev-btn">
		          	<Prev />
		          </button>
		          <div className="current-image">
		            <img src={image1} alt="current-image" />
		          </div>
		          <button className="slide-btn next-btn">
		          	<Next />
		          </button>
		        </div>	


	          <div className="thumbnail" style={{padding:'0 2.4rem'}}>
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
    </div>
	)
}

export default productModal