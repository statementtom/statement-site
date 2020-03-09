import { graphql } from 'gatsby';

export const PrismicPageBodyTextWithImageAlternateFragment = graphql`
  fragment PrismicPageBodyTextWithImageAlternateFragment on PrismicPageBodyTextWithImageAlternate {
    id
    slice_type
    primary {
      alternate_layout
      alternate_spacing
      subheading {
        text
      }
      content {
        html
      }
      image {
        localFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`