import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import GlobalStyle from "../utils/global-style";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};

export default Layout;
