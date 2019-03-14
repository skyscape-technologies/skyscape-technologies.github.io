import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Flex, Box } from "rebass"

import HeaderImage from "./header-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#424958`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Flex
        alignItems='center'
        flexWrap='wrap'
      >
        <Box
          width={[1, 1/2, 1/4, 1/4]}
          pr={4}
        >
          <HeaderImage />
        </Box>
        <Box
          width={[1, 1/2, 3/4, 3/4]}
        >
          <h2 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
                float: `right`,
              }}
            >
              {siteTitle}
            </Link>
          </h2>
        </Box>
      </Flex>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
