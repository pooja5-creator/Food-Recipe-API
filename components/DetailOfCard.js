import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, useLocation,  useParams } from "react-router-dom";
import "./DetailOfCard.css";
import { useStateTheme } from "../hooks/useStateComp";

export default function DetailOfCard() {
 const [isdark]=useStateTheme()
  const { mealDetail } = useParams();
   const {state}=useLocation()
  const [food, setFood] = useState(null);
  function handleFetchData(data){
    const meal = data.meals ? data.meals[0] : data;
    if (meal) {
    setFood({
      heading: meal.strMeal,
      image: meal.strMealThumb,
      instruction: meal.strInstructions,
      ingredients1: meal.strIngredient1,
      ingredients2: meal.strIngredient2,
      ingredients3: meal.strIngredient3,
      ingredients4: meal.strIngredient4,
      ingredients5: meal.strIngredient5,
      ingredients6: meal.strIngredient6,
      ingredients7: meal.strMeasure1,
      ingredients8: meal.strMeasure2,
      ingredients9: meal.strMeasure3,
      ingredients10: meal.strMeasure4,
      ingredients11: meal.strMeasure5,
      youtubeLink: meal.strYoutube,
      recipe: meal.strSource,
    });
  }
  }
  useEffect(() => {
    if (state) {
      handleFetchData({ meals: [state] });
      return;
    }
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealDetail}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals[0].strMeal);
        handleFetchData(data);
      });
  }, [mealDetail, state]);
  return (
    <main className={`${isdark?'dark':''}`}>
    <div className="MainInformation">
      <div className="Main_img">
      {food ? <h1>{food.heading}</h1> : <p>Loading...</p>}
     <div className="img_cont">
      {food?<img src={food.image} alt="" />:<p>Loading...</p>}
      </div> 
      
      </div>
    
      {food?<h3><b>Instructions:</b>&nbsp;  {food.instruction} </h3>:<p>Loading...</p>}
      {food?<h3><b>Ingredients:</b>&nbsp;  {food.ingredients1}, {food.ingredients2}, {food.ingredients3},
       {food.ingredients4}, {food.ingredients5}, {food.ingredients6}
       </h3>:<p>Loading...</p>}
       
       {food? <Link to={food.youtubeLink}><h2 className="video">To Get Vedio  Please Click Here </h2></Link>: <p>Loading...</p> }
       {food? <Link to={food.recipe}><h2 className="vedio">If You Want To See Recipes Please Click Here</h2></Link>: <p>Loading...</p> }

    </div>
    </main>
  );
}
