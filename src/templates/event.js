// Modules
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// Containers
import Layout from '../containers/Layout';

// UI Components
import Banner from '../components/ui/Banner';
// import EventDetails from '../components/ui/EventDetails';
import Content from '../components/ui/Content';
// import EventBooking from '../components/ui/EventBooking';

// Site Level GraphQL Fragments
import { SiteFragment } from '../fragments/global/site';

// Component Level GraphQL Fragments
import { PrismicEventBodyContentFragment } from '../components/ui/Content/fragment';
import { PrismicEventBodyBannerFragment } from '../components/ui/Banner/fragment';
import { PrismicEventBodyEventDetailsFragment } from '../components/ui/EventDetails/fragment';

export const pageQuery = graphql`
  query Event($uid: String) {
    site {
      ...SiteFragment
    }
    prismicEvent(uid: { eq: $uid }) {
      data {
        ...PrismicEventFragment
        body {
          ... on PrismicEventBodyContent {
            ...PrismicEventBodyContentFragment
          }
          ... on PrismicEventBodyBanner {
            ...PrismicEventBodyBannerFragment
          }
          ... on PrismicEventBodyEventDetails {
            ...PrismicEventBodyEventDetailsFragment
          }
          # ... on PrismicEventBodyBooking {
          #   id
          #   slice_type
          #   primary {
          #     content {
          #       html
          #     }
          #     link_label {
          #       text
          #     }
          #     link_url {
          #       url
          #     }
          #   }
          # }
        }
      }
    }
  }
`;

const Event = ({
  data: {
    prismicEvent: { data },
    site: { siteMetadata: meta },
  },
}) => (
    // let details = null;
    // if (
    //   data.date &&
    //   data.start_time &&
    //   data.start_time.text &&
    //   data.end_time &&
    //   data.end_time.text &&
    //   data.location &&
    //   data.location.text
    // ) {
    //   details = {
    //     date: data.date,
    //     startTime: data.start_time.text,
    //     endTime: data.end_time.text,
    //     title: data.title.text,
    //     location: data.location.text,
    //   };
    // }

    <Layout>
      <Helmet
        htmlAttributes={{
          lang: `en`,
        }}
        title={data.title && data.title.text ? data.title.text : meta.title}
        meta={[
          {
            name: `description`,
            content:
              data.description && data.description.text
                ? data.description.text
                : meta.description,
          },
        ]}
      >
        <script
          defer
          src="https://statement346.activehosted.com/f/embed.php?id=20"
        />
      </Helmet>
      {data.body.map((section, index) => {
        if (section.slice_type === 'banner') {
          return <Banner key={index} primary={section.primary} />;
        }
        // if (section.slice_type === 'event_details') {
        //   if (details) {
        //     return <EventDetails key={index} visible details={details} />;
        //   }
        //   return null;
        // }
        if (section.slice_type === 'content') {
          return (
            <Content key={index} primary={section.primary} event marketing />
          );
        }
        // if (section.slice_type === 'booking') {
        //   return <EventBooking key={index} primary={section.primary} />;
        // }
        return null;
      })}
    </Layout>
  );
Event.propTypes = {
  data: PropTypes.shape({
    prismicEvent: PropTypes.object.isRequired,
    site: PropTypes.object.isRequired,
  }),
};

export default Event;
