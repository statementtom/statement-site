import { graphql } from 'gatsby';

export const PrismicPageBodyTextWithMapsFrament = graphql`
  fragment PrismicPageBodyTextWithMapsFrament on PrismicPageBodyTextWithMaps {
    id
    slice_type
    primary {
      label
      content {
        html
      }
      location_label
      location_image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 350, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
      }
      location_directions {
        text
      }
      location_content {
        html
      }
    }
  }
`;
