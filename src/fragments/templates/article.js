import { graphql } from 'gatsby';

export const PrismicArticleFragment = graphql`
  fragment PrismicArticleFragment on PrismicArticleData {
    page_title {
      html
    }
    author {
      text
    }
    description {
      text
    }
    title {
      text
    }
    date(formatString: "dddd Do MMMM YYYY")
  }
`;
