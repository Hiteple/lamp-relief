import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { CartContext } from "../../context"

import { HeaderContainer, Menu, Badge } from "./styles"

const Header = () => {
  const { cart } = useContext(CartContext)

  return (
    <HeaderContainer>
      <h1>
        <Link to="/">LampRelief</Link>
      </h1>
      <nav>
        <Menu>
          <li>
            <Link to="/products">Our lamps</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/" style={{ position: "relative" }}>
              Cart {cart.length > 0 && <Badge>{cart.length}</Badge>}
            </Link>
          </li>
        </Menu>
      </nav>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
