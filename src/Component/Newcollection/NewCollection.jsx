import React from 'react';
import "./NewCollection.css";
import Item from '../Item/Item';
import new_collections from "../Assest/Frontend_Assets/new_collections";

function NewCollection() {
  return (
    <div className='new-collection'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className='collection'>
        {new_collections.map((item, i) => (
          <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
}

export default NewCollection;
