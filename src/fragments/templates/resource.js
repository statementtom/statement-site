import { graphql } from 'gatsby';

export const PrismicResourceFragment = graphql`
  fragment PrismicResourceFragment on PrismicResource {
    id
    data {
      description {
        text
      }
      title {
        text
      }
      form_snippet
      content {
        html
      }
      page_title {
        text
      }
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 700, maxHeight: 450, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        url
        alt
      }
      form_title {
        html
      }
      form_content {
        html
      }
      downloadable_media {
        url
      }
    }
  }
`