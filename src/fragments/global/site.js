import { graphql } from 'gatsby';

export const SiteFragment = graphql`
  fragment SiteFragment on Site {
    siteMetadata {
      title
      description
      siteUrl
      httpSiteUrl
    }
  }
`;
