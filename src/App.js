import React from 'react'
import Header from './components/header'
import CartDisplay from './components/cartDisplay.js'
import trash from './assets/images/icon-delete.svg'
import image1 from './assets/images/image-product-1.jpg'
import thumbnail from './assets/images/image-product-1-thumbnail.jpg'

const App = () => {
  return (
    <main>
      <Header />
      <CartDisplay />
      <div className="container">
        <div className="product-slide">
          <div className="current-image">
            <img src={image1} alt="current-image" />
          </div>
          <div className="thumbnail">
            <img src={thumbnail} alt="" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App