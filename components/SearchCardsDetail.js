import React from 'react'
import { useLocation,  useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import './SearchCard.css'
import { Link } from 'react-router-dom';
import children from '../images/50994-removebg-preview.png'
import { useStateTheme } from '../hooks/useStateComp'
import { useStateTheme } from '../hooks/useStateComp';
export default function SearchCardsDetail() {
  const  [isdark]=useStateTheme()
    const {foodProduct}=useParams()

    
  const [foodData, setFoodData] = useState(null);

  
  useEffect(() => {
    
  
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodProduct}`)
      .then(res => res.json())
      .then((data) => {
        
        setFoodData({
          heading: data.meals[0].strMeal,
          image:data.meals[0].strMealThumb,
          instruction:data.meals[0].strInstructions,
          ingredients1:data.meals[0].strIngredient1,
          ingredients2:data.meals[0].strIngredient2,
          ingredients3:data.meals[0].strIngredient3,
          ingredients4:data.meals[0].strIngredient4,
          ingredients5:data.meals[0].strIngredient5,
          ingredients6:data.meals[0].strIngredient6,
          ingredients7:data.meals[0].strMeasure1,
          ingredients8:data.meals[0].strMeasure2,
          ingredients9:data.meals[0].strMeasure3,
          ingredients10:data.meals[0].strMeasure4,
          ingredients11:data.meals[0].strMeasure5,
          youtubeLink:data.meals[0].strYoutube,
          recipe:data.meals[0].strSource
    
       } ); 
        
      
      })
   
  }, [foodProduct]); 
  return (
    <main className={`${isdark?'dark':''}`}>
   
    <div className="Information">
       {foodData ? <h1>{foodData.heading}</h1> : <p>Loading...</p>}
 
     
     <div className="search_img">
      <div className="first_img">{foodData?<img src={foodData.image} alt="" />:<p>Loading...</p>}
       </div> 
       <div className='Second_img'>  <img src={children} alt="" />  </div>  
       </div> 
    
      
      {foodData?<h3><b>Instructions:</b>&nbsp;  {foodData.instruction} </h3>:<p>Loading...</p>}
      {foodData?<h3><b>Ingredients:</b>&nbsp;  {foodData.ingredients1}, {foodData.ingredients2}, {foodData.ingredients3},
       {foodData.ingredients4}, {foodData.ingredients5}, {foodData.ingredients6}
       </h3>:<p>Loading...</p>}
       
       {foodData? <Link to={foodData.youtubeLink}><h2 className="vedio_link">To Get Vedio  Please Click Here </h2></Link>: <p>Loading...</p> }
       {foodData? <Link to={foodData.recipe}><h2 className="vedio_link">If You Want To See Recipes Please Click Here</h2></Link>: <p>Loading...</p> }
     
    
      

    </div>
   
    </main>
  )
}
