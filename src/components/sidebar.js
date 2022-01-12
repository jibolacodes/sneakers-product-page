import React, { useState } from 'react'

import Links from './data/links'
import Navbar from './navbar'
import { ReactComponent as CloseBtn } from '../assets/images/icon-close.svg'

const Sidebar = () => {
  const [links, setLinks] = useState(Links);
  const [sidebar, setSidebar] = useState(false);
 
  return ( 
    <>
      <div className={sidebar ? 'close-item' : 'sidebar'}>
        <div className="sidebar-btn" onClick={()=>setSidebar(!sidebar)}>
          <CloseBtn />
        </div>
          <div className="sidebar-center">
            {
              links.map((link) => {
                const {id, name, url} = link;
                  return(
                    <ul key={id}>
                      <a href={url}>
                        <li>{name}</li>
                      </a>
                    </ul>
                  )
                }
              )
            }
          </div>
      </div> 
    </>          
  )
}

export default Sidebar;

