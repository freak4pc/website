import * as React from 'react'
import Link from 'gatsby-link'
import { Box, Flex } from 'grid-styled'
import styled from 'styled-components'

const Page = ({ children, pb }) => {
  return (
    <Flex flexDirection="column" bg="grey" flex="1">
      <Flex
        bg="white"
        mx={[2, 6]}
        pt={[4, 4]}
        pb={pb}
        px={[4, 5]}
        flex="1"
        flexDirection="column"
        alignItems="stretch"
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default Page
