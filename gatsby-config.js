// import dotenv from 'dotenv';

// dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `Leena Rao`,
    description: `A freelance writer, a fashionista, a peleton goddess and a Mom to 2 little girls. The juggle is real.`,
    author: `Kellie Matteson`,
    social: {
      twitter: `leenarao`,
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
        token: 'skW0sq9pzgcIxz6X3LAbsv458JityhLBJ8rdnrwPLUOhuFYjKnsTiIoLjoXdCF1rOvpDJdjSYBDLbvNxIjN6ta4FhXriJVaLNRCQoQKmsss2bAPfRBrNeEEnwKko6LnQzGTvIVUBevya1oTTI1POZai0Niy1LSGWCTllWsfKNsyg0bycdx7L',
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
