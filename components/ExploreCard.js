import React from 'react'
import { Link } from 'react-router-dom'
import DetailOfCard from './DetailOfCard'
export default function ExploreCard({image,heading,id,data}) {
  return (
    <>
    <Link to={`/meal/${heading}`} state={data}>
    <div className='card_contain dark'>
    <div className='explore_card'><img src={image} alt="" /></div>
    <h3 className='dark'>{heading}</h3>
    </div>
    </Link>
    </>
  )
}
