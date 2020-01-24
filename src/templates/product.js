import React from "react"
import Layout from "../components/Layout/layout"
import { SingleProductContainer, SingleProduct } from "../styles/productStyles"
import { ProductImage } from "../styles/productsStyles"

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
            <p>{product.description}</p>
          </div>
        </SingleProduct>
      </SingleProductContainer>
    </Layout>
  )
}

export default ProductTemplate
