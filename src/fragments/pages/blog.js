import { graphql } from 'gatsby';

export const PrismicBlogFragment = graphql`
  fragment PrismicBlogFragment on PrismicBlog {
    data {
      description {
        text
      }
      title {
        text
      }
      featured {
        featured_image {
          alt
          url
        }
      }
      body {
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
    }
  }
`;

export const BlogImageEdgeFragment = graphql`
  fragment BlogImageEdgeFragment on FileEdge {
    node {
      id
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 350, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export const LegacyBlogEdgeFragment = graphql`
  fragment LegacyBlogEdgeFragment on MarkdownRemarkEdge {
    node {
      id
      html
      fileAbsolutePath
      frontmatter {
        date(formatString: "dddd Do MMMM YYYY")
        postUrl: date(formatString: "YYYY/MM")
        title
        author
        tags
        meta {
          meta_description
          meta_title
        }
        title
      }
    }
  }
`;

export const ModernBlogEdgeFragment = graphql`
  fragment ModernBlogEdgeFragment on PrismicArticleEdge {
    node {
      uid
      type
      id
      data {
        date(formatString: "dddd Do MMMM YYYY")
        postUrl: date(formatString: "YYYY/MM")
        page_title {
          text
        }
        categories {
          label
          tag
        }
        list_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 600, maxHeight: 350, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
      }
    }
  }
`;

export const BlogFallbackImageFragment = graphql`
  fragment BlogFallbackImageFragment on FileEdge {
    node {
      id
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 350, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export const FilterBannerImageFragment = graphql`
  fragment FilterBannerImageFragment on File {
    id
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const BlogFallbackBannerImageFragment = graphql`
  fragment BlogFallbackBannerImageFragment on FileEdge {
    node {
      id
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
