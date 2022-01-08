import React, {useState, useEffect} from 'react'

// Pages
import Header from './components/header'
import CartDisplay from './components/cartDisplay'
import Product from './components/product'
import Form from './components/form'
import ProductModal from './components/productModal'

import Data from './components/data/data'

const App = () => {
const [itemNo, setItemNo] = useState(0);
const [cart, setCart] = useState(Data)

const updateCart = (newCart) => { 
  setCart([...cart, newCart]);
}
const updateItemNo = (newItemNo) => {
  setItemNo([newItemNo]); 
}

  return (
    <main>
      <Header itemNo={itemNo}/>
      <CartDisplay cart={cart} itemNo={itemNo}/>
      <Product cart={cart}/>
      <Form updateCart={updateCart} updateItemNo={updateItemNo}/>
    </main>
  )
}

export default App
