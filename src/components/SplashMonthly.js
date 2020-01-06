import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import backgroundImage from "../images/bkgd-test.jpg";

const Title = styled.h2`
  text-align: center;
  font-family: Amaranth;
  color: white;
  font-size: 2.2rem;
  padding-top: 4rem;
`;

const Header = styled.div`
  ${"" /* display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  color: white;
  background: url(${backgroundImage}) no-repeat fixed center;
  background-size: 100% 100%; */}

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  flex-wrap: wrap;
  background: url(${backgroundImage}) no-repeat fixed center;
  background-size: 100% 100%;

  img {
    max-width: 90%;
  }

  section {
    width: 50%;
    padding: 2rem;
  }
`;

const SplashMonthly = () => {
  const ImageQuery = useStaticQuery(graphql`
    query MonthlyImagesQuery {
      allFile(filter: { name: { regex: "/monthly/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {console.log("imagequery --> ", ImageQuery)}

      {/* <Img fluid={ImageQuery.fileNameMonthly1.childImageSharp.fluid} /> */}
      <Title>Heroes live and die. Icons become forever.</Title>
      <Header>
        <section>
          <h3> Helmet of the Month </h3>
          <p>
            GW2 will never satisfy you for the rest of your life; you have to
            move on to other games to rid your soul of the demons. That meant
            ditching my Sentinel soul, scaling back on my Shaman talents, and
            weaving in a very strong dose of Justicar. By that, I mean, they’ve
            decided to leave and we aren’t going to go follow and beg them to
            reconsider. I also had a pop at the jumping puzzle near the start
            and boy did it frustrate the bejesus out of me!
          </p>
          <h4>Never faulter!</h4>
          <p>
            This year LOTRO has a brand new festival that falls between the
            Spring and Summer festivals called the Farmer’s Faire. Now, there’s
            a very lore-centric reason that Turbine chose to exclude female
            dwarves, and it’s not that they don’t exist. At each newly arrived
            star system there are a number of things to do.
          </p>
        </section>

        <section>
          <Img fluid={ImageQuery.allFile.edges[0].node.childImageSharp.fluid} />
        </section>
        <section>
          {" "}
          <Img
            fluid={ImageQuery.allFile.edges[1].node.childImageSharp.fluid}
          />{" "}
        </section>
        <section>
          <h3> Bring your A Game</h3>
          <p>
            GW2 will never satisfy you for the rest of your life; you have to
            move on to other games to rid your soul of the demons. That meant
            ditching my Sentinel soul, scaling back on my Shaman talents, and
            weaving in a very strong dose of Justicar. By that, I mean, they’ve
            decided to leave and we aren’t going to go follow and beg them to
            reconsider. I also had a pop at the jumping puzzle near the start
            and boy did it frustrate the bejesus out of me!
          </p>
          <h4>No limits. </h4>
          <p>
            This year LOTRO has a brand new festival that falls between the
            Spring and Summer festivals called the Farmer’s Faire. Now, there’s
            a very lore-centric reason that Turbine chose to exclude female
            dwarves, and it’s not that they don’t exist. At each newly arrived
            star system there are a number of things to do.
          </p>
        </section>
        <section>
          <h3> Durable. Solid. What every hero needs. </h3>
          <p>
            GW2 will never satisfy you for the rest of your life; you have to
            move on to other games to rid your soul of the demons. That meant
            ditching my Sentinel soul, scaling back on my Shaman talents, and
            weaving in a very strong dose of Justicar. By that, I mean, they’ve
            decided to leave and we aren’t going to go follow and beg them to
            reconsider. I also had a pop at the jumping puzzle near the start
            and boy did it frustrate the bejesus out of me!
          </p>
          <h4>Protect and Defend.</h4>
          <p>
            This year LOTRO has a brand new festival that falls between the
            Spring and Summer festivals called the Farmer’s Faire. Now, there’s
            a very lore-centric reason that Turbine chose to exclude female
            dwarves, and it’s not that they don’t exist. At each newly arrived
            star system there are a number of things to do.
          </p>
        </section>
        <section>
          {" "}
          <Img
            fluid={ImageQuery.allFile.edges[2].node.childImageSharp.fluid}
          />{" "}
        </section>
      </Header>
    </>
  );
};

export default SplashMonthly;

// const ImageQuery = useStaticQuery(graphql`
// query MonthlyImagesQuery {
//   allFile(filter: { name: { regex: "/monthly/" } }) {
//     edges {
//       node {
//         childImageSharp {
//           fluid(maxWidth: 500) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// }
// `);

// const ImageQuery = useStaticQuery(graphql`
// query MonthlyImagesQuery {
//   fileNameMonthly1: file(relativePath: { eq: "monthly1_1.jpg" }) {
//     childImageSharp {
//       fluid(maxWidth: 400) {
//         # src
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
//   fileNameMonthly2: file(relativePath: { eq: "monthly1_2.jpeg" }) {
//     childImageSharp {
//       fluid(maxWidth: 400) {
//         # src
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
//   fileNameMonthly3: file(relativePath: { eq: "monthly1_3.jpeg" }) {
//     childImageSharp {
//       fluid(maxWidth: 400) {
//         # src
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// }
// `);
