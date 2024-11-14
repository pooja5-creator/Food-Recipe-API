import React, { useState } from 'react'
import FoodCard from './FoodCard';
import { useState } from 'react';
import { useEffect } from 'react';
import ExploreNow from './ExploreNow';
import FoodDataShimmer from './FoodDataShimmer'
export default function FoodData() {
 const [food,setFood]=useState([])
 useEffect(()=>{ 
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
.then(res=>res.json())
.then((data)=>{
  console.log(data.meals);
  setFood(data.meals)
})
},[])
  return (
    <>
    <div className='tag'> <h1>MORE MEALS HERE...</h1>
    
      
    <div className='line'></div></div>
    {
      !food?<FoodDataShimmer/>:
    <div className='allFoodData'>
   
     {
    food.map((meal)=>{
      return <FoodCard
      key={meal.idMeal}
      meal={meal.strMeal}
      image={meal.strMealThumb}
      foodId={meal.idMeal}

      />
    
    })
  
  }
    </div>
}
</>
  )
}
