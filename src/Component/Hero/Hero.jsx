import React from 'react'
import "./Hero.css"
import arrow_icon from "../Assest/Frontend_Assets/arrow.png"
import { Link } from "react-router-dom";
//import hero_image from "../Assest/Frontend_Assets/hero-image.png"
function Hero() {

  const phoneNumber = "94786160531"; 
  const message = encodeURIComponent("Hello! Can I get more information about your products?");
  return (
    <div className='Hero'>
       <div className='hero-left'>
        <h2>Welcome to Sky Fashion</h2>
        <div>
           <div className='hero-hand-icon'>
             <p>Discover the latest trends in fashion.</p>
            </div> 
            <p>Premium quality clothing for men.</p>
        </div>
        
        <Link to="/womens" className="hero-latest-btn">
    <div>Latest Collection</div>
    <img src={arrow_icon} alt="arrow_icon" />
</Link>



     <div className="whatsapp-container">
    <a 
      href={`https://wa.me/${phoneNumber}?text=${message}`} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <button className="whatsapp-b">
        Go to WhatsApp
      </button>
    </a>
   </div>
   


       </div>
       <div className='hero-right'>
         {/*<img src={hero_image} alt="hero_image"/>*/}
       </div>
    </div>
  )
}

export default Hero