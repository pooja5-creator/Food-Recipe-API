import React from 'react'
import ExploreCard from './ExploreCard'
import { useState,useEffect } from 'react'
import '../App.css'
import ExploreShimmerEffect from './ExploreShimmerEffect'
export default function ExploreNow() {
    const [foodCard,setFoodCard]=useState([])
    useEffect(()=>{ 
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then(res=>res.json())
      .then((data)=>{
        // console.log(data);
     const arr=data.meals.slice(0,6)
     setFoodCard(arr)
      }
    )},[])
  return (
    <> { !foodCard?
      <ExploreShimmerEffect/>:

    <div className='circle_contain'>
<h1 className='explore_tag'>EXPLORE MORE</h1>
    <div className='explore'>
        
        {
            foodCard.map((mealCard)=>{
                return <ExploreCard
                key={mealCard.idMeal}
                image={mealCard.strMealThumb}
                heading={mealCard.strMeal}
                id={mealCard.idMeal}
                data={mealCard}
                />
            })
        } 
    </div>
    </div>
 } </>
  )
}
