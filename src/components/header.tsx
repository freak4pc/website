import * as React from 'react'
import HomeHeader from './header/home-header'
import BaseHeader from './header/base-header'

const Header = ({ data, location }) => {
  console.log(location)
  if (location.pathname == '/') {
    return <HomeHeader data={data} location={location} />
  } else {
    return <BaseHeader data={data} location={location} />
  }
}

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
