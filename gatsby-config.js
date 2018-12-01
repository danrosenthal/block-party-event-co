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
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api-useast.graphcms.com/v1/cjp5nuqb17xwx01g5cusav59j/master`,
        token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiZDBkYWNiZTQtY2I1MC00ZjhiLWIwMjUtZjBjZjIwYTZiMjY0In0.k1_NK1Gb4605auLKo23gqd_kzy3Go5nLl_JVRIC2vSk`,
        query: `{
            posts {
              status
              id
              createdAt
              updatedAt
              title
              description
              content
              featuredImage {
                url
              }
            }
        }`,
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
