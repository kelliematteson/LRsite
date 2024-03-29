require('dotenv').config()



module.exports = {
  
  siteMetadata: {
    title: `Leena Rao`,
    description: `A freelance writer, a fashionista, a peleton goddess and a Mom to 2 little girls. The juggle is real.`,

    author: `Kellie Matteson`,
    social: {
      twitter: `LeenaRao`,
      email: `leenakrao@gmail.com`,
      linkedin: `leena-rao-24221762`,
      facebook: `LeenaRao`,
      instagram: `leenarao`,
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: 'a4zfisgw',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      }
    },
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/leenaRao.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
