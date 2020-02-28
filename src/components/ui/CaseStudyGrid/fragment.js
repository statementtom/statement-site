import { graphql } from 'gatsby';

export const PrismicPageBodyCaseStudyGridFragment = graphql`
  fragment PrismicPageBodyCaseStudyGridFragment on PrismicPageBodyCaseStudyGrid {
    slice_type
    items {
      content {
        html
      }
      link {
        uid
        type
      }
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`