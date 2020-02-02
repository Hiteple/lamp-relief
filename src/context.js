import React, { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addToCart = element => {
    // If cart is empty insert the item
    if (cart.length === 0) {
      element.quantity = 1
      setCart([...cart, element])
    } else {
      // If cart is not empty and the element already exists
      cart.forEach(item => {
        if (element.title === item.title) {
          element.quantity = element.quantity + 1
          setCart([...cart])
        } else {
          // If cart is not empty and the element is new
          element.quantity = 1
          setCart([...cart, element])
        }
      })
    }
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
