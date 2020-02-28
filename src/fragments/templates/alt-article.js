import { graphql } from 'gatsby';

export const PrismicAltArticleFragment = graphql`
  fragment PrismicAltArticleFragment on MarkdownRemark {
    frontmatter {
      author
      categories
      date(formatString: "dddd Do MMMM YYYY")
      tags
      featured_image
      meta {
        meta_description
        meta_title
      }
      title
    }
    html
  }
`;
