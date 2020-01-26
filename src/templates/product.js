import React from "react"
import Layout from "../components/Layout/layout"
import {
  SingleProductContainer,
  SingleProduct,
  OkButton,
} from "../styles/productStyles"
import { ProductImage } from "../styles/productsStyles"
import { priceFormat } from "../utils/priceFormat"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  console.log(product)

  return (
    <Layout>
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
            <OkButton>Add to cart</OkButton>
          </div>
        </SingleProduct>
      </SingleProductContainer>
    </Layout>
  )
}

export default ProductTemplate
