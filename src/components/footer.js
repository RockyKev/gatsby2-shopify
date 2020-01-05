import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Footer = () => (
  <div>
    © {new Date().getFullYear()}, Built with Stuff from
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </div>
);

export default Footer;
