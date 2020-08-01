module.exports = {
  siteMetadata: {
    title: `Jay Sella`,
    description: `Tech aficionado & web developer`,
    author: `@jays651`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/jaysella.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-svgr`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
