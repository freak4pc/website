import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import { Flex, Box } from "rebass";
import { Link } from "gatsby";
import Pen from "../../assets/pen.svg";
import { width, height, space, color } from "styled-system";
import styled from "styled-components";
import Main from "../components/main";

const StyledPen = styled(Pen)`
  ${width}
  ${height}
`;

const PostTitle = styled.h2`
  ${space}
`;

const PostMetadata = styled.p`
  ${color}
  ${space}
`;

const PostExcerpt = styled.p`
  ${space}
`;

const Post = ({ post }) => {
  return (
    <article>
      <header>
        <PostTitle mb={2}>
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </PostTitle>
      </header>
      <PostMetadata mb={0} color="blue">
        Published on {post.fields.date} by {post.frontmatter.author}
      </PostMetadata>
      <PostExcerpt my={2}>{post.frontmatter.excerpt}</PostExcerpt>
      <p>
        <Link to={post.fields.slug}>Read on</Link>
      </p>
    </article>
  );
};

const PostsFooter = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? "/blog/" : `/blog/${(currentPage - 1).toString()}`;
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
}) => {
  const description =
    "The blog for Tuist, your best friend to use Xcode at scale.";
  return (
    <Layout>
      <SEO title="Blog" description={description} />
      <Header title="Tuist Blog" description={description}>
        <StyledPen width={80} height={80} />
      </Header>
      <Main>
        {edges.map(({ node }, index) => {
          return <Post post={node} key={index} />;
        })}
        <PostsFooter {...pageContext} />
      </Main>
      <Footer />
    </Layout>
  );
};

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
            author
          }
        }
      }
    }
  }
`;
