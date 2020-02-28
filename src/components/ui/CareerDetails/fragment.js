import { graphql } from 'gatsby';

export const PrismicCareerBodyCareerDetailsFragament = graphql`
  fragment PrismicCareerBodyCareerDetailsFragament on PrismicCareerBodyCareerDetails {
    id
    slice_type
  }
`;
