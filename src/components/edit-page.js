import React from "react";
import { useStaticQuery } from "gatsby";

export default ({ path }) => {
  const {
    site: {
      siteMetadata: { editUrl }
    }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          editUrl
        }
      }
    }
  `);
  const url = `${editUrl}/${path}`;
  return (
    <a href={url} target="__blank">
      This page can be edited on GitHub
    </a>
  );
};
