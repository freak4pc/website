module.exports = {
  siteMetadata: {
    title: 'xcbuddy',
    titlePrefix: 'xcbuddy · ',
    siteUrl: 'https://xcbuddy.io',
    fbAppId: '2075203806032023',
    twitterHandle: '@xcbuddyapp',
    description:
      '🤖 An open source tool that helps you scale your projects and avoid the hassle and derivated issues of maintaining projects',
    urls: {
      reference: 'https://xcbuddy.github.io/xcbuddy/',
      twitter: 'https://twitter.com/xcbuddyapp',
      github: 'https://github.com/xcbuddy',
      spectrum: 'https://spectrum.chat/xcbuddy',
      stackoverflow: 'https://stackoverflow.com/search?q=xcbuddy',
      install: 'https://goo.gl/4cbZoL',
    },
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
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-copy-linked-files`,
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
        path: `./content/docs/`,
        name: 'docs',
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/legal.md`,
        name: 'legal',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-facebook-analytics`,
      options: {
        appId: 'UA-119164913-1',
        includeInDevelopment: false,
        debug: false,
        language: 'en_US',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: [],
      },
    },
  ],
}
