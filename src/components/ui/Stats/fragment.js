import { graphql } from 'gatsby';

export const PrismicPageBodyStatsFragment = graphql`
  fragment PrismicPageBodyStatsFragment on PrismicPageBodyStats {
    id
    slice_type
    items {
      content {
        html
      }
      figure {
        html
      }
    }
  }
`;

export const PrismicCaseBodyStatsFragment = graphql`
  fragment PrismicCaseBodyStatsFragment on PrismicCaseBodyStats {
    id
    slice_type
    items {
      content {
        html
      }
      figure {
        html
      }
    }
  }
`;
