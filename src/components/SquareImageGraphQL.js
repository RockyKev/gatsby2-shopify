import { graphql } from "gatsby";

// https://www.gatsbyjs.org/docs/working-with-images/
export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
