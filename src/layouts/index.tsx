import * as React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import theme from '../components/theme'
import Header from '../components/header'
import { Flex } from 'grid-styled'

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <Flex flexDirection="column" flex="1 1 auto">
      <Helmet
        title={data.site.siteMetadata.title}
        link={[
          {
            href: 'https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab',
            rel: 'stylesheet',
          },
        ]}
        meta={[
          { name: 'description', content: 'xcbuddy - xcode at scale' },
          { name: 'keywords', content: 'xcode, swift, swift' },
        ]}
      >
        {/* <body style="margin: 0px;" /> */}
      </Helmet>
      <Header />
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
      siteMetadata {
        title
      }
    }
  }
`
