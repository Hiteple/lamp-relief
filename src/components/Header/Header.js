import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import { HeaderContainer, Menu } from "./styles"

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <nav>
      <Menu>
        <li>
          <Link to="/products">Our lamps</Link>
        </li>
        <li>
          <Link to="/">About us</Link>
        </li>
        <li>
          <Link to="/">Cart</Link>
        </li>
      </Menu>
    </nav>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
