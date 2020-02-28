import { graphql } from 'gatsby';

export const PrismicEventFragment = graphql`
  fragment PrismicEventFragment on PrismicEventData {
    description {
      text
    }
    title {
      text
    }
    end_time {
      text
    }
    location {
      text
    }
    start_time {
      text
    }
    title {
      text
    }
    date(formatString: "dddd Do MMMM YYYY")
  }
`;
