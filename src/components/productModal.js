import React, { useState } from 'react'

import images from '../components/data/images';
import image1 from '../assets/images/image-product-1.jpg'
import thumbnail from '../assets/images/image-product-1-thumbnail.jpg'

import { ReactComponent as Multiply } from '../assets/images/icon-multiply.svg'
import { ReactComponent as Next } from '../assets/images/icon-next.svg'
import { ReactComponent as Prev } from '../assets/images/icon-previous.svg'

const ProductModal = () => {
	const [index, setIndex] = useState(0)
	const {id, name, url, thumbnail} = images[index]

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
	<div className="product-modal" key={id}>
        <div className="close-center">
          <button className="close-btn">
       			<Multiply className="multiply" />
          </button>
        </div>
	        <div className="modal-slide">
		        <div className="top-img">
		          <button className="slide-btn prev-btn" onClick={prevImage}>
		          	<Prev />
		          </button>
		          <div className="current-image">
		            <img src={require(`../${url}`)} alt={name} />
		          </div>
		          <button className="slide-btn next-btn">
		          	<Next />
		          </button>
		        </div>	
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
    </div>
	)
}

export default ProductModal