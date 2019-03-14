import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const HeaderImage = () => (
  <StaticQuery
    query={graphql`
      query {
        headerImage: file(relativePath: { eq: "Skyscape_dark_long.png" }) {
          childImageSharp {
            fluid(maxWidth: 1701) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.headerImage.childImageSharp.fluid} />}
  />
)
export default HeaderImage
