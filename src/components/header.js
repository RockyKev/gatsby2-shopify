import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const HeaderBar = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;

  div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.08rem;

    h1 {
      background: blue;
      font-size: 50px;
    }
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderBar>
    <div>
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
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
