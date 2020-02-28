import { graphql } from 'gatsby';

export const PrismicPageBodyCareersListFragment = graphql`
  fragment PrismicPageBodyCareersListFragment on PrismicPageBodyCareersList {
    slice_type
    id
    items {
      career {
        document {
          uid
          type
          data {
            page_title {
              text
            }
            role {
              text
            }
            location
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
            date(formatString: "MMMM YYYY")
          }
        }
      }
    }
  }
`;
