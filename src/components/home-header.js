import React from "react";
import { withPrefix } from "gatsby";
import { H1 } from "./headers";
import { Image, Text } from "rebass";
import styled from "styled-components";
import { Box, Flex } from "@rebass/grid";
import { borders, color, space } from "styled-system";
import HeaderLinks from "./header-links";
import StyledHeader from "./styled-header";

const HeaderButton = styled.div`
  ${borders}
  ${space}
  ${color}
`;

const HomeHeader = ({ title }) => {
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
          <HeaderButton p={2} m={1} bg="white" borderRadius={3}>
            Get started
          </HeaderButton>
          <HeaderButton
            color="white"
            m={1}
            p={2}
            borderRadius={3}
            border="1px solid"
            borderColor="white"
          >
            Documentation
          </HeaderButton>
        </Flex>
      </Flex>
    </StyledHeader>
  );
};

export default HomeHeader;
