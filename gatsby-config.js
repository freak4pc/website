module.exports = {
  siteMetadata: {
    title: '👩‍💻 xcbuddy | Xcode at scale',
    urls: {
      releases: 'https://github.com/xcbuddy/xcbuddy/releases',
      docs: 'https://xcbuddy.github.io/xcbuddy/',
      twitter: 'https://twitter.com/xcbuddyapp',
      github: 'https://github.com/xcbuddy',
      blog: 'https://medium.com/xcbuddy',
    },
    installScript:
      '/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/xcbuddy/xcbuddy/master/scripts/install)"',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-drift',
      options: {
        appId: 'bm7wiyev9zye',
      },
    },
  ],
}
