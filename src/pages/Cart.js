import React, { useContext, useState } from 'react'
import { AppContext } from '../context/context'
import CartItem from '../components/CartItem'

function Cart() {
  const [btnOrder, setBtnOrder] = useState('Place Order')
  const { cartItems, emptyCart } = useContext(AppContext)
  const totalCost = 25.99 * cartItems.length
  const totalCostDisplay = totalCost.toLocaleString('en-US', {
    style: 'currency',
    currency: 'NGN',
  })

  function placeOrder() {
    if (cartItems.length === 0) {
      alert('Add items to cart first!')
      return
    }
    setBtnOrder('Ordering...')
    setTimeout(() => {
      setBtnOrder('Place Order')
      emptyCart()
      alert('Order placed!')
    }, 3000)
  }

  const cartElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ))
  return (
    <main className='cart-page'>
      <h1>Check out</h1>
      {cartElements}
      <p className='total-cost'>Total: {totalCostDisplay}</p>
      <hr />
      <div className='order-button'>
        {cartItems.length > 0 ? (
          <button onClick={placeOrder}>{btnOrder}</button>
        ) : (
          <p>No itmes in your cart</p>
        )}
      </div>
    </main>
  )
}

export default Cart
