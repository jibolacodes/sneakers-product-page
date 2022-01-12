import React, {useRef, useState, useEffect} from 'react'
import trash from '../assets/images/icon-delete.svg'

const CartDisplay = ({cart, itemNo}) => {
  const [getData, setGetData] = useState(0)
  
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  useEffect(() => {
    setGetData(() => {
      console.log(parseInt(itemNo));
      const newItemNo = parseInt(itemNo);
      if(newItemNo > 0) {
        refContainer.current.classList.remove('hide');
        divContainer.current.classList.add('hide');
      }else {
        refContainer.current.classList.add('hide');
        divContainer.current.classList.remove('hide');
      }
    })
  }, [itemNo])


  const deleteItem = () => {
    refContainer.current.classList.add('hide');
    divContainer.current.classList.remove('hide');
  }

	return (
    <section className="cart-container">      
		 <div className="cart-display">
        <div className="cart-title">
          <h2>Cart</h2>
        </div>
        <div className="border-line"></div>
        <div className="empty-message hide" ref={divContainer} >
  			  <p>Your cart is empty</p>
        </div>
          {
            cart.map((item)=> {
              const {id, title, price, thumbnail} = item;
              return (
            <section className="checkout-center" key={id} ref={refContainer}>
              <div className="checkout">
                 <div className="checkout-img">
                    <img src={require(`../${thumbnail}`)} alt="product-img" />
                </div>
                <div className="checkout-detail" >
                  <p>{`${title.substring(0, 20)}`}...</p>
                  <p>${price}.00 x {itemNo} <span>${price * itemNo}.00</span></p>
                </div> 
                <button className="trash-btn" onClick={deleteItem}>
                  <img src={trash} alt="trash" />
                </button>
              </div>
              <div className="btn-container">
                <button className="btn">checkout</button>
              </div>
            </section>
              )
            })
          }
      </div>
    </section>
	)
}

export default CartDisplay

