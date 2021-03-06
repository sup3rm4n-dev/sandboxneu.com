module.exports = {
  siteMetadata: {
    title: `Sandbox | Northeastern's Student-Led Software Consultancy`,
    description: `Sandbox aims to unleash the power of software for researchers and students.`,
    author: `Sandbox at Northeastern`,
    pages: [
      {
        name: "Apply",
        route: "/apply",
      },
      {
        name: "Team",
        route: "/team",
      },
    ],
    siteUrl: "https://sandboxneu.com",
    image: "/stairs-down.png", // For embeds
    keywords: [
      `sandbox`,
      `neu`,
      `nu`,
      `northeastern`,
      `university`,
      `software`,
    ], // SEO
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sandbox`,
        short_name: `Sandbox`,
        start_url: `/`,
        background_color: `#2A426B`,
        theme_color: `#2A426B`,
        display: `minimal-ui`,
        icon: `src/images/sandbox-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-150918548-1`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
