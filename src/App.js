import React, {useState, useRef} from 'react'

import Header from './components/header'
import CartDisplay from './components/cartDisplay'
import Product from './components/product'

import Data from './components/data/data'

const App = () => {
const [itemNo, setItemNo] = useState(0);
const [cart, setCart] = useState(Data);
const [show, setShow] = useState(false);


const modalRef = useRef(null);
const hRef = useRef(null);

const updateCart = (newCart) => { 
  setCart([...cart, newCart]);
}
const updateItemNo = (newItemNo) => {
  setItemNo([newItemNo]); 
}
const toggleModal = () => {
  setShow(!show);
}

  return (
    <main>
      <Header itemNo={itemNo} toggleModal={toggleModal}/>
      {show && <CartDisplay cart={cart} 
                            itemNo={itemNo} 
                            ref={modalRef}
      />}
      <Product cart={cart}
               updateCart={updateCart} 
               updateItemNo={updateItemNo}
      />
    </main>
  )
}

export default App
