import React from 'react'
import './Navbar.css'
import SearchBar from './SearchBar'
function Navbar() {
  return (
    <div className="Navbar">
      <a href="/" id="brand"> 
      <h1>Animal Hub</h1>
      <p>vos animo,notre passion</p>
      </a>  
      <SearchBar/>
    </div>
  )
}

export default Navbar