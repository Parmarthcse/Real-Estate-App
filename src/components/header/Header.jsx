import React from 'react'
import './Header.css';
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
 
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) =>{
    if(document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpened && '-100%'}
    }
  }
  return (
   <section className="h-wrapper" >
 <div className="flexCenter innerWidth paddings h-container">
   {/* logo */}
   <img src="./logo.png" alt="logo" width={100} />
<OutsideClickHandler
onOutsideClick={() => {
  setMenuOpened(false)
}}>
        <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <a href="#residencies">Residencies</a>
            <a href="#value">Our Value</a>
            <a href="#contact-us">Contact Us</a>
            <a href="#get-started">Get Started</a>
            <button className="button">
              <a href="mailto:Gambhirsujal24@gmail.com">Contact</a>
            </button>
          </div>
      </OutsideClickHandler>



        <div className='menu-icon' onClick={()=>setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30} />
      
        </div>
    </div>
 </section>
  )
}

export default Header