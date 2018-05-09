import * as React from 'react'
import { Flex, Box } from 'grid-styled'
import { Text } from 'rebass'
import { Logo, NavButtons, NavIcons } from './header-items'

const DocsHeader = ({ data, location }) => {
  return (
    <Flex bg="blue" flex="0 0 auto">
      <Flex
        flex="1 0 auto"
        flexDirection={['column', 'row']}
        alignItems={['center', 'center']}
      >
        <Box flex="1" />
        <Logo />
        <Text color="white">Documentation</Text>
        <Box flex="1" />
      </Flex>
    </Flex>
  )
}

export default DocsHeader
