import * as React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import theme from '../components/theme'
import Header from '../components/header'
import { Flex } from 'grid-styled'

const globalStyle = `
  * {
    margin: 0px;
    font-family: Roboto, sans-serif;
  }
  a {
    all: unset;
  }
`

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <Flex flexDirection="column" flex="1 1 auto">
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <style type="text/css">{globalStyle}</style>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
          integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg"
          crossorigin="anonymous"
        />
        <meta name="description" content="xcbuddy - xcode at scale" />
        <meta name="keywords" content="xcode, swift, swift" />
      </Helmet>
      <Header data={data.site} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
    </Flex>
  </ThemeProvider>
)

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      ...HeaderSiteData
      siteMetadata {
        title
      }
    }
  }
`
