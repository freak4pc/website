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

const Links = () => {
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
      <FooterLink href="https://github.com/xcbuddy">GitHub</FooterLink>&nbsp;·&nbsp;
      <FooterLink>Twitter</FooterLink>&nbsp;·&nbsp;
      <FooterLink>Spectrum</FooterLink>&nbsp;·&nbsp;
      <FooterLink>Legal/Conduct</FooterLink>
    </Flex>
  )
}

const Footer = ({ data }) => {
  return (
    <Flex bg="darkblue" alignItems="stretch" flexDirection="row">
      <Flex m={15} flex="1 0 auto" flexDirection="row">
        <Logo />
        <Links />
      </Flex>
    </Flex>
  )
}

export default Footer
