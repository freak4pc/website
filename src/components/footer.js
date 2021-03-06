import React from "react";
import { Box, Flex } from "@rebass/grid";
import { textAlign, color } from "styled-system";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";

const FooterSentence = styled(Box)`
  ${textAlign}
`;

const StyledLink = styled.a`
  ${color}
`;

const GatsbyStyledLink = styled(Link)`
  ${color}
`;

const Footer = () => {
  const centerStyle = { textAlign: "center" };
  const {
    site: { siteMetadata }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          githubUrl
          releasesUrl
          documentationUrl
          slackUrl
        }
      }
    }
  `);
  return (
    <Flex
      bg="lightGray"
      fontSize={1}
      p={[4, 4]}
      color="gray"
      flexDirection={["column", "row"]}
    >
      <FooterSentence textAlign={["center", "left"]} mb={[3, 0]}>
        Tuist is a project from{" "}
        <a href="https://twitter.com/pepibumur">Pedro Piñera</a> and the Tuist
        community
      </FooterSentence>
      <Box flex={1} />
      <Flex
        mt={[3, 0]}
        flexDirection={["column", "row"]}
        justifyContent={["center", "center"]}
      >
        <Box style={centerStyle} mr={2}>
          <StyledLink
            color="gray"
            href={siteMetadata.githubUrl}
            target="__blank"
          >
            GitHub
          </StyledLink>
        </Box>
        <Box style={centerStyle} mr={2}>
          <GatsbyStyledLink color="gray" to="/blog">
            Blog
          </GatsbyStyledLink>
        </Box>
        <Box style={centerStyle} mr={2}>
          <StyledLink
            color="gray"
            href={siteMetadata.releasesUrl}
            target="__blank"
          >
            Releases
          </StyledLink>
        </Box>
        <Box style={centerStyle} mr={2}>
          <StyledLink
            color="gray"
            href={siteMetadata.documentationUrl}
            target="__blank"
          >
            Documentation
          </StyledLink>
        </Box>
        <Box style={centerStyle} mr={2}>
          <StyledLink
            color="gray"
            href={siteMetadata.slackUrl}
            target="__blank"
          >
            Slack
          </StyledLink>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Footer;
