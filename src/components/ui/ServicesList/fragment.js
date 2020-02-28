import { graphql } from 'gatsby';

export const PrismicPageBodyServicesListFragment = graphql`
  fragment PrismicPageBodyServicesListFragment on PrismicPageBodyServicesList {
    id
    slice_type
    primary {
      content {
        html
      }
    }
    items {
      content {
        html
      }
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 350, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
      }
      cta_text
      cta_link {
        uid
        type
      }
    }
  }
`;

export const PrismicCaseBodyServicesListFragment = graphql`
  fragment PrismicCaseBodyServicesListFragment on PrismicCaseBodyServicesList {
    id
    slice_type
    primary {
      content {
        html
      }
    }
    items {
      content {
        html
      }
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 350, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
      }
      cta_text
      cta_link {
        uid
        type
      }
    }
  }
`;
