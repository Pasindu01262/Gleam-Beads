import React from 'react'
import "./DscriptionBox.css"
import Reviews from '../Reviews/Reviews'
function DscriptionBox() {
  return (
<div className='discriptionbox'>
    <div className="descriptionbox-navigator">
     <div className="descriptionbox-nav-box">Description</div>
     <div className="descriptionbox-nav-box fade">Reviews (122)</div>
    </div>

    <div className="descriptionbox-description">
       <Reviews/>
    </div>
</div>
  )
}

export default DscriptionBox