import * as React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const siteMetadata = data.site.siteMetadata
  const frontmatter = post.frontmatter
  const title = siteMetadata.titlePrefix + frontmatter.title
  const description = frontmatter.description
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
      {frontmatter.title}
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
