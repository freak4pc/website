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

const Links = ({ urls }) => {
  return (
    <Flex
      ml={2}
      my={[3, 0]}
      flex="1 1 auto"
      fontSize={15}
      flexDirection={['column', 'row']}
      alignItems="center"
      justifyContent="center"
      color="white"
    >
      <ExternalLink href={urls.github} target="_blank">
        GitHub
      </ExternalLink>
      <Box color={['darkblue', 'white']}>&ensp;·&ensp;</Box>
      <ExternalLink href={urls.twitter} target="_blank">
        Twitter
      </ExternalLink>
      <Box color={['darkblue', 'white']}>&ensp;·&ensp;</Box>
      <ExternalLink href={urls.spectrum} target="_blank">
        Spectrum
      </ExternalLink>
      <Box color={['darkblue', 'white']}>&ensp;·&ensp;</Box>

      <InternalLink to="/legal">Legal/Conduct</InternalLink>
    </Flex>
  )
}

const Footer = ({ data }) => {
  return (
    <Flex
      bg="darkblue"
      alignItems="stretch"
      flexDirection="row"
      flex="0 0 auto"
    >
      <Flex
        m={15}
        flex="1 0 auto"
        flexDirection={['column', 'row']}
        alignItems={['center', 'flex-start']}
      >
        <Logo />
        <Links urls={data.siteMetadata.urls} />
      </Flex>
    </Flex>
  )
}

export default Footer

export const footerFragment = graphql`
  fragment FooterSiteMetadata on Site {
    siteMetadata {
      urls {
        github
        twitter
        spectrum
      }
    }
  }
`
