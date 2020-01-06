import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import Logo from "./logo";

const HeaderBar = styled.header`
  background: rgba(0, 0, 0, 1);

  div {
    font-family: Amaranth;
    margin: 0 auto;
    max-width: 960px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      list-style-type: none;
      margin: 0;

      li {
        display: inline;
        padding: 0 10px;

        a {
          text-decoration: none;
          text-transform: uppercase;
          color: white;
        }
      }
    }

    h1 {
      font-size: 50px;
      margin: 0;
      font-family: Amaranth;
    }
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderBar>
    <div>
      <ul>
        <li>
          <Link to="#">Home</Link>
        </li>
        <li>
          <Link to="#">Shop</Link>
        </li>
        <li>
          <Link to="#">Monthly</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
      </ul>

      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
          {/* <Logo /> */}
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="#">Search</Link>
        </li>
        <li>
          <Link to="#">Sign In/Register</Link>
        </li>
      </ul>
    </div>
  </HeaderBar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

{
  /* <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  > */
}

// <div
//     style={{
//       margin: `0 auto`,
//       maxWidth: 960,
//       padding: `1.45rem 1.0875rem`,
//     }}
//   >
//     <h1 style={{ margin: 0 }}>
//       <Link
//         to="/"
//         style={{
//           color: `white`,
//           textDecoration: `none`,
//         }}
//       >
//         {siteTitle}
//       </Link>
//     </h1>
//   </div>
// </header>
