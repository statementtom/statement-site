import { graphql } from 'gatsby';

export const PrismicPageBodyContentFragment = graphql`
  fragment PrismicPageBodyContentFragment on PrismicPageBodyContent {
    id
    slice_type
    primary {
      content {
        html
      }
    }
  }
`;

export const PrismicEventBodyContentFragment = graphql`
  fragment PrismicEventBodyContentFragment on PrismicEventBodyContent {
    id
    slice_type
    primary {
      content {
        html
      }
    }
  }
`;

export const PrismicCareerBodyContentFragment = graphql`
  fragment PrismicCareerBodyContentFragment on PrismicCareerBodyContent {
    id
    slice_type
    primary {
      content {
        html
      }
      link_label {
        text
      }
      link_url {
        url
      }
    }
  }
`;

export const PrismicArticleBodyContentFragment = graphql`
  fragment PrismicArticleBodyContentFragment on PrismicArticleBodyContent {
    id
    slice_type
    primary {
      content {
        html
      }
    }
  }
`;
