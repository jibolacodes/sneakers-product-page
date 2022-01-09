import React, { useState, useEffect } from 'react'
import trash from '../assets/images/icon-delete.svg'


import image1 from '../assets/images/image-product-1.jpg'
import thumbnail from '../assets/images/image-product-1-thumbnail.jpg'


import minus from '../assets/images/icon-minus.svg'
import plus from '../assets/images/icon-plus.svg'
import cart from '../assets/images/icon-cart.svg'
import CartDisplay from '../components/cart'

import images from '../components/data/images'
import Form from '../components/form'


import { ReactComponent as Multiply } from '../assets/images/icon-multiply.svg'
import { ReactComponent as Next } from '../assets/images/icon-next.svg'
import { ReactComponent as Prev } from '../assets/images/icon-previous.svg'


const Product = ({cart, updateCart, updateItemNo}) => {
  const [index, setIndex] = useState(0)
  const [showImage, setShowImage] = useState(images)

  console.log(showImage);
  

  const {url, thumbnail} = images[index];
  const checkNumber = (number) => {
    if(number > images.length - 1) {
      return 0;
    }
    if(number < 0){
      return images.length - 1;
    }
    return number;
  }
  const nextImage = (index) => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }
  const prevImage = (index) => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex);
    })
  }



	return (
		  <div className="product-container">
	        <div className="product-slide">
	          <div className="current-image">
	            {/*<img src={require(`../${showImage}`)} alt="current-image" />*/}
	          </div>
            {
              images.map((item, showImage)=> {
                const {id, name, thumbnail} = item
                return (
      	          <div className="thumbnail" key={id} >
      	            <button type="button">
      	              <img src={require(`../${thumbnail}`)} alt={name} />
      	            </button>
                    
      	          </div>
                )
              })
            }
	        </div>


        <section className="product-info">
          <div className="image-slide">
            <div className="btn-slide">
              <button className="slide-btn prev-btn" onClick={prevImage}>
                <Prev />
              </button>
              <button className="slide-btn next-btn" onClick={nextImage}>
                <Next />
              </button>
            </div>
            <div className="image-container">
              <img src={require(`../${url}`)} alt="" /> 
            </div>
          </div>
          {
            cart.map((item)=> {
              const {id, title, price, desc} = item
              return (
                <div key={id}>
                  <p className="company-title">sneaker company</p>
                  <h1 className="product-info-title">{title}</h1>
                  <p className="more-info">{desc}</p>
                  <div className="pricing">
                    <div className="current-price">
                      <h1>${price}<span className="special-offer">50%</span>
                      </h1>
                    </div>
                    <div className="old-price">
                      <p>${price * 2}.00</p>
                    </div>
                  </div>
                <Form updateCart={updateCart} updateItemNo={updateItemNo}/>
                </div>
              )
            })
          }
        </section>
      </div>
	)
}

export default Product