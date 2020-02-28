import { graphql } from 'gatsby';

export const PrismicContactFragment = graphql`
  fragment PrismicContactFragment on PrismicContact {
    data {
      content {
        html
      }
      description {
        text
      }
      title {
        text
      }
      body {
        slice_type
        id
        items {
          directions_label
          content {
            html
          }
          directions {
            text
          }
          number
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 350, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            alt
          }
        }
      }
    }
  }
`;
