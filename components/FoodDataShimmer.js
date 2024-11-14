import React from 'react'
import './FoodDataShimmerStyle.css'
export default function ExploreShimmerEffect() {
  return (
    <div className='shimmerContainerOfFoodData'>
  {
    Array.from({length:100}).map((el,i)=>{
return <div className='foodDataShimmer'></div>
    })
  }
    </div>
  )
}
