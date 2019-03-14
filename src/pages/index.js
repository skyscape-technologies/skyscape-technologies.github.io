import React from "react"
import { IconContext } from "react-icons";
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

import Layout from "../components/layout"
import BodyImage from "../components/body-image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`artificial intelligence`, `machine learning`, `real estate`, `proptech`, `property`, `analytics`, `rooftop`, `roof`, `marketplace`, `geospatial`, `smart city`, `urban planning`, `airspace`, `computer vision`, `deep learning`, `uav`, `infrastructure`, `platform`]} />
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        boxSizing: `border-box`,
        flexGrow: 1,
        width: `100%`,
        maxWidth: `1548px`,
      }}
    >
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          justifyContent: `center`,
          flexGrow: 1,
        }}
      >
        <h1>Find out more</h1>
        <IconContext.Provider value={{ color: "white", size: `3em` }}>
          <a href="https://twitter.com/skyscapetech" className="btn-cta-orange" rel="noopener noreferrer" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/company/skyscape-technologies/" className="btn-cta-green" rel="noopener noreferrer" target="_blank">
            <FaLinkedin />
          </a>
        </IconContext.Provider>
      </div>
      <div
        style={{
          maxWidth: `1548px`,
        }}
      >
        <BodyImage />
      </div>
    </div>
  </Layout>
)

export default IndexPage
