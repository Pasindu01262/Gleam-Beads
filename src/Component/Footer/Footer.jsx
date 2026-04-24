import React from 'react'
import "./Footer.css"
import footer_logo from "../Assest/Frontend_Assets/logo_big.png"
import { Link } from 'react-router-dom';

function Footer() {

const phoneNumber = "94786160531"; 
  const message = encodeURIComponent("Hello! Can I get more information about your products?");

  return (
    <div className='footer'>
       <div className='footer-logo'>
        <img src={footer_logo} alt="footer_logo"/>
        <p>SKY FASHION</p>
       </div>
        <ul className='footer-links'>
      <li><Link to="/womens">Product</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
    </ul>
       <div className="whatsapp-container">
    <a 
      href={`https://wa.me/${phoneNumber}?text=${message}`} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <button className="whatsapp-btn">
        Go to WhatsApp
      </button>
    </a>
   </div>
         <div className='footer-copyright'>
            <hr/>
            {/*<p>Copyright @ 2023 - All Right Reserved</p>*/}
         </div>

    </div>
  )
}

export default Footer