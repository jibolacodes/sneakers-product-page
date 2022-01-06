import React from 'react'

// Pages
import Header from './components/header'
import CartDisplay from './components/header/cartDisplay'
import Product from './components/product'
import ProductModal from './components/productModal'

const App = () => {
  return (
    <main>
      <Header />
      <CartDisplay />
      <Product />
    </main>
  )
}

export default App

