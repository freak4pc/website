import React from "react";
import { space } from "styled-system";
import styled from "styled-components";

const StyledMain = styled.main`
  ${space}
`;

const Main = ({ children }) => {
  return (
    <StyledMain my={[4, 4]} mx={[20, 140]} py={2}>
      {children}
    </StyledMain>
  );
};

export default Main;
