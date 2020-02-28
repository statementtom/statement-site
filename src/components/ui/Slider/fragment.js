import { graphql } from 'gatsby';

export const PrismicPageBodySliderFragment = graphql`
  fragment PrismicPageBodySliderFragment on PrismicPageBodySlider {
    id
    slice_type
    items {
      background_image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
      }
      slider_content {
        html
        text
      }
    }
  }
`;
