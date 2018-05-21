import * as React from 'react'
import Helmet from 'react-helmet'
import OpenGraph from '../components/open-graph'
import { Image, Text, Link, Heading } from 'rebass'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import { borderRadius, color, themeGet } from 'styled-system'
import { withPrefix } from 'gatsby-link'
import timeago from 'timeago.js'
import Disqus from 'disqus-react'
import Share from '../components/share'

const AuthorName = styled.div`
  color: ${themeGet('colors.orange')};
  font-size: ${themeGet('fontSizes.3')};
  font-weight: ${themeGet('fontWeights.bold')};
`
const darkBlue = themeGet('colors.darkblue')

const Header = styled(Flex)`
  background: linear-gradient(
    ${darkBlue} 50%,
    ${darkBlue} 60%,
    white 60%,
    white
  );
`

const HoverLink = styled(Link)`
  color: ${themeGet('colors.darkblue')};
  &:hover {
    color: ${themeGet('colors.green')};
  }
`

export const IconLink = ({ icon, url }) => {
  return (
    <HoverLink
      mx={[2, 2]}
      className={`fab fa-${icon}`}
      href={url}
      target="_blank"
    />
  )
}

const BlogPostTemplate = ({ data, pathContext }) => {
  const post = data.markdownRemark
  const slug = post.fields.slug
  const url = withPrefix(slug)
  const id = post.id
  const siteMetadata = data.site.siteMetadata
  const frontmatter = post.frontmatter
  const title = frontmatter.title
  const description = frontmatter.description
  const author = frontmatter.author
  const { previous, next } = pathContext

  const disqusShortname = 'xcbuddy'
  const disqusConfig = {
    url: url,
    identifier: id,
    title: title,
  }

  return (
    <Flex flex="1" flexDirection="column" alignItems="stretch">
      <OpenGraph
        title={title}
        description={description}
        twitter={frontmatter.author.twitter}
        type="article"
      />
      <Header
        flex="1 1 auto"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Flex mt={5} flex="1 1 auto" flexDirection="column" alignItems="center">
          <Image
            src={author.avatar_url}
            width={150}
            height={150}
            style={{
              borderRadius: '75px',
            }}
          />
          <Flex my={2}>
            <AuthorName>{author.name}</AuthorName>
          </Flex>
          <Flex flex="0 0 auto" flexDirection="row" justifyContent="center">
            <IconLink
              icon="github"
              url={`https://github.com/${author.github}`}
            />
            <IconLink
              icon="twitter"
              url={`https://twitter.com/${author.twitter}`}
            />
          </Flex>
        </Flex>
      </Header>
      <Flex
        flex="1 1 auto"
        pt={3}
        px={[4, 6]}
        flexDirection="column"
        alignItems="center"
      >
        <Heading is="h1" fontSize={[5, 6]} textAlign={['center', 'left']}>
          {frontmatter.title}
        </Heading>
        <Share url={url} description={title} />
        <Text
          style={{ fontStyle: 'italic' }}
          textAlign={['center', 'left']}
          color="darkgrey"
        >
          Published {timeago().format(frontmatter.date)}
        </Text>
        <Flex
          flexDirection="column"
          my={2}
          textAlign="left"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        {next && (
          <Link href={withPrefix(next.fields.slug)}>
            <Text textAlign={['center', 'left']} my={2} color="orange">
              {`Continue reading '${next.frontmatter.title}' →`}
            </Text>
          </Link>
        )}

        <Image src={withPrefix('/rocket.svg')} height={400} width={400} />
      </Flex>
      <Box mx={[3, 6]} mt={4}>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </Box>
    </Flex>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        titlePrefix
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      id
      html
      frontmatter {
        description
        title
        date(formatString: "MMMM DD, YYYY")
        author {
          name
          twitter
          github
          avatar_url
        }
      }
    }
  }
`
