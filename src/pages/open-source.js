import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Open from "../../assets/open.svg";
import { width, height, flexbox, space, fontSize } from "styled-system";
import styled from "styled-components";
import Main from "../components/main";
import { graphql, useStaticQuery } from "gatsby";
import { Flex } from "rebass";
import theme from "../utils/theme";
import { lighten } from "polished";

const StyledOpen = styled(Open)`
  ${width}
  ${height}
`;

const StyledProjectArticle = styled.article`
  ${flexbox};
  ${width};
  ${space};
  background: white;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 5px;
  justify-content: space-between;

  -webkit-box-shadow: 0px 0px 15px 0px ${lighten(0.3, theme.colors.blue)};
  -moz-box-shadow: 0px 0px 15px 0px ${lighten(0.3, theme.colors.blue)};
  box-shadow: 0px 0px 15px 0px ${lighten(0.3, theme.colors.blue)};
`;

StyledProjectArticle.defaultProps = {
  width: [300],
  mx: [3],
  my: [2, 3],
  p: [3]
};

const ProjectTitle = styled.h2`
  ${space};
  text-transform: uppercase;
  background: linear-gradient(
    to right,
    ${theme.colors.blue} 0%,
    ${theme.colors.green} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  user-select: none;
`;

ProjectTitle.defaultProps = {
  mt: 2,
  mb: 3
};

const ProjectDescription = styled.p`
  text-align: center;
`;

const ProjectLink = styled.a`
  text-align: center;
  color: ${theme.colors.green};
`;

const ProjectLicense = styled.div`
  background: ${theme.colors.green};
  align-self: center;
  color: white;
  padding: 3px 6px;
  border-radius: 3px;
  user-select: none;
  ${fontSize};
  ${space};
`;

ProjectLicense.defaultProps = {
  fontSize: 2,
  mb: 3
};

const Project = ({ project }) => {
  return (
    <StyledProjectArticle>
      <header>
        <ProjectTitle>{project.name}</ProjectTitle>
      </header>
      <ProjectLicense>{`${project.license} License`}</ProjectLicense>
      <ProjectDescription>{project.description}</ProjectDescription>
      <ProjectLink href={project.link} target="__blank">
        Source code
      </ProjectLink>
    </StyledProjectArticle>
  );
};

const Projects = () => {
  const {
    allOpenSourceYaml: { edges }
  } = useStaticQuery(graphql`
    query {
      allOpenSourceYaml {
        edges {
          node {
            name
            description
            link
            license
          }
        }
      }
    }
  `);
  const projects = edges.map(edge => edge.node);
  return (
    <Flex
      flexWrap="wrap"
      flexDirection="row"
      justifyContent={["center", "flex-start", "center"]}
      my={5}
    >
      {projects.map((project, index) => (
        <Project project={project} key={index} />
      ))}
    </Flex>
  );
};

const OpenSourcePage = () => {
  const description = "Check out the work that Tuist does in the open";
  return (
    <Layout>
      <SEO title="Open Source" description={description} />
      <Header
        title="Open Source"
        description={description}
        subtitle="Building open source tools and libraries in Swift"
      >
        <StyledOpen width={80} height={80} />
      </Header>
      <Main>
        <p>
          The Tuist organization is commited to do all of its work in the open.
          We develop tools and libraries mostly in Swift for anyone to use. We
          believe that{" "}
          <b>
            the key to productivity and great software is having the right tools
          </b>
          , so we'd like to empower developers to build them with the language
          they feel the most familiar, Swift.
        </p>
        <p>
          We are a welcoming and diverse group of developers that are passionate
          for Swift and open to share and learn from each other.
        </p>
        <p>
          Below you'll find all the projects that we've developed and actively
          maintain.
        </p>
        <Projects />
      </Main>
      <Footer />
    </Layout>
  );
};

export default OpenSourcePage;
