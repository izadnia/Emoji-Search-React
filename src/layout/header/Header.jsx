import React from 'react'
import Navbar from '../navbar/Navbar'
import './header.css'

function Header() {
  return (
    <div className='header'>
      <h3> Emoji Recommender </h3>
      <Navbar />
    </div>
  )
}

export default Header