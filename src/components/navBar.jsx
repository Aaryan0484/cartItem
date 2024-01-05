import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import './navBar.css'
function navBar() {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to='/'>Shop</Link>
        <Link to='/cart'><ShoppingCart /></Link>
      </div>
      
    </div>
  )
}

export default navBar