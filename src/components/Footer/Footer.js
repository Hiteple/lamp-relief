import React from "react"
import { Link } from "gatsby"

import { FooterContainer } from "./styles"
import { Company, Contact, Media } from "./styles"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { GoMail } from "react-icons/go"

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <h2>Company</h2>
        <Company>
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
      </div>
      <div>
        <h2>Contact</h2>
        <Contact>
          <li>Email: lamprelief@tmail.com</li>
          <li>Telephone: 453-5464-7574</li>
          <li>Address: 1598 South Coast, CA 4646</li>
        </Contact>
      </div>
      <div>
        <h2 className="media-heading">Media</h2>
        <Media>
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
      </div>
    </FooterContainer>
  )
}
