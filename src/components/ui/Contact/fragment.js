import { graphql } from 'gatsby';

export const PrismicPageBodyContactFragment = graphql`
  fragment PrismicPageBodyContactFragment on PrismicPageBodyContact {
    id
    slice_type
    primary {
      content {
        html
      }
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
      }
      link_label {
        text
      }
      link_url {
        uid
        type
      }
    }
  }
`;

export const PrismicCaseBodyContactragment = graphql`
  fragment PrismicCaseBodyContactragment on PrismicCaseBodyContact {
    id
    slice_type
    primary {
      content {
        html
      }
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
      }
      link_label {
        text
      }
      link_url {
        uid
        type
      }
    }
  }
`;
