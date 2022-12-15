import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GrCart } from 'react-icons/gr'
import { FaShoppingCart } from 'react-icons/fa'
import { AppContext } from '../context/context'

function Header() {
  const { cartItems } = useContext(AppContext)
  return (
    <header>
      <Link to='/'>
        <h2>Pic Some</h2>
      </Link>
      <Link to='/cart'>
        {cartItems.length > 0 ? (
          <FaShoppingCart className='cart-icon' />
        ) : (
          <GrCart className='cart-icon' />
        )}
      </Link>
    </header>
  )
}

export default Header
