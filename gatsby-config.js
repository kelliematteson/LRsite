require('dotenv').config()



module.exports = {
  
  siteMetadata: {
    title: `Leena Rao`,
    description: `A freelance writer, a fashionista, a peleton goddess and a Mom to 2 little girls. The juggle is real. Elizabeth Holmes is a New York Times best-selling author and veteran multimedia reporter. Her first book, HRH: So Many Thoughts on Royal Style, debuted on the New York Times best-seller list in November 2020. The Financial Times called it “a smooth, entertaining read fizzing with insight.” 

    A contributing editor at Town & Country, Elizabeth’s work has appeared in a host of national outlets, including The New York Times, The Wall Street Journal, Vanity Fair, Real Simple, and InStyle. She is also the creator of the Webby-honored Instagram Stories series “So Many Thoughts,” which offers sartorial commentary on the royal family. `,
    
    
    author: `Kellie Matteson`,
    social: {
      twitter: `LeenaRao`,
      email: `leenakrao@gmail.com`,
      linkedin: `in/leena-rao`,
      facebook: `facebook.com/LeenaRao`,
      instagram: `@leenarao`,
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
