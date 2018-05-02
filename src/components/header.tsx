import * as React from 'react'
import { Image } from 'rebass'
import { Flex, Box } from 'grid-styled'
import Link, { withPrefix } from 'gatsby-link'
import styled from 'styled-components'

const InternalLink = styled(Link)`
  color: white;
  &:hover {
    color: ${props => props.theme.colors.green};
  }
`
const ExternalLink = styled.a`
  color: white;
  &:hover {
    color: ${props => props.theme.colors.green};
  }
`

const Logo = () => {
  return (
    <Box m={15} display={['none', 'inherit']}>
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

const Button = ({ path, url, name, location }) => {
  return (
    <Flex
      mx={10}
      flexDirection="column"
      alignItems="stretch"
      justifyContent="center"
    >
      {path && <InternalLink to={path}>{name}</InternalLink>}
      {url && (
        <ExternalLink href={url} target="_blank">
          {name}
        </ExternalLink>
      )}
      <Box
        mt={2}
        bg="green"
        style={{
          visibility: path == location.pathname ? 'visible' : 'hidden',
        }}
        flex="0 0 3px"
      />
    </Flex>
  )
}

const NavButtons = ({ urls, location }) => {
  return (
    <Flex
      display={['none', 'inherit']}
      ml={40}
      flex="1 1 auto"
      flexDirection="row"
      alignItems="stretch"
      justifyContent="flex-start"
      color="white"
    >
      <Button location={location} path={null} url={urls.docs} name="Docs" />
      <Button location={location} path="/blog" url={null} name="Blog" />
      <Button location={location} path="/faq" url={null} name="Faq" />
      <Button location={location} path="/releases" url={null} name="Releases" />
    </Flex>
  )
}

const HomeHeader = () => {
  return <div />
}

const BaseHeader = ({ data, location }) => {
  return (
    <Flex bg="blue" alignItems="stretch" flexDirection="row">
      <Flex flex="1 0 auto" flexDirection="row">
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
        docs
        github
        twitter
        stackoverflow
      }
    }
  }
`
