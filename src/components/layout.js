import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import HomeHeader from "./home-header";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <HomeHeader />
          <div>
            <main>{children}</main>
            <footer />
          </div>
        </>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
