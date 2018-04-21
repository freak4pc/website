import * as React from 'react'
import { Flex, Box } from 'grid-styled'
import { Toolbar, NavLink, Link, Text, Badge } from 'rebass'
import styled from 'styled-components'
import color from 'styled-system'

const NavButton = styled(NavLink)`
  &:hover {
    opacity: 0.7;
    // color: ${props => props.theme.colors.complementary};
  }
`
const CopyButton = styled(Link)`
  border-radius: 3px;
  background-color: ${props => props.theme.colors.secondary}
  &:hover {
    opacity: 0.7;
  }
`

const Header = ({ data }) => (
  <Flex flexDirection="column" bg="main">
    <Toolbar color="white" bg="none">
      <Text>xcbuddy</Text>
      <Badge bg="main">0.1.0</Badge>
      <NavButton ml="auto" href={data.siteMetadata.urls.docs} target="blank">
        Docs
      </NavButton>
      <NavButton>Blog</NavButton>
      <NavButton>Faq</NavButton>
      <NavButton href={data.siteMetadata.urls.releases} target="blank">
        Releases
      </NavButton>
    </Toolbar>
    <Box style={{ height: '200px' }} />
    <Toolbar color="white" bg="dark">
      <Text ml="auto">Install: </Text>
      <Text ml={10} mr={10} style={{ opacity: 0.7 }}>
        {data.siteMetadata.installScript}
      </Text>
      <CopyButton mr="auto">
        <Text className="far fa-copy" mx="6px" my="5px" />
      </CopyButton>
    </Toolbar>
  </Flex>
)

export default Header

export const headerFragment = graphql`
  fragment HeaderSiteData on Site {
    siteMetadata {
      installScript
      urls {
        releases
        docs
      }
    }
  }
`
