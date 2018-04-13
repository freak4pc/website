import * as React from 'react'
import Link from 'gatsby-link'
import { Flex, Box } from 'grid-styled'
import { Toolbar, NavLink, Text, Badge } from 'rebass'
import styled from 'styled-components'
import color from 'styled-system'

const NavButton = styled(NavLink)`
  &:hover {
    opacity: 0.7;
    // color: ${props => props.theme.colors.complementary};
  }
`

const Header = () => {
  return (
    <Toolbar color="white" bg="dark">
      <Text>xcbuddy</Text>
      <Badge bg="main">0.1.0</Badge>
      <NavButton ml="auto">Docs</NavButton>
      <NavButton>Features</NavButton>
      <NavButton>Releases</NavButton>
      <NavButton>Contact</NavButton>
    </Toolbar>
  )
}
export default Header
