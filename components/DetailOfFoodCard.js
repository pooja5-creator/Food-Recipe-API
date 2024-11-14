import React from 'react'
import { useState,useEffect } from 'react'
import MotherChild from '../images/mother_child_photo-removebg-preview.png'
import '../App.css'

import { useParams } from 'react-router-dom'
import { useStateTheme } from '../hooks/useStateComp'
export default function DetailOfFoodCard() {
  const [isdark]=useStateTheme()
    const {detailOfFood}=useParams()
    const [food,setFood]=useState([])
    useEffect(()=>{ 
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${detailOfFood}`)
      .then(res=>res.json())
      .then((data)=>{
        // console.log(data.meals);
        setFood({
          name:data.meals[0].strMeal,
          image:data.meals[0].strMealThumb,
          instrction:data.meals[0].strInstructions,
          ingredient1:data.meals[0].strIngredient1,
          ingredient2:data.meals[0].strIngredient2,
          ingredient3:data.meals[0].strIngredient3,
          ingredient4:data.meals[0].strIngredient4,
          ingredient5:data.meals[0].strIngredient5,
          ingredient6:data.meals[0].strIngredient6,
          youTubelink:data.meals[0].strYoutube,
          recipesLink:data.meals[0].strSource
      
        })
      })
      },[])
  return (
    <main className={`${isdark?'dark':''}`}>
    <div className="third_page" >
    {food?<h2 style={{padding:'30px'}}>{food.name}</h2>:<p>Loading....</p> }
   <div className='card_imges'> {food? <img  src={food.image} alt="" />:<p>Loading....</p> }</div>
    
    <div className='image_box'> <div className='Mother_Img'><img src={MotherChild} alt="" /></div>
    <p><b style={{color:'red',fontSize:'20px'}}>Instruction:</b>{`${food.instrction}`}</p>
    </div>
    <p style={{color:'orange',fontSize:'20px'}}> Ingredients : {`${food.ingredient1}, 
    ${food.ingredient2}, ${food.ingredient3},
     ${food.ingredient4}, ${food.ingredient5}, ${food.ingredient6}`}
    </p>
     
     <a  href={food.recipesLink}>If You Want To See Recipes Please Click Here</a>
     <a  href={food.youTubelink}>If You Want To See Video Please Click Here</a>

    </div>
    </main>
  )
}
