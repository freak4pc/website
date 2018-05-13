import * as React from 'react'
import OpenGraph from '../components/open-graph'
import Page from '../components/page'
import { pageQuery } from '../templates/blog-post';
import { Box, Flex } from 'grid-styled'
import { Text, Image } from 'rebass'
import Link, { withPrefix } from 'gatsby-link'
import { MainTitle, SecondaryTitle } from '../components/title'
import * as _ from "lodash"

const sectionTitles = {
  "basics": "Basics",
  "advanced": "Advanced"
}

const DocsSection = ({ id, pages }: { id: string, pages: any }) => {
  return <Box>
    <SecondaryTitle>{sectionTitles[id]}</SecondaryTitle>
    {pages.map((page) => {
      return <Box>
        <Link to={page.fields.slug}>
          <Text my={2} color="orange">
            {page.frontmatter.title}
          </Text>
        </Link>
      </Box>
    })}
  </Box>
}

const DocsPage = ({ data }) => {
  let sections = _.groupBy(data.allMarkdownRemark.edges.map((edge) => edge.node), 'frontmatter.section')

  return <Page pb={[0, 0]}>
    <OpenGraph
      title="Documentation"
      description="Learn how to use xcbuddy with a bunch of useful documentation resources."
    />
    <Flex flex="1" flexDirection="column">
      <Box flex="0 0 auto">
        <Box>
          <MainTitle mb={2} textAlign={['center', 'left']}>
            Documentation
          </MainTitle>
        </Box>
      </Box>
      {_.map(sections, (pages, id) => <DocsSection id={id} pages={pages} />)}
      <Flex flex="1 0 auto" flexDirection="column" justifyContent="flex-end">
        <Image
          style={{ display: 'flex', alignSelf: 'center' }}
          alt="Checking docs"
          src={withPrefix('/docs.svg')}
          height={[150, 300]}
          width={[150, 300]}
        />
      </Flex>
    </Flex>
  </Page>
}
export default DocsPage

export const docsQuery = graphql`
  query DocsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/docs/*" } }
      sort: { order: ASC, fields: [fields___slug] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            section
          }
        }
      }
    }
  }
`