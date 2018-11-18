module.exports = {
  siteMetadata: {
    title: 'Block Party Event Co.',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `zibnbjr0fmuz`,
        accessToken: `c0987dd00c3c38c8472fb821d29bbcc4d4bd0d8282b400589aa6fd0f3c272313`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'qol8ztn',
        },
      },
    },
  ],
}
