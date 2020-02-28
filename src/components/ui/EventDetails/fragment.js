import { graphql } from 'gatsby';

export const PrismicEventBodyEventDetailsFragment = graphql`
  fragment PrismicEventBodyEventDetailsFragment on PrismicEventBodyEventDetails {
    id
    slice_type
  }
`;