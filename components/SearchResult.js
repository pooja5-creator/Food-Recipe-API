import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import './SearchCard.css'
import SearchCards from './SearchCards';
import { useStateTheme } from '../hooks/useStateComp'


export default function SearchResult() {
  const { searchTerm } = useParams();

  const  [isdark]=useStateTheme()
  const [meals, setMeals] = useState([]);
  
  useEffect(() => {
  
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchTerm}`)
      .then(res => res.json())
      .then((data) => {
        console.log(data.meals);
        setMeals(data.meals); 
      })
   
  }, [searchTerm]); 
  return (
    <main className={`${isdark?'dark':''}`}>
    <div className= 'SearchCardsContainer'>
     <h1><i>GET FOOD ACCORDING YOUR CHOICE!!!</i></h1>
    {
      meals.map((meal)=>{
        return <SearchCards
        name={meal.strMeal}
        image={meal.strMealThumb}
        id={meal.idMeal}
        key={meal.idMeal}
        data={meal}
        />
      })
    }
   
           
        
  </div>
  </main>
  )
}
