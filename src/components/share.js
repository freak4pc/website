import React from "react";
import { gatsby, StaticQuery } from "gatsby";
import { Box, Flex } from "rebass";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Mail from "../../assets/mail.svg";
import styled from "styled-components";
import { width, height, space } from "styled-system";

const StyledMail = styled(Mail)`
  ${width}
  ${height}
  ${space}
`;

const StyledFacebook = styled(Facebook)`
  ${width}
  ${height}
  ${space}
`;

const StyledTwitter = styled(Twitter)`
  ${width}
  ${height}
  ${space}

`;

const shareUrl = (title, tags, url, dst) => {
  if (dst === "facebook") {
    return `https://www.facebook.com/sharer.php?u=${url}`;
  } else if (dst === "twitter") {
    return `https://twitter.com/intent/tweet?url=${url}&text=${title}&hashtags=${tags}`;
  } else if (dst === "mail") {
    return `mailto:?subject=${title}&body=${url}`;
  }
};

export default ({ path, title, tags }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              siteUrl
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: { siteUrl }
        }
      }) => {
        const url = `${siteUrl}/${path}`;
        return (
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            my={4}
          >
            <a
              href={shareUrl(title, tags, url, "twitter")}
              alt="Share the blog post on Twitter"
            >
              <StyledTwitter width={[40, 50]} height={[40, 50]} mx={3} />
            </a>
            <a
              href={shareUrl(title, tags, url, "facebook")}
              alt="Share the blog post on Facebook"
            >
              <StyledFacebook width={[40, 50]} height={[25, 40]} mx={3} />
            </a>
            <a
              href={shareUrl(title, tags, url, "mail")}
              alt="Share the blog post via email"
            >
              <StyledMail width={[40, 50]} height={[40, 50]} mx={3} />
            </a>
          </Flex>
        );
      }}
    />
  );
};
