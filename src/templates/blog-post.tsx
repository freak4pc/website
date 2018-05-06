import * as React from 'react'
import Helmet from 'react-helmet'
import OpenGraph from '../components/open-graph'
import { Image, Text, Link } from 'rebass'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import { borderRadius, color, themeGet } from 'styled-system'
import { MainTitle } from '../components/title'
import { withPrefix } from 'gatsby-link'
import timeago from 'timeago.js'

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
  const siteMetadata = data.site.siteMetadata
  const frontmatter = post.frontmatter
  const title = siteMetadata.titlePrefix + frontmatter.title
  const description = frontmatter.description
  const author = frontmatter.author
  const { previous, next } = pathContext

  return (
    <div>
      <Helmet>
        <meta property="og:title" content={title} />
        <title>{title}</title>
        <meta
          property="twitter:creator"
          content={`@${frontmatter.author.twitter}`}
        />
        <meta property="twitter:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
      </Helmet>
      <Header
        flex="0 0 auto"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Flex mt={5} flexDirection="column" alignItems="center">
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
        flex="1 0 auto"
        pt={3}
        px={[4, 6]}
        flexDirection="column"
        alignItems="center"
      >
        <MainTitle textAlign={['center', 'left']}>
          {frontmatter.title}
        </MainTitle>
        <Text
          style={{ fontStyle: 'italic' }}
          textAlign={['center', 'left']}
          color="darkgrey"
        >
          Published {timeago().format(frontmatter.date)}
        </Text>
        <Text
          style={{ display: 'block' }}
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
    </div>
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
