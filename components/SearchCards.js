import React from 'react'
import './SearchCard.css'
import { Link, useOutletContext } from 'react-router-dom'
export default function SearchCards({name,image,id,data}) {
  
  return (
    
    <Link to={`/food-product/${id}`}  >
      
    <div className='Cards'>
        <img src={image} alt="" />
   <h3>{name}</h3>
   <div className='overlay'><h2>Click Me</h2></div>
    </div>
  
    </Link>
   
  )
}
