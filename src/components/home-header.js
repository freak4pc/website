import React from "react";
import { withPrefix } from "gatsby";
import { H1 } from "./headers";
import { Image, Text } from "rebass";
import { space } from "styled-system";
import styled from "styled-components";
import { Box } from "@rebass/grid";

const Header = styled.header`
  ${space}
`;

const HomeHeader = ({ title }) => {
  const headerStyle = {
    background: `url(${withPrefix("header.svg")})`,
    backgroundPosition: "100% 100%",
    backgroundRepeat: "no-repeat",
    flexDirection: "column",
    alignItems: "center",
    display: "flex"
  };
  const titleStyle = {};
  const logoStyle = {};
  return (
    <Header style={headerStyle} p={[4, 4]} pb={[6, 7]}>
      <Image
        src={withPrefix("logo.svg")}
        style={logoStyle}
        height={[60, 100]}
        width={(60, 100)}
      />
      <Box p={[4]}>
        <H1 color="white">Tuist</H1>
      </Box>
      <Box>
        <Text color="white" fontSize={[2, 3]} textAlign="center">
          Bootstrap, maintain, and interact with Xcode projects at any scale
        </Text>
      </Box>
    </Header>
  );
};

export default HomeHeader;
