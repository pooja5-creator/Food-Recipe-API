import React, {  useState,useRef } from 'react'
import Header from './Header'
import Search from './Search'
import HeroContainer from './HeroContainer'
import FoodData from './FoodData'
import ExploreNow from './ExploreNow'
import '../App.css'


import { useStateTheme } from '../hooks/useStateComp'
export default function Home() {
 
 const  [isdark]=useStateTheme()
 const [showFoodData, setShowFoodData] = useState(false)   
 const foodDataRef = useRef(null)
 const handleShowFoodData = () => {
  setShowFoodData(true);
  setTimeout(() => {
    foodDataRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, 0); // Scroll smoothly after state update
};
  return (
    <main className={`${isdark?'dark':''}`}>
    <div>
    <Search></Search>
      <ExploreNow></ExploreNow>
      <HeroContainer setShowFoodData={handleShowFoodData}></HeroContainer>
      <div ref={foodDataRef}>
          {showFoodData && <FoodData />} {/* Conditionally render FoodData */}
        </div>
    </div>
    </main>
  )
}
