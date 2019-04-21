import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HomeHeader from "../components/home-header";
import Footer from "../components/footer";
import { Flex, Box } from "rebass";
import { graphql } from "gatsby";
import styled from "styled-components";
import Prism from "prismjs";

import {
  width,
  height,
  color,
  fontWeight,
  space,
  borders,
  textAlign,
  borderRadius,
  fontSize
} from "styled-system";
import BoxIcon from "../../assets/box.svg";
import Check from "../../assets/check.svg";
import Truck from "../../assets/truck.svg";
import Report from "../../assets/report.svg";
import Developer from "../../assets/developer.svg";
import Desk from "../../assets/desk.svg";
import Asteroid from "../../assets/asteroid.svg";
import Astrology from "../../assets/astrology.svg";
import Rocket from "../../assets/rocket.svg";
import Astronaut from "../../assets/astronaut.svg";
import GitHub from "../../assets/github.svg";
import Slack from "../../assets/slack.svg";
import theme from "../utils/theme";
import Terminal from "react-animated-term";
import "react-animated-term/dist/react-animated-term.css";

const StyledAstronaut = styled(Astronaut)`
  ${width}
  ${height}
`;

const StyledGitHub = styled(GitHub)`
  ${width}
  ${height}
  ${space}
`;

const StyledSlack = styled(Slack)`
  ${width}
  ${height}
  ${space}
`;

const StyledRocket = styled(Rocket)`
  ${width}
  ${height}
`;

const StyledAstrology = styled(Astrology)`
  ${width}
  ${height}
`;

const StyledAsteroid = styled(Asteroid)`
  ${width}
  ${height}
`;

const StyledDesk = styled(Desk)`
  ${width}
  ${height}
`;

const StyledDeveloper = styled(Developer)`
  ${width}
  ${height}
`;

const StyledBox = styled(BoxIcon)`
  ${width}
  ${height}
`;

const StyledCheck = styled(Check)`
  ${width}
  ${height}
`;

const StyledTruck = styled(Truck)`
  ${width}
  ${height}
`;

const StyledReport = styled(Report)`
  ${width}
  ${height}
`;

const StyledDiv = styled.div`
  ${color}
  ${borders}
  ${fontWeight}
  ${fontSize}
  ${space}
`;

const StyledH2 = styled.h2`
  ${textAlign}
  ${color}
`;

const BlueGradientFlex = styled(Flex)`
  background: #02192d; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #02192d 0%,
    #193f5d 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #02192d 0%,
    #193f5d 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #02192d 0%,
    #193f5d 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#02192d', endColorstr='#193f5d',GradientType=0 ); /* IE6-9 */
`;

const GreenGradientFlex = styled(Flex)`
  background: ${theme.colors.darkGreen}; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    ${theme.colors.darkGreen} 0%,
    ${theme.colors.green} 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    ${theme.colors.darkGreen} 0%,
    ${theme.colors.green} 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    ${theme.colors.darkGreen} 0%,
    ${theme.colors.green} 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${
    theme.colors.darkGreen
  }', endColorstr='${theme.colors.green}',GradientType=0 ); /* IE6-9 */
`;

const StyledBlueButtonLink = styled.a`
  ${borders}
  ${space}
  color: white;
  background: ${theme.colors.blue};
  text-decoration: none;
  &:hover {
    text-decoration: none;
    background: ${theme.colors.darkBlue};
  }
`;

const StyledWhiteButtonLink = styled.a`
  ${space}
  ${borders}

  border: solid;
  border-width: 1px;
  color: white;
  background: ${theme.colors.darkBlue};

  &:hover {
    text-decoration: none;
    color: ${theme.colors.darkBlue};
    background: white;
  }
`;

const StyledParagraph = styled.p`
  ${textAlign}
  ${color}
  ${fontSize}
`;

const StyledImg = styled.img`
  ${height}
  ${width}
  ${borderRadius}
  ${space}
`;

