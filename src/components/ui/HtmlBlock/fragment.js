import { graphql } from 'gatsby';

export const PrismicPageBodyHtmlFragment = graphql`
  fragment PrismicPageBodyHtmlFragment on PrismicPageBodyHtml {
    id
    slice_type
    primary {
      html {
        html
        text
      }
    }
  }
`;