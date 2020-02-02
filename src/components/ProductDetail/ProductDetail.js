import React, { useContext } from "react"
import { SingleProductContainer, SingleProduct, OkButton } from "./styles"
import { CartContext } from "../../context"
import { ProductImage } from "../../styles/productsStyles"
import { priceFormat } from "../../utils/priceFormat"

const ProductDetail = ({ product, sku }) => {
  const { addToCart } = useContext(CartContext)

  const handleSubmit = () => {
    product.sku = sku
    addToCart(product)
  }

  return (
    <>
      <SingleProductContainer>
        <SingleProduct>
          <ProductImage
            src={product.images[0].originalSrc}
            alt={product.handle}
          />
          <div>
            <h1>{product.title}</h1>
            <p style={{ fontSize: "40px" }}>
              ${priceFormat(product.variants[0].compareAtPrice)}
            </p>
            <p
              style={{
                fontSize: "30px",
                textDecoration: "line-through",
                color: "gray",
              }}
            >
              ${priceFormat(product.priceRange.minVariantPrice.amount)}
            </p>
            <p>{product.description}</p>
            <p>Weight: {product.variants[0].weight} Kg</p>
            <OkButton onClick={handleSubmit}>Add to cart</OkButton>
          </div>
        </SingleProduct>
      </SingleProductContainer>
    </>
  )
}

export default ProductDetail
