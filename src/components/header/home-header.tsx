import * as React from 'react'
import { Flex, Box } from 'grid-styled'
import { Logo, NavButtons, NavIcons } from './header-items'

const gradientBackgroundStyle = {
  background:
    'linear-gradient(to bottom, #4690a2 0%,#264f5a 100%)' /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */,
  filter:
    "progid:DXImageTransform.Microsoft.gradient( startColorstr='#4690a2', endColorstr='#264f5a',GradientType=0 )" /* IE6-9 */,
}

const HomeHeader = ({ data, location }) => {
  return (
    <Flex style={{ ...gradientBackgroundStyle }} flexDirection="column">
      <Flex
        flex="1 0 auto"
        flexDirection={['column', 'row']}
        alignItems={['center', 'center']}
      >
        <Logo />
        <NavButtons urls={data.siteMetadata.urls} location={location} />
        <NavIcons urls={data.siteMetadata.urls} />
      </Flex>
      <Flex flex="1 0 auto" flexDirection="column" />
    </Flex>
  )
}

export default HomeHeader
