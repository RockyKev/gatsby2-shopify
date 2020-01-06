import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { StoreContext, client } from "../context/StoreContext";
import "./layout.css";

const Layout = ({ children }) => {
  const ContentWrapper = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 0px 1.08rem 1.45rem;
    padding-top: 0px;
  `;

  return (
    <StoreContext.Provider value={{ client }}>
      <ContentWrapper>
        {/* SHOW THIS - DEFAULT JSX CSS
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      > */}

        <main>{children}</main>
      </ContentWrapper>
    </StoreContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
