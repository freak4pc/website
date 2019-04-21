import React from "react";
import { StaticQuery } from "gatsby";

export default ({ path }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              editUrl
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: { editUrl }
        }
      }) => {
        const url = `${editUrl}/${path}`;
        return (
          <a href={url} target="__blank">
            This page can be edited on GitHub
          </a>
        );
      }}
    />
  );
};
