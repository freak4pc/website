import * as React from 'react'
import Link from 'gatsby-link'
import Page from '../components/page'
import { Text } from 'rebass'
import { Box, Flex } from 'grid-styled'
import { MainTitle, SecondaryTitle } from '../components/title'
import styled from 'styled-components'
import { themeGet } from 'styled-system'

const Question = ({ data }) => {
  return (
    <Box my={3}>
      <SecondaryTitle mb={3}>{data.frontmatter.question}</SecondaryTitle>
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
    <MainTitle mb={2} mt={[4, 0]} textAlign="left">
      Frequently Asked Questions
    </MainTitle>
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
      sort: { order: ASC, fields: [frontmatter___date] }
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
