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
          <Link to="/">Customer service</Link>
        </li>
        <li>
          <Link to="/">Terms of use</Link>
        </li>
        <li>
          <Link to="/">Privacy policy</Link>
        </li>
        <li>
          <Link to="/">Careers</Link>
        </li>
        <li>
          <Link to="/">About us</Link>
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
