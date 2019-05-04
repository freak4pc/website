import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Pen from "../../assets/pen.svg";
import { width, height } from "styled-system";
import styled from "styled-components";
import Main from "../components/main";

const StyledPen = styled(Pen)`
  ${width}
  ${height}
`;

const OpenSourcePage = () => {
  const description = "Check out the work that Tuist does in the open";
  return (
    <Layout>
      <SEO title="Open Source" description={description} />
      <Header
        title="Open Source"
        description={description}
        subtitle="Building open source tools and libraries in Swift"
      >
        <StyledPen width={80} height={80} />
      </Header>
      <Main>
        <p>
          The Tuist organization is commited to do all of its work in the open.
          We develop tools and libraries mostly in Swift for anyone to use. We
          believe that{" "}
          <b>
            the key to productivity and great software is having the right tools
          </b>
          , so we'd like to empower developers to build them with the language
          they feel the most familiar, Swift.
        </p>
        <p>
          We are a welcoming and diverse group of developers that are passionate
          for Swift and open to share and learn from each other.
        </p>
        <p>
          In this page you'll find all the projects that we've developed and
          actively maintain.
        </p>
      </Main>
      <Footer />
    </Layout>
  );
};

export default OpenSourcePage;
