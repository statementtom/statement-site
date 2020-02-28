import { graphql } from 'gatsby';

export const PrismicPageBodyFullWidthLogoListFragment = graphql`
  fragment PrismicPageBodyFullWidthLogoListFragment on PrismicPageBodyFullWidthLogoList {
    id
    slice_type
    primary {
      content {
        html
      }
    }
    items {
      logo {
        url
        alt
      }
      link {
        url
      }
    }
  }
`;
