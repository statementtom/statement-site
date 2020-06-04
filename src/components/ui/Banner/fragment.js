import { graphql } from "gatsby";

export const PageBodyBannerFragment = graphql`
  fragment PageBodyBannerFragment on PrismicPageBodyBanner {
    id
    slice_type
    primary {
      content {
        html
      }
      hide_scroll
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

export const PrismicEventBodyBannerFragment = graphql`
  fragment PrismicEventBodyBannerFragment on PrismicEventBodyBanner {
    id
    slice_type
    primary {
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

export const PrismicCaseBodyBannerFragment = graphql`
  fragment PrismicCaseBodyBannerFragment on PrismicCaseBodyBanner {
    id
    slice_type
    primary {
      content {
        html
      }
      hide_scroll
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        url
        alt
      }
    }
  }
`;

export const PrismicCareerBodyBannerFragment = graphql`
  fragment PrismicCareerBodyBannerFragment on PrismicCareerBodyBanner {
    id
    slice_type
    primary {
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        url
        alt
      }
    }
  }
`;

export const PrismicArticleBodyBannerFragment = graphql`
  fragment PrismicArticleBodyBannerFragment on PrismicArticleBodyBanner {
    id
    primary {
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        url
        alt
      }
    }
    slice_type
  }
`;