const WithMargin = ({ children }) => {
  return <StyledDiv mx={[20, 140]}>{children}</StyledDiv>;
};

const Feature = ({ children, title, description }) => {
  return (
    <Flex flexDirection="column" width={170} alignItems="center" mx={2}>
      <Box mb={2}>{children}</Box>
      <StyledDiv
        fontWeight="bold"
        color="purple"
        style={{ textAlign: "center" }}
        fontSize={2}
        mb={3}
      >
        {title}
      </StyledDiv>
      <StyledParagraph style={{ textAlign: "center" }} fontSize={2}>
        {description}
      </StyledParagraph>
    </Flex>
  );
};

const Why = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      mb={2}
      mt={[5, 5, 5, 0]}
      style={{ textAlign: "center" }}
    >
      <Flex
        flexDirection={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row"
        ]}
        alignItems="center"
      >
        <Box flex="1">
          <StyledH2>Why</StyledH2>
          <p>
            With the unceasing growth of apps to support new platforms and
            products, <b>Xcode projects are growing in complexity</b>. Such
            complexity, although necessary at scale, makes the projects hard to
            maintain. Moreover, it’s often a source of issues and frustration
            for developers.
          </p>
          <p>
            We believe developers should be abstracted from complexities to let
            them focus on building apps. That’s the role Tuist takes. It
            provides a <b>simple and convenient abstraction</b>, and takes the
            opportunity to encourage what we believe are good practices and
            conventions.
          </p>
          <p>
            Tuist is a command line tool written in Swift, designed and
            developed in the open.
          </p>
        </Box>
        <Box flex="1">
          <StyledDesk
            height={[200, 200, 300, 400]}
            width={[200, 200, 300, 400]}
          />
        </Box>
      </Flex>
      <StyledH2>Features</StyledH2>
      <Flex
        alignSelf="stretch"
        my={[3, 3]}
        flexDirection={["column", "row"]}
        flexWrap="wrap"
        alignItems={["center", "flex-start"]}
        justifyContent={["center", "space-between"]}
      >
        <Feature
          title="Xcode projects generation"
          description="You describe the projects in Swift, we configure them for you"
        >
          <StyledAsteroid width={[80]} height={[80]} />
        </Feature>
        <Feature
          title="Easy static & dynamic linking"
          description="We translate dependencies into build settings and phases"
        >
          <StyledAstrology width={[80]} height={[80]} />
        </Feature>
        <Feature
          title="Fewer Git conflicts"
          description="Spend less time solving git conflicts and more building great apps"
        >
          <StyledRocket width={[80]} height={[80]} />
        </Feature>
        <Feature
          title="Best practices"
          description="Easily enforce best practices & conventions in the project structure"
        >
          <StyledAstronaut width={[80]} height={[80]} />
        </Feature>
      </Flex>
    </Flex>
  );
};

class Manifest extends React.Component {
  componentDidMount() {
    console.log("yolo");
    Prism.highlightAll();
  }
  render() {
    return <div className="gatsby-highlight" data-language="swift" />;
  }
}

const How = () => {
  return (
    <Flex flexDirection="column" alignItems="center" mb={4}>
      <StyledH2 style={{ textAlign: "center" }}>How</StyledH2>
      <p>
        Projects are defined in a <i>Project.swift</i>, also known as{" "}
        <b>manifest</b>. The manifest format that abstracts you from the
        implementation details of Xcode projects. In your manifest, you can
        define which targets your project has, the sources and resources belong
        to them, as well as the dependencies with targets in the same and other
        projects.
      </p>
      <Manifest />
      <p>
        Tuist turns them into compilable Xcode projects and lets you know if
        something is misconfigured. Xcode projects stop being a source of git
        conflicts to become just an implementation detail.
      </p>
    </Flex>
  );
};

