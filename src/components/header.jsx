import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteDescription }) => (
  <header
    style={{
      height:`1.5rem`,
      
      background: `black`,
      marginBottom: `0`,
    }}
  >
    <div
      style={{
        margin: `.1rem 0`,
        maxWidth: 960,
        padding: `0 1.0875rem`,
      }}
    >
      <p style={{ margin: 0,  color: `white`,}}>
        <Link
          to="/"
          style={{ 
            color: `white`,           
            textDecoration: `none`,
            fontSize: `1rem`,
           
          }}
        >
          {siteTitle}-         
        </Link>
        {siteDescription}
      </p>
      {/* <p style={{
            color: `white`,
           }}
        >
          {siteDescription}
        </p> */}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
