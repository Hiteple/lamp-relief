import React, { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addToCart = element => {
    element.quantity = 1
    setCart([...cart, element])
  }

  const removeFromCart = productIndex => {
    const cartToFilter = Object.assign([], cart)

    cartToFilter.splice(productIndex, 1)

    setCart(cartToFilter)
  }

  const toggleCart = () => {
    setIsOpen(!isOpen)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        isOpen,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
