import * as React from 'react'

const DocsPage = ({ data, pathContext }) => {
  return <div></div>
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
      }
    }
  }
`
