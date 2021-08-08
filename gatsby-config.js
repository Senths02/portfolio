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
      }
    },
    'gatsby-transformer-json'
  ],
};
