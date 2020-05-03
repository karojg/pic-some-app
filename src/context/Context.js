import React, { useState, useEffect } from 'react';

const Context = React.createContext();

const ContextProvider = ({children}) => {

  const cartItemsLocalStorage = JSON.parse(localStorage.getItem('cartItemsStored'))
  const favoriteItemsLocalStorage = JSON.parse(localStorage.getItem('favoriteItemsStored'))
  const [initialDat, setInitialData] = useState(favoriteItemsLocalStorage || [])
  const [allPhotos, setAllPhotos] = useState(favoriteItemsLocalStorage || initialDat)
  const [cartItems, setCartItems] = useState(cartItemsLocalStorage || [])

  const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setInitialData(data))
  }, [])

  const toggleFavorite = id => {
    const updatedArr = allPhotos.map(photo => {
      if (photo.id === id) {
        return {...photo, isFavorite: !photo.isFavorite}
      }
      return photo
    })
    setAllPhotos(updatedArr)
  }

  const addToCart = newItem => setCartItems(prevItems => [...prevItems, newItem])

  const removeFromCart = itemToRemove => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemToRemove.id))
  }

  const emptyCart = () => setCartItems([])

  useEffect(() => {
    localStorage.setItem('cartItemsStored', JSON.stringify(cartItems))
    localStorage.setItem('favoriteItemsStored', JSON.stringify(allPhotos))
  }, [cartItems, allPhotos])

  return (
    <Context.Provider value={
      {allPhotos,
      toggleFavorite,
      cartItems,
      addToCart,
      removeFromCart,
      emptyCart}}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
