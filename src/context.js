import React, { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addToCart = element => {
    setCart([...cart, element])
  }

  const removeFromCart = element => {
    console.log(element)
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
