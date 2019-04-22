import React from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";
import { Link, StaticQuery } from "gatsby";
import { display, margin } from "styled-system";

const StyledLinks = styled(Flex)`
  ${display}
  ${margin}
`;

const HeaderLinks = () => {
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={({ site: { siteMetadata } }) => {
        return (
          <StyledLinks
            display={"flex"}
            flexDirection={"row"}
            color="white"
            justifyContent={["center", "flex-start"]}
            alignItems={["center", "center"]}
            mb={[3, 0]}
          >
            <Box>
              <Link style={{ color: "white" }} to="/">
                Home
              </Link>
            </Box>
            <Box flex={[0, 1]} />
            <Box mx={3}>
              <a
                style={{ color: "white" }}
                href={siteMetadata.documentationUrl}
                target="__blank"
              >
                Docs
              </a>
            </Box>
            <Box mr={[0, 3]}>
              <Link style={{ color: "white" }} to="/blog">
                Blog
              </Link>
            </Box>
            <Box mr={[0, 3]}>
              <a
                style={{ color: "white" }}
                href={siteMetadata.releasesUrl}
                target="__blank"
              >
                Releases
              </a>
            </Box>
          </StyledLinks>
        );
      }}
    />
  );
};
export default HeaderLinks;