const OpenSourceButton = styled.a`
  ${space};
  background: white;
  border-radius: 3px;
  &:hover {
    text-decoration: none;
  }
`;

const OpenSource = ({ githubUrl, slackUrl }) => {
  return (
    <GreenGradientFlex>
      <WithMargin style={{ color: "white" }}>
        <Flex
          mt={[4, 4, 0]}
          flexDirection={["column", "column", "row"]}
          alignItems={["center", "center", "flex-end"]}
        >
          <Box mb={[0, 0, -25]}>
            <StyledDeveloper height={[130, 130, 200]} width={[270, 270, 400]} />
          </Box>
          <Flex
            flex={1}
            ml={[0, 0, -30]}
            flexDirection="column"
            alignItems={["center", "center", "flex-end"]}
            justifyContent="flex-end"
          >
            <StyledH2 textAlign={["center", "center", "right"]} color="white">
              An{" "}
              <span
                style={{
                  borderBottom: `5px solid ${theme.colors.yellow}`
                }}
              >
                open source
              </span>{" "}
              project
            </StyledH2>
            <StyledParagraph
              color="white"
              textAlign={["center", "center", "right"]}
            >
              Tuist is entirely designed and developed in the open. Moreover, it
              embraces Unix philosophy: Make each program do one thing well. The
              project is made of smaller libraries that focus on doing one thing
              well, like <b>xcodeproj</b>.
            </StyledParagraph>
            <StyledParagraph
              color="white"
              textAlign={["center", "center", "right"]}
            >
              Anyone has a place and voice in our healthy, collaborative, and
              ego-free community.
            </StyledParagraph>
            <Flex flexDirection="row" pb={5}>
              <OpenSourceButton mx={2} p={12} href={githubUrl} target="__blank">
                <Flex flexDirection="row" alignItems="center">
                  <StyledGitHub width="25" height="25" mr={3} />{" "}
                  <span>GitHub</span>
                </Flex>
              </OpenSourceButton>
              <OpenSourceButton mx={2} p={12} href={slackUrl} target="__blank">
                <Flex flexDirection="row" alignItems="center">
                  <StyledSlack width="25" height="25" mr={3} />{" "}
                  <span>Join our Slack</span>
                </Flex>
              </OpenSourceButton>
            </Flex>
          </Flex>
        </Flex>
      </WithMargin>
    </GreenGradientFlex>
  );
};

const Mission = ({ authors }) => {
  return (
    <WithMargin>
      <StyledH2 textAlign="center">Our mission</StyledH2>
      <p style={{ textAlign: "center" }}>
        We aim to provide a command line tool that makes the interaction with
        Xcode projects approachable, standard, and convenient at any scale,
        built on the principles of ease of use and reliability, and powered by
        Swift in the open.
      </p>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap" mb={4}>
        {authors.map((author, index) => {
          return (
            <a
              alt={author.name}
              href={`https://twitter.com/${author.twitter}`}
              target="__blank"
              key={index}
            >
              <StyledImg
                height={[50, 80, 80]}
                width={[50, 80, 80]}
                src={author.avatar}
                mx={2}
                borderRadius={[25, 40, 40]}
              />
            </a>
          );
        })}
      </Flex>
    </WithMargin>
  );
};

