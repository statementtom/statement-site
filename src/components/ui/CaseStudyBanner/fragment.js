import { graphql } from 'gatsby';

export const PrismicPageBodyCaseStudyBannerFragment = graphql`
  fragment PrismicPageBodyCaseStudyBannerFragment on PrismicPageBodyCaseStudySlider1 {
    id
    slice_type
    primary {
      remove_padding
      content {
        html
      }
      alternate_layout
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        alt
      }
    }
  }
`;

export const PrismicCaseBodyCaseStudySliderFragment = graphql`
  fragment PrismicCaseBodyCaseStudySliderFragment on PrismicCaseBodyCaseStudySlider {
    id
    slice_type
    primary {
      remove_padding
      content {
        html
      }
      alternate_layout
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        alt
      }
    }
  }
`;
