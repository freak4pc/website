import React from "react";
import { space } from "styled-system";
import styled from "styled-components";

const StyledMain = styled.main`
  ${space}
`;

const Main = ({ children }) => {
  return (
    <StyledMain my={[2, 4]} mx={[20, 100]} py={2}>
      {children}
    </StyledMain>
  );
};

export default Main;
