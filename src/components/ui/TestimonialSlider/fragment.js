import { graphql } from 'gatsby';

export const PrismicPageBodyTestimonialSliderFragment = graphql`
  fragment PrismicPageBodyTestimonialSliderFragment on PrismicPageBodyTestimonialSlider {
    id
    slice_type
    primary {
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    items {
      content {
        text
      }
      person {
        text
      }
      image {
        alt
        url
      }
    }
  }
`