import React, { useRef, useState, useContext } from 'react'
import "./Navbar.css"
import logo from "../Assest/Frontend_Assets/logo.png"
import cart_icon from "../Assest/Frontend_Assets/cart_icon.png"
import { Link } from 'react-router-dom';
import nav_dropdowm from "../Assest/Frontend_Assets/nav_dropdown.png"
import { ShopContext } from '../../Contex/ShopContext';

function Navbar() {
    const [menu,setmenu]=useState("Shop");
    const menuRef=useRef();
    const { getTotalCartItem } = useContext(ShopContext);

    const dropdown_toggle=(e)=>{
         menuRef.current.classList.toggle('nav-menu-visible');
         e.target.classList.toggle("open"); 
    }



     const phoneNumber = "94786160531"; 
  const message = encodeURIComponent("Hello! Can I get more information about your products? ");


  return (
    <div className='navbar'>
      <div className='nav-logo'>
          <img className='logo' src={logo} alt="logo"/>
          <p>SKY FASHION</p>
      </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdowm} alt='nav_dropdowm'/>
        <ul ref={menuRef} className='nav-menu'>
            <li  onClick={()=>{setmenu("Shop")}}>< Link to="/" style={{textDecoration:"none"}}>Shop</ Link>{menu==="Shop"? <hr/>: <></>}</li>
            {/*<li onClick={()=>{setmenu("Mens")}}>< Link to="/mens" style={{textDecoration:"none"}}>Men</ Link>{menu==="Mens"?<hr/>:<></>}</li>*/}
            <li onClick={()=>{setmenu("WoMens")}}><Link to="/womens" style={{textDecoration:"none"}}>Men</Link>{menu==="WoMens"?<hr/>:<></>}</li>
           {/* <li onClick={()=>{setmenu("Kids")}}><Link to="/kids" style={{textDecoration:"none"}}>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li> */}
           <li onClick={()=>{setmenu("Contact")}}>< Link to="/Contact" style={{textDecoration:"none"}}>Contact Us</ Link>{menu==="Contact"? <hr/>: <></>}</li>
           <li className='whatsapp-container'> <a  
      href={`https://wa.me/${phoneNumber}?text=${message}`} 
      target="_blank" 
      rel="noopener noreferrer">
      <button className="whatsapp">
        WhatsApp
      </button>
       </a></li>
      </ul>

        
        <div className='nav-login-cart'>
          <Link to="/cart"><img src={cart_icon} alt="cart_icon"/></Link>
          <div className='nav-cart-count'>{getTotalCartItem()}</div>
        </div>


    

    </div>
  )
}

export default Navbar
