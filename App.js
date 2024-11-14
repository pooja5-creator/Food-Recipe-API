import React from 'react'
import Header from './components/Header'

import { ThemeContext } from '/context/ThemeContext'
import './App.css'
import { Outlet } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
export default function App() {
  const [isdark ,setdark]=useState(JSON.parse(localStorage.getItem('isDarkMode')))
 
  return (
    <ThemeContext.Provider value={[isdark, setdark]}>
    <Header />
    <Outlet  />
  </ThemeContext.Provider>
     
      
  )
}
