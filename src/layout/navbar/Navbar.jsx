import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


function Navbar() {
  return (
    <div className='nav'>
      <Link to={'/'}>
        <button > Hompage </button>    
      </Link>
      <Link to={'/list'}>
        <button> Source </button>    
      </Link>
    </div>
  )
}

export default Navbar