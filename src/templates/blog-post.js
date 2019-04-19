import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import styled from "styled-components";
import { width, height, borderRadius, space } from "styled-system";
import { graphql, StaticQuery } from "gatsby";
import moment from "moment";
import Main from "../components/main";
import EditPage from "../components/edit-page";
import Share from "../components/share";

const StyledAvatar = styled.img`
  ${width}
  ${height}
  ${borderRadius}
  ${space}
`;

const Avatar = ({ author: { avatar, twitter } }) => {
  return (
    <a href={`https://twitter.com/${twitter}`} target="__blank">
      <StyledAvatar
        my={[20, 0]}
        width={[90, 140]}
        height={[90, 140]}
        borderRadius={[45, 70]}
        src={avatar}
      />
    </a>
  );
};

const IndexPage = ({
  data: {
    markdownRemark,
    allAuthorsYaml: { edges }
  }
}) => {
  const post = markdownRemark;
  const authors = edges.map(edge => edge.node);
  const author = authors.find(
    author => author.handle == post.frontmatter.author
  );
  const subtitle = `Published by ${author.name} on ${moment(
    post.fields.date
  ).format("MMMM Do YYYY")}`;
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt}
        keywords={post.frontmatter.categories}
      />
      <Header title={post.frontmatter.title} subtitle={subtitle}>
        <Avatar author={author} />
      </Header>
      <Main>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <p>
          <EditPage path={post.fields.path} />
        </p>
        <Share
          path={post.fields.path}
          tags={post.frontmatter.categories}
          title={post.frontmatter.title}
        />
      </Main>
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
        date
        path
      }
      frontmatter {
        title
        categories
        excerpt
        author
      }
    }
    allAuthorsYaml {
      edges {
        node {
          name
          avatar
          twitter
          handle
        }
      }
    }
  }
`;
