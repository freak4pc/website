import React from "react";
import { withPrefix } from "gatsby";
import { H1 } from "./headers";
import { Text } from "rebass";
import styled from "styled-components";
import { display } from "styled-system";
import { Box, Flex } from "@rebass/grid";
import {
  space,
  alignItems,
  justifyContent,
  flex,
  flexDirection
} from "styled-system";

const StyledHeader = styled.header`
  ${space}
  ${alignItems}
  ${justifyContent}
  ${flex}
  ${flexDirection}
`;

const StyledLinks = styled(Flex)`
  ${display}
`;

const Links = () => {
  return (
    <StyledLinks
      display={["none", "flex"]}
      flexDirection={["column", "row"]}
      color="white"
      justifyContent={["center", "flex-start"]}
      alignItems={["center", "center"]}
    >
      <Box mr={3}>Home</Box>
      <Box flex="1" />
      <Box mr={3}>Blog</Box>
      <Box mr={3}>Releases</Box>
    </StyledLinks>
  );
};

const Header = ({ title, subtitle, children }) => {
  const headerStyle = {
    background: `url(${withPrefix("header.svg")})`,
    backgroundPosition: "100% 100%",
    backgroundRepeat: "no-repeat"
  };
  const logoStyle = {};
  return (
    <StyledHeader
      style={headerStyle}
      p={[4, 4]}
      pb={[6, 6]}
      display="flex"
      flexDirection="column"
      alignItems="stretch"
    >
      <Links />

      {children && (
        <Flex mt={[3, 0]} flexDirection="column" alignItems="center">
          {children}
        </Flex>
      )}

      <Box p={[3, 4]}>
        <H1 color="white" style={{ textAlign: "center" }}>
          {title}
        </H1>
      </Box>

      {subtitle && (
        <Box>
          <Text color="white" fontSize={[2, 3]} textAlign="center">
            Published 3 days ago by Pedro
          </Text>
        </Box>
      )}
    </StyledHeader>
  );
};

export default Header;
