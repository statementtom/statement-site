import { graphql } from 'gatsby';

export const PrismicArticleBodyArticleDetailsFragament = graphql`
  fragment PrismicArticleBodyArticleDetailsFragament on PrismicArticleBodyArticleDetails {
    id
    slice_type
  }
`;
