import React from 'react'
import { ReactComponent as Navclose } from '../assets/images/icon-close.svg'


const navMobile = () => {
	return (
            <div className="nav-mobile">
              <button className="nav-close-btn">
                <Navclose />
              </button>
              <div className="navbar-mobile">
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
              </div>
            </div>
	)
}

export default navMobile