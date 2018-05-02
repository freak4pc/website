import * as React from 'react'
import { Image } from 'rebass'
import { Flex, Box } from 'grid-styled'
import Link, { withPrefix } from 'gatsby-link'
import styled from 'styled-components'

const Logo = () => {
  return (
    <Box display={['none', 'inherit']}>
      <Link to="/">
        <Image
          alt="Logo"
          src={withPrefix('/logo.png')}
          height={25}
          width={25}
        />
      </Link>
    </Box>
  )
}

const Button = ({ path, name }) => {
  return <Box mx={10}>{name}</Box>
}

const NavButtons = ({ urls, location }) => {
  return (
    <Flex
      display={['none', 'inherit']}
      ml={40}
      flex="1 1 auto"
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
      color="white"
    >
      <Button path={location.pathname} name="Docs" />
      <Button path={location.pathname} name="Blog" />
      <Button path={location.pathname} name="Faq" />
      <Button path={location.pathname} name="Releases" />
    </Flex>
  )
}

const HomeHeader = () => {
  return <div />
}

const BaseHeader = ({ data, location }) => {
  return (
    <Flex bg="blue" alignItems="stretch" flexDirection="row">
      <Flex m={15} flex="1 0 auto" flexDirection="row">
        <Logo />
        <NavButtons urls={data.siteMetadata.urls} location={location} />
      </Flex>
    </Flex>
  )
}

const Header = ({ data, location }) => {
  console.log(location)
  if (location.pathname == '/') {
    return <HomeHeader />
  } else {
    return <BaseHeader data={data} location={location} />
  }
}

export default Header

export const headerFragment = graphql`
  fragment HeaderSiteMetadata on Site {
    siteMetadata {
      urls {
        github
        twitter
        spectrum
      }
    }
  }
`
