module.exports = {
  siteMetadata: {
    title: "Sumi Senthi",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project',
        path: './src/data'
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: './src/content'
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-line-breaks`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          }
        ]
      }
    },
    'gatsby-transformer-json',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /content/
        }
      }
    }
  ],
};
