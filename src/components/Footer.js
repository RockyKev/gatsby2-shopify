import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

// Fix this component.
// import FooterMenu from "./FooterMenu";

const Footer = () => {
  const FooterWrapper = styled.div`
    color: white;
    padding: 5rem 3rem;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;

    div {
      flex: 1;
    }

    div:last-child {
      flex: 2;
    }
  `;

  const MenuColumn = styled.div`
    h2 {
      font-family: Amaranth;
    }

    h2::first-letter {
      text-decoration: underline;
    }

    ul {
      list-style-type: none;
      margin: 0;
    }

    li {
      font-size: 0.8rem;
      margin: 0;
    }
  `;

  const BottomText = styled.p`
    padding-top: 1rem;
    text-align: center;
    color: white;
    border-top: 2px white solid;
  `;

  return (
    <>
      <FooterWrapper>
        <MenuColumn>
          <h2> Our Stores </h2>
          <ul>
            <li>New York</li>
            <li>London</li>
            <li>Australia</li>
            <li>Chicago</li>
            <li>Las Vegas</li>
            <li>Canada</li>
          </ul>
        </MenuColumn>

        <MenuColumn>
          <h2> Information </h2>
          <ul>
            <li>About Store</li>
            <li>Newest Helmets</li>
            <li>Battle Helmets</li>
            <li>Motorcycle Helmets</li>
            <li>Space helmets</li>
            <li>Contact Us</li>
          </ul>
        </MenuColumn>

        <MenuColumn>
          <h2> Useful Links </h2>
          <ul>
            <li>Privacy Policy</li>
            <li>Gaurantee</li>
            <li>Terms & Conditions</li>
            <li>Careers</li>
            <li>Corporate</li>
            <li>Sitemap</li>
          </ul>
        </MenuColumn>

        <MenuColumn>
          <h2> Developer </h2>
          <ul>
            <li>Documentation</li>
            <li>API</li>
            <li>Dev Support</li>
            <li>Github</li>
            <li>Affiliates</li>
            <li>Data Collection</li>
          </ul>
        </MenuColumn>

        <MenuColumn>
          {" "}
          <h2> Headquarters </h2>
          <p>
            1000 Spokane Ave <br />
            Spokane, Wahington 12345{" "}
          </p>
          <p>
            © {new Date().getFullYear()}, Built with Stuff from
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </MenuColumn>
      </FooterWrapper>

      <BottomText> Made by Rocky Kev </BottomText>
    </>
  );
};

export default Footer;
