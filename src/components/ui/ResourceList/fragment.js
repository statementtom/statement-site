import { graphql } from 'gatsby';

export const PrismicPageBodyResourceListFragment = graphql`
  fragment PrismicPageBodyResourceListFragment on PrismicPageBodyResourceList {
    id
    slice_type
    items {
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      resource {
        document {
          uid
          type
          data {
            content {
              html
            }
            page_title {
              text
            }
            description {
              html
            }
            filters {
              filter_label
            }
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600, maxHeight: 350, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              alt
            }
          }
        }
      }
    }
  }
`;
