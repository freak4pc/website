import React from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";
import { Link, StaticQuery, useStaticQuery } from "gatsby";
import { display, margin } from "styled-system";

const StyledLinks = styled(Flex)`
  ${display}
  ${margin}
`;

const HeaderLinks = () => {
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
  const linkStyle = { color: "white" };
  return (
    <StyledLinks
      display={"flex"}
      flexDirection={["column", "row"]}
      color="white"
      justifyContent={["center", "flex-start"]}
      alignItems={["center", "center"]}
      mb={[4, 0]}
    >
      <Box>
        <Link style={linkStyle} to="/">
          Home
        </Link>
      </Box>
      <Box flex={[0, 1]} />
      <Box mx={3}>
        <a
          style={linkStyle}
          href={siteMetadata.documentationUrl}
          target="__blank"
        >
          Docs
        </a>
      </Box>
      <Box mr={[0, 3]}>
        <Link style={linkStyle} to="/blog">
          Blog
        </Link>
      </Box>
      <Box mr={[0, 3]}>
        <Link style={linkStyle} to="/open-source">
          Open Source
        </Link>
      </Box>
      <Box mr={[0, 3]}>
        <a style={linkStyle} href={siteMetadata.releasesUrl} target="__blank">
          Releases
        </a>
      </Box>
    </StyledLinks>
  );
};
export default HeaderLinks;
