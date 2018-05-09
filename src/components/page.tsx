import * as React from 'react'
import Link from 'gatsby-link'
import { Box, Flex } from 'grid-styled'
import styled from 'styled-components'

type PageProps = {
  children?: any
  pb?: any
  id?: any
}

export default class Page extends React.Component<PageProps> {
  render() {
    return (
      <Flex flexDirection="column" bg="grey" flex="1" id={this.props.id}>
        <Flex
          bg="white"
          mx={[2, 6]}
          pt={[4, 4]}
          pb={this.props.pb}
          px={[4, 5]}
          flex="1"
          flexDirection="column"
          alignItems="stretch"
        >
          {this.props.children}
        </Flex>
      </Flex>
    )
  }
}
