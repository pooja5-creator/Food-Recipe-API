import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState(''); // State to track search input
  const navigate = useNavigate(); // Router navigate hook

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`); // Navigate to search results with the search term
    }
  };
  return (
    <div className='whole_search'>
    <div className='search_container '>
        <div className='inside_conatiner dark'>
       <span> <i  className="fa-sharp fa-solid fa-magnifying-glass"></i></span>
        <input  type="text" onClick={handleSearch} placeholder='Search 10,000 recipes...'
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
         onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
         />
        </div>
       
    </div>
    </div>
  )
}
