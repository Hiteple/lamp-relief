/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import Header from "../Header/Header"
import Cart from "../Cart/Cart"
import { CartContext } from "../../context"
import { Footer } from "../Footer/Footer"
import "./layout.css"

const Layout = ({ children }) => {
  const { isOpen } = useContext(CartContext)
  return (
    <>
      {isOpen && <Cart></Cart>}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
