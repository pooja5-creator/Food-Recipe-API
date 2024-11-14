import React from 'react'
import { Link } from 'react-router-dom'
import DetailOfFoodCard from './DetailOfFoodCard'

export default function FoodCard({meal,image,foodId}) {
  return (
    <Link to={`/food/${meal}`}>
    <div className='card dark'>
     <img src={image} alt="" />
  <h3>{meal}</h3>
    </div>
    </Link>
  )
}
