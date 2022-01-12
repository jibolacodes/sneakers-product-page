import React, { useState } from 'react';
import images from '../components/data/images';
import Form from '../components/form';
import ProductModal from '../components/productModal'

import { ReactComponent as Next } from '../assets/images/icon-next.svg';
import { ReactComponent as Prev } from '../assets/images/icon-previous.svg';


const Product = ({cart, updateCart, updateItemNo}) => {
  const [index, setIndex] = useState(0)
  const [modal, setModal] = useState(false)
  const {url} = images[index];


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
      <button className="current-image" onClick={()=>setModal(!modal)}>
        <img src={require(`../${url}`)} alt="current" />
      </button>
      <div className="thumbnail">
      {
        images.map((item)=> {
          const {id, name, thumbnail} = item
          return (
            <div key={id} >
              <button className='img-btn' type="button" onClick={()=>setIndex(id - 1)}>
                <img src={require(`../${thumbnail}`)} alt={name} />
              </button>  
            </div>
          )
        })
      }
      </div>
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
          <img src={require(`../${url}`)} alt={""} /> 
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
                  <h1>${price}.00<span className="special-offer">50%</span></h1>
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
  {modal && <ProductModal />}
  </div>
	)
}

export default Product