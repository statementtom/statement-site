import { graphql } from 'gatsby';

export const PrismicPageBodyContentGridFragment = graphql`
  fragment PrismicPageBodyContentGridFragment on PrismicPageBodyContentGrid {
    id
    slice_type
    items {
      content {
        html
      }
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
      }
      link_label {
        text
      }
      link_url {
        type
        uid
      }
    }
  }
`;
