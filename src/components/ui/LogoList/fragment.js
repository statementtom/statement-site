import { graphql } from 'gatsby';

export const PrismicPageBodyLogoListFragment = graphql`
  fragment PrismicPageBodyLogoListFragment on PrismicPageBodyLogoList {
    id
    slice_type
    primary {
      remove_padding
      content {
        html
      }
      link {
        uid
        type
      }
      link_label {
        text
      }
    }
    items {
      logo {
        url
        alt
      }
      link {
        document {
          id
        }
        uid
        type
      }
    }
  }
`;
