import * as React from 'react'
import { Image, Text, Link } from 'rebass'
import { Flex, Box } from 'grid-styled'
import { withPrefix } from 'gatsby-link'
import styled from 'styled-components'

const HoverLink = styled(Link)`
  color: white;
  &:hover {
    color: ${props => props.theme.colors.green};
  }
`

const IconLink = ({ icon, url }) => {
  return (
    <HoverLink
      m={['6px', '0px']}
      className={`fab fa-${icon}`}
      style={{ color: 'white' }}
      href={url}
      target="_blank"
    />
  )
}

const Logo = () => {
  return (
    <Box m={15}>
      <HoverLink to="/">
        <Image
          alt="Logo"
          src={withPrefix('/logo.png')}
          height={[40, 25]}
          width={[40, 25]}
        />
      </HoverLink>
    </Box>
  )
}

const Button = ({ path, url, name, location }) => {
  let href: string
  if (path) {
    href = withPrefix(path)
  } else {
    href = url
  }
  return (
    <Flex
      mx={10}
      flexDirection="column"
      alignItems="stretch"
      justifyContent="center"
    >
      <HoverLink href={href}>
        <Text textAlign={['center', 'left']}>{name}</Text>
      </HoverLink>
      <Box
        mt={2}
        mb={['5px', '0px']}
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
      ml={['0px', '40px']}
      flex="1 1 auto"
      flexDirection={['column', 'row']}
      alignItems="stretch"
      justifyContent={['center', 'flex-start']}
      color="white"
    >
      <Button location={location} path={null} url={urls.docs} name="Docs" />
      <Button location={location} path="/blog" url={null} name="Blog" />
      <Button location={location} path="/faq" url={null} name="Faq" />
      <Button location={location} path="/releases" url={null} name="Releases" />
    </Flex>
  )
}

const NavIcons = ({ urls }) => {
  return (
    <Flex
      flex="0 0 80px"
      mr={15}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <IconLink icon="twitter" url={urls.twitter} />
      <IconLink icon="stack-overflow" url={urls.stackoverflow} />
      <IconLink icon="github" url={urls.github} />
    </Flex>
  )
}

const HomeHeader = () => {
  return <div />
}

const BaseHeader = ({ data, location }) => {
  return (
    <Flex bg="blue">
      <Flex
        flex="1 0 auto"
        flexDirection={['column', 'row']}
        alignItems={['center', 'center']}
      >
        <Logo />
        <NavButtons urls={data.siteMetadata.urls} location={location} />
        <NavIcons urls={data.siteMetadata.urls} />
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
