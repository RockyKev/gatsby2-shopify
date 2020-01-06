import React from "react";
import styled from "styled-components";

import backgroundVideo from "../images/coverr-sparks-of-bonfire-1573980240958.mp4";
import backgroundImage from "../images/coverr-sparks-of-bonfire-1573980240958.jpg";

const TextSection = styled.section`
  text-align: center;
  font-family: Amaranth;
  color: white;
  padding-top: 4rem;
`;

const StyledButton = styled.div`
  text-align: center;

  button {
     display: inline-block;
     padding: 0.35em 1.2em;
     border: 0.1em solid #ffffff;
     margin: 0 0.3em 0.3em 0;
     border-radius: 0.12em;
     box-sizing: border-box;
     text-decoration: none;
     text-align: center;
     transition: all 0.2s;
    background: rgba(0, 0, 0, 0.1);
    color: white;
    font-size: 1.2rem;
  }
`;

const Gaurantee = () => {
  return (
    <>
      <TextSection>
        <h2>Ready to put on your Game Face?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          porta dictum turpis, eu mollis justo gravida ac. Proin non eros
          blandit, rutrum est a, cursus quam.
        </p>
        <StyledButton>
          <button>Buy Hero Helmets</button>
        </StyledButton>
      </TextSection>

      {/* <video id="videoBG" poster={backgroundImage} autoplay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
      </video> */}
    </>
  );
};

export default Gaurantee;
