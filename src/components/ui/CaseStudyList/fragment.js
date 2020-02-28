import { graphql } from 'gatsby';

export const PrismicPageBodyCaseStudiesFragment = graphql`
  fragment PrismicPageBodyCaseStudiesFragment on PrismicPageBodyCaseStudies {
    id
    slice_type
    items {
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      heading {
        html
      }
      excerpt {
        html
      }
      link {
        uid
        type
      }
    }
  }
`;
