import React from 'react'
import Header from './components/header'
import CartDisplay from './components/cartDisplay.js'
import Product from './components/product'
import ProductModal from './components/productModal'
import NavMobile from './components/navMobile.js'


const App = () => {
  return (
    <main>
{/*      <NavMobile />*/}
      <Header />
      <CartDisplay />
      <Product />
      {/*<ProductModal />*/}
    </main>
  )
}

export default App