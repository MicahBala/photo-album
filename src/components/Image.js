import React, { useContext, useState } from 'react'
import { PropTypes } from 'prop-types'
import { FaRegHeart, FaHeart, FaPlusCircle } from 'react-icons/fa'
import { BiCart } from 'react-icons/bi'
import { AppContext } from '../context/context'

function Image({ className, img }) {
  const { toggleFavorite, addToCart, removeFromCart, cartItems } =
    useContext(AppContext)
  const [hovered, setHovered] = useState(false)

  const heartIcon = () => {
    if (img.isFavorite) {
      return (
        <FaHeart
          className='heart-fill favorite'
          onClick={() => toggleFavorite(img.id)}
        />
      )
    } else if (hovered) {
      return (
        <FaRegHeart
          className='favorite'
          onClick={() => toggleFavorite(img.id)}
        />
      )
    }
  }

  const cartIcon = () => {
    const isItemInCart = cartItems.some((item) => item.id === img.id)
    if (isItemInCart) {
      return <BiCart className='cart' onClick={() => removeFromCart(img.id)} />
    } else if (hovered) {
      return <FaPlusCircle className='cart' onClick={() => addToCart(img)} />
    }
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseLeave={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
    >
      <img src={img.url} className='image-grid' alt='random portrait' />
      {heartIcon()}
      {cartIcon()}
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
}

export default Image
