import { graphql } from 'gatsby';

export const PrismicPageBodySplitTextFragment = graphql`
  fragment PrismicPageBodySplitTextFragment on PrismicPageBodySplitText {
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
      content {
        html
      }
      remove_padding
      heading {
        html
      }
    }
  }
`;
