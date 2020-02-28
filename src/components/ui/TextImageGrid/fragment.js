import { graphql } from 'gatsby';

export const PrismicCaseBodyTextImageGridFragment = graphql`
  fragment PrismicCaseBodyTextImageGridFragment on PrismicCaseBodyTextImageGrid {
    id
    slice_type
    items {
      content {
        html
      }
      main_image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        alt
      }
      small_image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        alt
      }
    }
  }
`;
