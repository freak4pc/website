import * as React from 'react'
import Link from 'gatsby-link'
import { Box, Flex } from 'grid-styled'
import styled from 'styled-components'

export default class Page extends React.Component {
  render() {
    return (
      <Flex
        flexDirection="column"
        bg="grey"
        alignItems="stretch"
        flex="1 0 auto"
      >
        <Box bg="white" mx={[0, 6]} p={[3, 4]} flex="1 0 auto">
          {this.props.children}
        </Box>
      </Flex>
    )
  }
}
