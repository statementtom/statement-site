import { graphql } from 'gatsby';

export const PrismicCaseBodyTestimonialFragment = graphql`
  fragment PrismicCaseBodyTestimonialFragment on PrismicCaseBodyTestimonial {
    id
    slice_type
    primary {
      content {
        html
      }
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        alt
      }
      person {
        text
      }
    }
  }
`;
