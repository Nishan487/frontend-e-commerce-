import React from 'react'
import { FcSearch } from "react-icons/fc";

import { useState } from 'react';
const Search = () => {
      const [searchTerm, setSearchTerm] = useState('');
   const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search products by title or category..." 
            className="search-input"
            value={searchTerm}
            onChange={handleSearchChange}
           
          />
          </div><FcSearch className='search-icon'/>
    </div>
  )
}

export default Search