const TestItOut = ({ gettingStartedUrl }) => {
  const commands = [
    { text: "tuist init", cmd: true },
    { text: "✅ Success: Project generated at path MyProject", cmd: false },
    { text: "", cmd: false },
    { text: "tuist generate", cmd: true },
    {
      text: "✅ Success: Xcode project generated at MyProject.xcodeproj",
      cmd: false
    }
  ];
  return (
    <BlueGradientFlex color="white" height={100} pb={5}>
      <WithMargin>
        <Flex
          flexDirection={["column", "row"]}
          alignItems={["stretch", "center"]}
          justifyContent="space-between"
        >
          <Flex
            flex="1"
            flexDirection="column"
            alignItems={["center", "flex-start"]}
            mb={[4, 0]}
          >
            <StyledH2 color="white" textAlign={["center", "left"]}>
              Test it out!
            </StyledH2>
            <StyledParagraph textAlign={["center", "left"]}>
              Stop wasting your time figuring out complicated Xcode issues in
              your projects and let us help you with that.
            </StyledParagraph>
            <StyledParagraph textAlign={["center", "left"]}>
              You can adopt Tuist <b>incrementally</b> without having to change
              the structure of your projects.
            </StyledParagraph>
            <StyledWhiteButtonLink
              p={3}
              borderRadius={5}
              href={gettingStartedUrl}
              target="__blank"
              alt="Start using the project"
            >
              Getting started
            </StyledWhiteButtonLink>
          </Flex>
          <Box flex="1" mx={4}>
            <Terminal
              lines={commands}
              interval={80}
              style={{ border: "none" }}
              white
            />
          </Box>
        </Flex>
      </WithMargin>
    </BlueGradientFlex>
  );
};

const OneMoreThing = ({ contributeUrl }) => {
  return (
    <Flex flexDirection="column" alignItems="center" mb={4}>
      <h2 style={{ textAlign: "center" }}>One more thing...</h2>
      <p style={{ textAlign: "center" }}>
        There’s a lot more to come. Project generation opens the door to
        workflow improvements that will make your experience working with Xcode
        much more pleasant. Stay tuned to the exciting backlog we have ahead.
      </p>
      <Flex
        alignSelf="stretch"
        my={[3, 3]}
        flexDirection={["column", "row"]}
        flexWrap="wrap"
        alignItems={["center", "flex-start"]}
        justifyContent={["center", "space-between"]}
      >
        <Feature
          title="Swift Package Manager support"
          description="Easily integrate third party packages into your projects"
        >
          <StyledBox width={[80]} height={[80]} />
        </Feature>
        <Feature
          title="Selective test runs"
          description="Selectively run tests based on the changed files"
        >
          <StyledCheck width={[80]} height={[80]} />
        </Feature>
        <Feature
          title="Build insights"
          description="Auto-generated reports about your projects and builds"
        >
          <StyledReport width={[80]} height={[80]} />
        </Feature>
        <Feature
          title="Distributed incremental builds"
          description="Leveraging alternative build systems such as Buck or Bazel"
        >
          <StyledTruck width={[80]} height={[80]} />
        </Feature>
      </Flex>

      <StyledBlueButtonLink
        p={3}
        borderRadius={5}
        href={contributeUrl}
        target="__blank"
        alt="Learn how to contribute to the project"
      >
        I want to contribute
      </StyledBlueButtonLink>
    </Flex>
  );
};
const IndexPage = ({
  data: {
    site: {
      siteMetadata: {
        contributeUrl,
        gettingStartedUrl,
        documentationUrl,
        githubUrl,
        slackUrl
      }
    },
    allAuthorsYaml
  }
}) => {
  const authors = allAuthorsYaml.edges.map(edge => edge.node);
  return (
    <Layout>
      <SEO />
      <HomeHeader
        gettingStartedUrl={gettingStartedUrl}
        documentationUrl={documentationUrl}
      />
      <main>
        <WithMargin>
          <Why />
        </WithMargin>
        {/* <WithMargin>
          <How />
        </WithMargin> */}
        <OpenSource githubUrl={githubUrl} slackUrl={slackUrl} />
        <Mission authors={authors} />
        <TestItOut gettingStartedUrl={gettingStartedUrl} />
        <WithMargin>
          <OneMoreThing contributeUrl={contributeUrl} />
        </WithMargin>
      </main>
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        contributeUrl
        gettingStartedUrl
        documentationUrl
        githubUrl
        slackUrl
      }
    }
    allAuthorsYaml {
      edges {
        node {
          name
          avatar
          twitter
        }
      }
    }
  }
`;
