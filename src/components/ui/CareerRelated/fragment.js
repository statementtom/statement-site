import { graphql } from 'gatsby';

export const PrismicCareerBodyRelatedCareersFragment = graphql`
  fragment PrismicCareerBodyRelatedCareersFragment on PrismicCareerBodyRelatedCareers {
    id
    slice_type
    primary {
      content {
        html
      }
    }
    items {
      career {
        url
        document {
          data {
            list_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600, maxHeight: 350, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
            }
            role {
              text
            }
          }
        }
      }
    }
  }
`;
