module.exports = {
  siteMetadata: {
    title: '🤖 xcbuddy · Scaling your Xcode projects',
    urls: {
      reference: 'https://xcbuddy.github.io/xcbuddy/',
      twitter: 'https://twitter.com/xcbuddyapp',
      github: 'https://github.com/xcbuddy',
      spectrum: 'https://spectrum.chat/xcbuddy',
      stackoverflow: 'https://stackoverflow.com/search?q=xcbuddy',
    },
    installScript:
      '/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/xcbuddy/xcbuddy/master/scripts/install)"',
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': `AuthorYaml`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    `gatsby-transformer-yaml`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/blog/`,
        name: 'articles',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/faq/`,
        name: 'faq',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/author.yml`,
        name: 'author',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
  ],
}
