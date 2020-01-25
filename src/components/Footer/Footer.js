import React from "react"
import { Link } from "gatsby"

import { FooterContainer } from "./styles"
import { Company, Contact, Media } from "./styles"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { GoMail } from "react-icons/go"

export const Footer = () => {
  return (
    <FooterContainer>
      <Company>
        <h2>Company</h2>
        <li>
          <Link to="/terms">Terms of service</Link>
        </li>
        <li>
          <Link to="/privacy-policy">Privacy policy</Link>
        </li>
        <li>
          <Link to="/refund-policy">Refund Policy</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
      </Company>
      <Contact>
        <h2>Contact</h2>
        <li>Email: lamprelief@tmail.com</li>
        <li>Telephone: 453-5464-7574</li>
        <li>Address: 1598 South Coast, CA 4646</li>
      </Contact>
      <Media>
        <h2>Media</h2>
        <li>
          <Link to="/">
            <FaFacebookF />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link to="/">
            <GoMail />
          </Link>
        </li>
      </Media>
    </FooterContainer>
  )
}
