/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
const Layout = require("./src/components/Layout/layout").default
const { CartProvider } = require("./src/context")

exports.wrapRootElement = ({ element }) => {
  return (
    <CartProvider>
      <Layout>{element}</Layout>
    </CartProvider>
  )
}
