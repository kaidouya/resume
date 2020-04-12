module.exports = {
  siteMetadata: {
    title: '品森的個人網站',
    author: 'Chao Pin Sen',
    description: '個人履歷網站，介紹並記錄著自己...',
  },
  plugins: [
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
    'gatsby-plugin-sass',
  ],
  pathPrefix: '/resume',
}
