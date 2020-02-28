import { graphql } from 'gatsby';

export const PrismicPageBodyEventListFragment = graphql`
  fragment PrismicPageBodyEventListFragment on PrismicPageBodyEventList {
    id
    slice_type
    items {
      event {
        document {
          data {
            end_time {
              text
            }
            start_time {
              text
            }
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
            title {
              text
            }
            location {
              text
            }
            date(formatString: "dddd Do MMMM YYYY")
          }
          uid
          type
        }
      }
    }
  }
`;
