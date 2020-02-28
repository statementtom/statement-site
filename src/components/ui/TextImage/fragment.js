import { graphql } from 'gatsby';

export const PrismicPageBodyTextWithImageFragment = graphql`
  fragment PrismicPageBodyTextWithImageFragment on PrismicPageBodyTextWithImage {
    id
    slice_type
    primary {
      alternate_layout
      alternate_version
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