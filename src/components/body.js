import React from "react";
import { space } from "styled-system";
import styled from "styled-components";

const StyledBody = styled.body`
  ${space}
`;

const Body = ({ children }) => {
  return (
    <StyledBody my={[2, 4]} mx={[20, 100]}>
      {children}
    </StyledBody>
  );
};

export default Body;
