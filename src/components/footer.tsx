import * as React from 'react'
import { Image, Link } from 'rebass'
import { Flex, Box } from 'grid-styled'
import { withPrefix } from 'gatsby-link'

const FooterLink = Link.extend`
  color: white;
  &:hover {
    color: ${props => props.theme.colors.green};
  }
`

const Logo = () => {
  return (
    <Box display={['none', 'inherit']}>
      <Image alt="Logo" src={withPrefix('/logo.png')} height={25} width={25} />
    </Box>
  )
}

const Links = ({ urls }) => {
  return (
    <Flex
      display={['none', 'inherit']}
      ml={10}
      flex="1 1 auto"
      fontSize={15}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      color="white"
    >
      <FooterLink href={urls.github} target="blank">
        GitHub
      </FooterLink>&nbsp;·&nbsp;
      <FooterLink href={urls.twitter} target="blank">
        Twitter
      </FooterLink>&nbsp;·&nbsp;
      <FooterLink href={urls.spectrum} target="blank">
        Spectrum
      </FooterLink>&nbsp;·&nbsp;
      <FooterLink>Legal/Conduct</FooterLink>
    </Flex>
  )
}

const Footer = ({ data }) => {
  return (
    <Flex bg="darkblue" alignItems="stretch" flexDirection="row">
      <Flex m={15} flex="1 0 auto" flexDirection="row">
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
