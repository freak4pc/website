import * as React from 'react'
import { Text, Image, Heading } from 'rebass'
import { Box, Flex } from 'grid-styled'
import styled from 'styled-components'
import Page from '../components/page'
import theme from '../components/theme'
import Link, { withPrefix } from 'gatsby-link'
import timeago from 'timeago.js'
import OpenGraph from '../components/open-graph'

const Article = ({ data }) => {
  return (
    <Flex my={3} flexDirection="column" flex="1">
      <Link to={data.fields.slug}>
        <Heading
          is="h2"
          fontSize={[3, 4]}
          mb={3}
          textAlign={['center', 'left']}
        >
          {data.frontmatter.title}
        </Heading>
      </Link>
      <Text
        style={{ fontStyle: 'italic' }}
        textAlign={['center', 'left']}
        color="darkgrey"
      >
        Published by {data.frontmatter.author.name}{' '}
        {timeago().format(data.frontmatter.date)}
      </Text>
      <Text
        my={2}
        textAlign={['center', 'left']}
        dangerouslySetInnerHTML={{ __html: data.excerpt }}
      />
      <Link to={data.fields.slug}>
        <Text textAlign={['center', 'left']} my={2} color="orange">
          Read more →
        </Text>
      </Link>
      <Box bg="grey" flex="0 0 1px" mx={3} mt={3} />
    </Flex>
  )
}

const BlogPage = ({ data }) => (
  <Page pb={[0, 0]}>
    <OpenGraph
      title="Blog"
      description="Read the latest news about the xcbuddy project"
    />
    <Flex flex="1" flexDirection="column">
      <Box flex="0 0 auto">
        <Box>
          <Heading
            is="h1"
            fontSize={[5, 6]}
            mb={2}
            textAlign={['center', 'left']}
          >
            Blog
          </Heading>
        </Box>
        {data.allMarkdownRemark.edges.map((edge, i) => {
          return <Article data={edge.node} key={i} />
        })}
      </Box>
      <Flex flex="1 0 auto" flexDirection="column" justifyContent="flex-end">
        <Image
          style={{ display: 'flex', alignSelf: 'center' }}
          alt="Coding"
          src={withPrefix('/coding.svg')}
          height={[150, 300]}
          width={[150, 300]}
        />
      </Flex>
    </Flex>
  </Page>
)

export default BlogPage

export const blogQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { glob: "**/blog/*" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 280)
          frontmatter {
            title
            date
            author {
              name
              twitter
              github
              avatar_url
            }
          }
        }
      }
    }
  }
`
