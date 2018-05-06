import * as React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import theme from '../components/theme'
import Header from '../components/header'
import Footer from '../components/footer'
import { Flex } from 'grid-styled'
import './index.css'
import './prism-theme.css'

const Layout = ({ children, data, location }) => (
  <ThemeProvider theme={theme}>
    <Flex style={{ height: '100%' }} flexDirection="column" flex="1 0 auto">
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>

        {/* STYLES */}
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

        {/* METADATA */}
        <meta name="description" content="xcbuddy - xcode at scale" />
        <meta name="keywords" content="xcode, swift, swift" />

        {/* FACEBOOK OPEN GRAPH */}
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta
          property="og:url"
          content={data.site.siteMetadata.siteUrl + location.pathname}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta
          property="og:description"
          content={data.site.siteMetadata.description}
        />
        <meta property="fb:app_id" content={data.site.siteMetadata.fbAppId} />
      </Helmet>
      <Header data={data.site} location={location} />
      <Flex flex="1 0 auto" alignItems="stretch">
        {children()}
      </Flex>
      <Footer data={data.site} />
    </Flex>
  </ThemeProvider>
)

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      ...HeaderSiteMetadata
      ...FooterSiteMetadata
      siteMetadata {
        title
        siteUrl
        description
        fbAppId
      }
    }
  }
`
