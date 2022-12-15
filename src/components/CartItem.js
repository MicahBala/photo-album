import React, { useContext, useState } from 'react'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { AppContext } from '../context/context'
import { PropTypes } from 'prop-types'

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(AppContext)
  const [hovered, setHovered] = useState(false)

  const cssClassName = hovered ? 'delete-bin-colored' : 'delete-bin'

  return (
    <div className='cart-item'>
      <RiDeleteBin6Fill
        className={cssClassName}
        onClick={() => removeFromCart(item.id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <img src={item.url} width='130px' alt='random pics' />
      <p>$25.99</p>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
}

export default CartItem
