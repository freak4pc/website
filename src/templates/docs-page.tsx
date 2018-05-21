import * as React from 'react'
import Page from '../components/page'
import OpenGraph from '../components/open-graph'
import { Flex, Box } from 'grid-styled'
import { Image, Text, Link, Heading } from 'rebass'
import { withPrefix } from 'gatsby-link'

const FooterLinks = ({ previous, next }) => {
  return (
    <Flex flexDirection={['column', 'row']}>
      <Box flex="1" my={[1, 0]}>
        {previous && (
          <Link href={withPrefix(previous.fields.slug)}>
            <Text color="orange" textAlign={['center', 'left']}>
              {`← Back to '${previous.frontmatter.title}'`}
            </Text>
          </Link>
        )}
      </Box>
      <Box flex="1" my={[1, 0]}>
        <Link href={withPrefix('/docs')}>
          <Text color="orange" textAlign="center">
            {`Documentation index`}
          </Text>
        </Link>
      </Box>
      <Box flex="1" my={[1, 0]}>
        {next && (
          <Link href={withPrefix(next.fields.slug)}>
            <Text color="orange" textAlign={['center', 'right']}>
              {`Continue reading '${next.frontmatter.title}' →`}
            </Text>
          </Link>
        )}
      </Box>
    </Flex>
  )
}
const DocsPage = ({ data, pathContext }) => {
  const page = data.markdownRemark
  const siteMetadata = data.site.siteMetadata
  const frontmatter = page.frontmatter
  const title = frontmatter.title
  const description = frontmatter.description
  const { previous, next } = pathContext

  return (
    <Page pb={[5, 5]}>
      <OpenGraph
        title={title}
        description={description}
        cardTitle="xcbuddy"
        cardSubtitle={`${title} documentation`}
      />
      <Heading is="h1" fontSize={[5, 6]} textAlign={['center', 'left']}>
        {title}
      </Heading>
      <Box>
        <Text
          style={{ display: 'block' }}
          my={2}
          textAlign="left"
          dangerouslySetInnerHTML={{ __html: page.html }}
        />
      </Box>
      <FooterLinks next={next} previous={previous} />
    </Page>
  )
}

export default DocsPage

export const pageQuery = graphql`
  query DocsPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        titlePrefix
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`
