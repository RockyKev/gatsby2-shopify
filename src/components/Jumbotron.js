import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import styled from "styled-components";

const Jumbotron = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mass-effect-space.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const JumboWrapper = styled.div`
    position: relative;

    article {
      position: absolute;
      left: 70%; /* horizontal alignment */
      top: 30%; /* vertical alignment */
      transform: translate(-50%, -50%);
      color: white;
    }

    .italics {
      font-style: italic;
    }

    .center {
      text-align: center;
    }

    button {
     display:inline-block;
     padding:0.35em 1.2em;
     border:0.1em solid #FFFFFF;
     margin:0 0.3em 0.3em 0;
     border-radius:0.12em;
     box-sizing: border-box;
     text-decoration:none;
     text-align:center;
     transition: all 0.2s;
      background: rgba(0, 0, 0, 0.1);
      color: white;
      font-size: 1.2rem;
    }
 
   button:hover{
     color:#000000;
     background-color:#FFFFFF;
    }
    @media all and (max-width:30em){
      button {
    display:block;
    margin:0.4em auto;
      }
    }
    }
  `;

  return (
    <JumboWrapper>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <article>
        <h1> Your Mask is your Symbol </h1>
        <p>
          As a man, I’m flesh and blood; I can be ignored, I can be destroyed.
          But as a symbol… as a symbol I can be incorruptible. I can be
          everlasting.
        </p>
        <p>
          <span className="italics">-Bruce Wayne</span>
        </p>
        <div className="center">
          <button>Buy Hero Helmets</button>
        </div>
      </article>
    </JumboWrapper>
  );
};

export default Jumbotron;
