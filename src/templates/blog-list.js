import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import { Flex, Box } from "rebass";
import { Link } from "gatsby";

// const Post = () => {
//   return <div />;
// };

const PostsFooter = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? "/blog" : `/blog/${(currentPage - 1).toString()}`;
  const nextPage = `/blog/${(currentPage + 1).toString()}`;

  return (
    <Flex flex="1" flexDirection="row" justifyContent="space-between">
      {!isFirst && (
        <Box>
          <Link to={prevPage}>Previous page</Link>
        </Box>
      )}
      {!isLast && (
        <Box>
          <Link to={nextPage}>Next page</Link>
        </Box>
      )}
    </Flex>
  );
};

const BlogList = ({
  pageContext,
  data: {
    allMarkdownRemark: { edges }
  }
}) => (
  <Layout>
    <SEO
      title="Blog"
      keywords={[`blog`, `tuist`, `engineering`, `xcode`, `swift`]}
    />
    <Header title="Blog" />
    <PostsFooter />
    <Footer />
  </Layout>
);

export default BlogList;

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "blog" } } }
      sort: { order: DESC, fields: [fields___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            date
            slug
          }
          frontmatter {
            categories
            title
            excerpt
          }
        }
      }
    }
  }
`;
