module.exports = {
  siteMetadata: {
    title: `Rooftop Analytics & Marketplace`,
    description: `Skyscape uses AI to analyse rooftops and identify opportunities to maximise their utilisation and address urban challenges.`,
    keywords: `artificial intelligence, machine learning, real estate, proptech, property, analytics, rooftop, roof, drones, marketplace, geospatial, smart city, urban,planning, airspace, computer vision, deep learning, uav, infrastructure, platform`,
    author: `@skyscape.global`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `holding-page`,
        short_name: `holding`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Skyscape_light_short.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
