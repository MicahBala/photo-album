import React, { useState, useEffect } from 'react'

const AppContext = React.createContext()

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])

  const url =
    'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data))
  }, [])

  function emptyCart() {
    setCartItems([])
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  function addToCart(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem])
  }

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite }
      }
      return photo
    })

    setAllPhotos(updatedArr)
  }

  console.log(cartItems)

  return (
    <AppContext.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addToCart,
        removeFromCart,
        cartItems,
        emptyCart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { ContextProvider, AppContext }
