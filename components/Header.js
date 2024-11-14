import React, {  useState } from 'react'
import mans from '../images/Happy_Girl(2).png'
import { useStateTheme } from '../hooks/useStateComp'



export default function Header() {
  const [isdark,setdark]= useStateTheme()
 
  return (
  <>
    <header className={`${isdark?'dark':''}`} >
      <div  className='header_sec'>
        <h1>Food.</h1>
        <p className='health'>HEALTHY & POPULAR </p>
        <span><img className='girl_image' src={mans} alt="" /></span>
        
        <p onClick={() => {setdark(!isdark)
            localStorage.setItem('isDarkMode', !isdark)
        }}>  <i className={`fa-regular fa-${isdark?'moon':'sun'}`}></i> &nbsp;
         {`${isdark?'Dark':'Light'} Mode`}
      
        </p>
        </div>
    </header>
    
    
    </>
  )
}
