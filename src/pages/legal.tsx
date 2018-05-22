import * as React from 'react'
import OpenGraph from '../components/open-graph'
import Page from '../components/page'
import { Text, Image } from 'rebass'
import { Box, Flex } from 'grid-styled'
import Link, { withPrefix } from 'gatsby-link'

const LegalPage = ({ data }) => (
  <Page pb={[0, 0]}>
    <OpenGraph title="Legal and conduct" description="Legal and conduct" />
    <Text
      my={2}
      textAlign={['center', 'left']}
      dangerouslySetInnerHTML={{
        __html: data.allMarkdownRemark.edges[0].node.html,
      }}
    />
    <Flex flex="1 0 auto" flexDirection="column" justifyContent="flex-end">
      <Image
        style={{ display: 'flex', alignSelf: 'center' }}
        alt="Choose"
        src={withPrefix('/choose.svg')}
        height={[150, 300]}
        width={[150, 300]}
      />
    </Flex>
  </Page>
)

export default LegalPage

export const blogQuery = graphql`
  query LegalQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/legal.md" } }) {
      edges {
        node {
          id
          html
        }
      }
    }
  }
`
