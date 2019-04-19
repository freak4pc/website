import React from "react";
import { H1 } from "./headers";
import { Text } from "rebass";
import { Box, Flex } from "@rebass/grid";
import HeaderLinks from "./header-links";
import StyledHeader from "./styled-header";

const Header = ({ title, subtitle, children }) => {
  return (
    <StyledHeader
      p={[4, 4]}
      display="flex"
      flexDirection="column"
      alignItems="stretch"
    >
      <HeaderLinks />

      {children && (
        <Flex
          mt={[3, 0]}
          mb={[3, 3]}
          flexDirection="column"
          alignItems="center"
        >
          {children}
        </Flex>
      )}

      <Box>
        <H1 color="white" style={{ textAlign: "center" }}>
          {title}
        </H1>
      </Box>

      {subtitle && (
        <Box>
          <Text color="white" fontSize={[2, 3]} mt={[3, 3]} textAlign="center">
            {subtitle}
          </Text>
        </Box>
      )}
    </StyledHeader>
  );
};

export default Header;
