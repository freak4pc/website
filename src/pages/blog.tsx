import * as React from 'react'
import { Text, Link } from 'rebass'
import { Box, Flex } from 'grid-styled'
import styled from 'styled-components'
import Page from '../components/page'
import Title from '../components/title'
import theme from '../components/theme'

const ArticleTitle = Title.extend`
  color: ${theme.colors.darkblue};
  font-weight: ${theme.fontWeights.bold}
  font-size: ${theme.fontSizes[4]};
`

const Article = () => {
  return (
    <Flex my={4} flexDirection="column">
      <ArticleTitle textAlign={['center', 'left']}>
        This is the title
      </ArticleTitle>
      <Text
        style={{ fontStyle: 'italic' }}
        textAlign={['center', 'left']}
        my={2}
        color="darkgrey"
      >
        Published by Pedro two days ago
      </Text>
      <Text
        textAlign={['center', 'left']}
        flex="1 1 0"
        flexWrap="nowrap"
        minHeight="0px"
      >
        Content
      </Text>
      <Text textAlign={['center', 'left']} my={2} color="orange">
        Read more →
      </Text>
      <Box bg="grey" flex="0 0 1px" mx={7} mb={3} />
    </Flex>
  )
}

const BlogPage = () => (
  <Page>
    <Title mb={3} mt={[4, 0]} textAlign={['center', 'left']}>
      Blog
    </Title>
    <Article />
    <Article />
    <Article />
    <Article />
  </Page>
)

export default BlogPage
