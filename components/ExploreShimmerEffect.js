import React from 'react'
import './ExploreShimmer.css'
export default function ExploreShimmerEffect() {
  return (
    <div className='shimmerContainer'>
  {
    Array.from({length:6}).map((el,i)=>{
return <div className='ExploreShimmer'></div>
    })
  }
    </div>
  )
}
