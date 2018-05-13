import * as React from 'react'
import { Flex, Box } from 'grid-styled'
import { Logo, NavButtons, NavIcons } from './header-items'

const BaseHeader = ({
  data,
  location,
  bg,
}: {
  data: any
  location: any
  bg?: string
}) => {
  return (
    <Flex bg={bg ? bg : 'blue'} flex="0 0 auto">
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

export default BaseHeader
