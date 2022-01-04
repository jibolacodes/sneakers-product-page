import React from 'react'
import logo from '../assets/images/logo.svg'
import cart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import hamburger from '../assets/images/icon-menu.svg'

const Header = () => {
	return (
		<>
			<header>
		        <div className="navbar">
		          <div className="hamburger">
		       		<img src={hamburger} alt="" />
		       	</div>
		          <div className="logo-img">
		            <img src={logo} alt="logo" />  
		          </div>
		          <nav>
		            <ul>
		              <a href="#collections">
		                <li>collections</li>
		              </a>
		              <a href="#collections">
		                <li>men</li>
		              </a>
		              <a href="#collections">
		                <li>women</li>
		              </a>
		              <a href="#collections">
		                <li>about</li>
		              </a>
		              <a href="#collections">
		                <li>contact</li>
		              </a>
		            </ul>
		          </nav>
		        </div>
		        <div className="cart-order">
		          <div className="cart">
		            <img src={cart} alt="cart-icon" />
		            <span className="total">3</span>
		          </div>
		          <div>
		            <a href="#person">
		              <img className="person-img" src={avatar} alt="avatar" />
		            </a>   
		          </div>
		        </div>
		     </header>
		     <div className="border-line"></div>
		</>
	)
}

export default Header