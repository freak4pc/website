import * as React from 'react'
import Link from 'gatsby-link'
import Page from '../components/page'
import { Text, Heading } from 'rebass'
import { Box, Flex } from 'grid-styled'
import styled from 'styled-components'
import OpenGraph from '../components/open-graph'

const Question = ({ data }) => {
  return (
    <Box my={3}>
      <Heading is="h2" fontSize={[3, 4]} mb={3}>
        {data.frontmatter.question}
      </Heading>
      <Text
        my={2}
        textAlign="left"
        dangerouslySetInnerHTML={{ __html: data.html }}
      />
    </Box>
  )
}

const FaqPage = ({ data }) => (
  <Page pb={[4, 4]}>
    <OpenGraph
      title="Frequently Asked Questions"
      description="Find answers to the most commonly asked questions"
    />
    <Heading is="h1" fontSize={[5, 6]} mb={2} mt={[4, 0]} textAlign="left">
      Frequently Asked Questions
    </Heading>
    {data.allMarkdownRemark.edges.map((edge, i) => {
      const question = edge.node
      return <Question data={question} key={i} />
    })}
  </Page>
)

export default FaqPage

export const faqQuery = graphql`
  query FaqQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [fileAbsolutePath] }
      filter: { fileAbsolutePath: { glob: "**/faq/*" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            question
          }
        }
      }
    }
  }
`
