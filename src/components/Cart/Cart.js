import React, { useContext } from "react"
import { CartContext } from "../../context"
import { CartContainer, CartItems, Item, ItemImage } from "./styles"

const Cart = () => {
  let total
  const { cart } = useContext(CartContext)

  const getTotals = () => {
    if (cart.length > 0) {
      const prices = cart.map(price => price.variants[0].compareAtPrice)

      total = prices.reduce((acum, val) => parseInt(acum) + parseInt(val))
    }
  }

  getTotals()

  return (
    <>
      <CartContainer>
        <CartItems>
          {cart.length === 0 && (
            <div>
              <h4>It seems your cart is empty :(</h4>
              <p>Check out our lamps to add something here!</p>
            </div>
          )}
          {cart.map(item => {
            return (
              <div style={{ border: "1px solid #00cec9", margin: "20px 0" }}>
                <Item key={item.title}>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.variants[0].compareAtPrice}</p>
                  </div>
                  <button>Remove</button>
                </Item>
                <ItemImage key={item.handle} url={item.images[0].originalSrc} />
              </div>
            )
          })}
        </CartItems>
        {cart.length > 0 && <p>Total: ${total}</p>}
      </CartContainer>
    </>
  )
}

export default Cart
