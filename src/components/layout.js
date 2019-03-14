/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div
          style={{
            minHeight: `100vh`,
            display: `flex`,
            flexGrow: 1,
          }}
        >
          <div
            style={{
              display: `flex`,
              flexDirection: `column`,
              flexGrow: 1,
            }}
          >
              <Header siteTitle={data.site.siteMetadata.title} />
              <main
                style={{
                  display: `flex`,
                  flexDirection: `column`,
                  flexGrow: 1,
                  alignItems: `center`,
                }}
              >
                {children}
              </main>
              <footer
                className="bottom"
                style={{
                  backgroundColor: `#021729`,
                  color: `white`,
                }}
              >
                <ul>
                  <li>SKYSCAPE TECHNOLOGIES LTD, Sutton Yard, 4th Floor, 65 Goswell Road, London, EC1V 7EN, E: HELLO@SKYSCAPE.GLOBAL</li>
                  <li>© 2019 Skyscape Technologies LTD. Registered Company Number 10835962.</li>
                </ul>
              </footer>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
