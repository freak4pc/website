import * as React from 'react'
import { Text, Link, Image } from 'rebass'
import { Box, Flex } from 'grid-styled'
import styled from 'styled-components'
import Page from '../components/page'
import Title from '../components/title'
import theme from '../components/theme'
import { withPrefix } from 'gatsby-link'

const ArticleTitle = Title.extend`
  color: ${theme.colors.darkblue};
  font-weight: ${theme.fontWeights.bold}
  font-size: ${theme.fontSizes[4]};
`

const Article = () => {
  return (
    <Flex my={4} flexDirection="column" flex="1">
      <ArticleTitle textAlign={['center', 'left']}>
        This is the title
      </ArticleTitle>
      <Text
        style={{ fontStyle: 'italic' }}
        textAlign={['center', 'left']}
        color="darkgrey"
      >
        Published by Pedro two days ago
      </Text>
      <Text my={2} textAlign={['center', 'left']}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum…
      </Text>
      <Text textAlign={['center', 'left']} my={2} color="orange">
        Read more →
      </Text>
      {/* <Box bg="grey" flex="0 0 1px" mx={7} mb={3} /> */}
    </Flex>
  )
}

const BlogPage = () => (
  <Page>
    <Box>
      <Title mb={3} mt={[4, 0]} textAlign={['center', 'left']}>
        Blog
      </Title>
    </Box>
    <Article />
    <Article />
    <Article />
    <Article />
    <Image
      style={{ display: 'flex', alignSelf: 'center' }}
      alt="Coding"
      src={withPrefix('/coding.svg')}
      height={[150, 300]}
      width={[150, 300]}
    />
  </Page>
)

export default BlogPage
