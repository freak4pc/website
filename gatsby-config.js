module.exports = {
  siteMetadata: {
    title: `Tuist - Xcode at scale`,
    description: `Tuist is a tool that helps developers manage large Xcode projects by leveraging
    project generation. Moreover, it provides some tools to automate most common tasks, allowing
    developers to focus on building apps.`,
    author: `@tuist`,
    siteUrl: "https://tuist.io/",
    githubUrl: "https://github.com/tuist",
    releasesUrl: "https://github.com/tuist/tuist/releases",
    documentationUrl: "https://github.com/tuist/tuist/tree/master/docs",
    slackUrl: "http://slack.tuist.io/"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: []
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/markdown`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
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
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./static/favicon.png",
        appName: "Tuist",
        appDescription:
          "Bootstrap, maintain, and interact with Xcode projects at any scale",
        developerName: "Pedro Piñera",
        developerURL: "https://ppinera.es",
        dir: "auto",
        lang: "en-US",
        background: "#fff",
        theme_color: "#fff",
        display: "standalone",
        orientation: "any",
        version: "1.0",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: `gatsby-remark-social-cards`,
      options: {
        title: {
          field: "title",
          font: "DejaVuSansCondensed",
          color: "white",
          size: 48,
          style: "bold",
          x: null,
          y: null
        },
        meta: {
          parts: ["Tuist"],
          font: "DejaVuSansCondensed",
          color: "white",
          size: 24,
          style: "normal",
          x: null,
          y: null
        },
        background: "#12344F",
        xMargin: 24,
        yMargin: 24
      }
    }
  ]
};
