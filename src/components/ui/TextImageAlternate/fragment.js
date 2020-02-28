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
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`