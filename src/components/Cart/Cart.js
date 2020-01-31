import React, { useContext } from "react"
import { CartContext } from "../../context"
import { priceFormat } from "../../utils/priceFormat"
import { CartContainer, CartItems, Item, ItemImage } from "./styles"

const Cart = () => {
  let total
  const { cart, removeFromCart } = useContext(CartContext)

  const getTotals = () => {
    if (cart.length > 0) {
      const prices = cart.map(price => price.variants[0].compareAtPrice)

      total = prices.reduce((acum, val) => parseInt(acum) + parseInt(val))
    }
  }

  const handleRemoveFromCart = index => {
    removeFromCart(index)
  }

  getTotals()

  return (
    <>
      <CartContainer>
        <CartItems>
          {cart.length === 0 && (
            <div className="cartEmpty">
              <h4>It seems your cart is empty :(</h4>
              <p>Check out our lamps to add something here!</p>
            </div>
          )}
          {cart.map((item, index) => {
            return (
              <div
                key={index}
                style={{ border: "1px solid #00cec9", margin: "20px 0" }}
              >
                <Item>
                  <div>
                    <h4>{item.title}</h4>
                    <p>${priceFormat(item.variants[0].compareAtPrice)}</p>
                  </div>
                  <button onClick={handleRemoveFromCart.bind(this, index)}>
                    Remove
                  </button>
                </Item>
                <ItemImage url={item.images[0].originalSrc} />
              </div>
            )
          })}
        </CartItems>
        {cart.length > 0 && (
          <>
            <p className="total">Total: ${priceFormat(total)}</p>
            <button className="checkout">Proceed to checkout</button>
          </>
        )}
      </CartContainer>
    </>
  )
}

export default Cart
