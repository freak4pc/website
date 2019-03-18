import React from "react";
import styled from "styled-components";
import { fontSize } from "styled-system";

const header = (type, color, size) => {
  return styled(type)`
    color: ${color};
    ${fontSize({ fontSize: size })}
  `;
};

const H1 = header("h1", "white", [4, 5]);
export default H1;
