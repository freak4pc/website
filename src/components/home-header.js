import React from "react";
import { withPrefix } from "gatsby";
import { H1 } from "./headers";
import { Image, Text } from "rebass";
import styled from "styled-components";
import { Box, Flex } from "@rebass/grid";
import HeaderLinks from "./header-links";
import StyledHeader from "./styled-header";
import theme from "../utils/theme";

const HeaderButton = styled.a`
  border-radius: 3px;
  border: 1px solid;
  border-color: white;
  color: white;
  padding: 7px;
  &:hover {
    background: white;
    color: ${theme.colors.darkBlue};
    text-decoration: none;
  }
`;

const HomeHeader = ({ title, gettingStartedUrl }) => {
  return (
    <StyledHeader p={[4, 4]} pb={[3, 3]}>
      <HeaderLinks />
      <Flex flexDirection="column" alignItems="center">
        <Image
          src={withPrefix("logo.svg")}
          height={[60, 100]}
          width={(60, 100)}
        />
        <Box p={[3, 4]}>
          <H1 color="white">Tuist</H1>
        </Box>

        <Box width={["70%", "40%"]}>
          <Text color="white" fontSize={[2, 3]} textAlign="center">
            Bootstrap, maintain, and interact with Xcode projects at any scale
          </Text>
        </Box>
        <Flex p={3} flexWrap="wrap" justifyContent="center">
          <HeaderButton href={gettingStartedUrl} target="__blank">
            Getting started
          </HeaderButton>
        </Flex>
      </Flex>
    </StyledHeader>
  );
};

export default HomeHeader;
