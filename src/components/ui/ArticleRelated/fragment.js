import { graphql } from 'gatsby';

export const PrismicArticleBodyRelatedArticlesFragment = graphql`
  fragment PrismicArticleBodyRelatedArticlesFragment on PrismicArticleBodyRelatedArticles {
    id
    slice_type
    primary {
      content {
        html
      }
    }
    items {
      article {
        document {
          uid
          type
          data {
            page_title {
              text
            }
            date(formatString: "dddd Do MMMM YYYY")
            postUrl: date(formatString: "YYYY/MM")
            list_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600, maxHeight: 350, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              alt
            }
          }
        }
      }
    }
  }
`;
