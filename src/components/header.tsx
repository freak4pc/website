import * as React from 'react'
import HomeHeader from './header/home-header'
import BaseHeader from './header/base-header'
import DocsHeader from './header/docs-header'

const Header = ({ data, location }) => {
  if (location.pathname == '/') {
    return <HomeHeader data={data} location={location} />
  } else if (location.pathname == '/docs') {
    return <DocsHeader data={data} location={location} />
  } else {
    return <BaseHeader data={data} location={location} />
  }
}

// DocsHeader

export default Header

export const headerFragment = graphql`
  fragment HeaderSiteMetadata on Site {
    siteMetadata {
      urls {
        reference
        github
        twitter
        stackoverflow
      }
    }
  }
`
