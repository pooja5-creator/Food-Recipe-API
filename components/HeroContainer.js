import React from 'react'
import FoodImage from '../images/hero-Image.webp'
import { Link } from 'react-router-dom'
export default function HeroContainer({setShowFoodData }) {
   
  return (
    <>
    <div className='image_container'>
        <div className='total_recipe'>
   <h1>42 QUICK & EASY FALL <br />DINNERS
   </h1>
   
            <button onClick={() => setShowFoodData(true)}>SEE THEM ALL..</button>
          
   </div>
   
    </div>
    </>
  )
}
