import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../containers/Layout";
import Banner from "../components/ui/Banner";
import Content from "../components/ui/Content";
import CareerDetails from "../components/ui/CareerDetails";
import CareerRelated from "../components/ui/CareerRelated";

import { PrismicCareerBodyBannerFragment } from "../components/ui/Banner/fragment";
import { PrismicCareerBodyCareerDetailsFragament } from "../components/ui/CareerDetails/fragment";
import { PrismicCareerBodyContentFragment } from "../components/ui/Content/fragment";
import { PrismicCareerBodyRelatedCareersFragment } from "../components/ui/CareerRelated/fragment";

export const pageQuery = graphql`
  query Career($uid: String) {
    site {
      siteMetadata {
        title
        description
      }
    }
    prismicCareer(uid: { eq: $uid }) {
      data {
        description {
          text
        }
        title {
          text
        }
        location
        date(formatString: "dddd Do MMMM YYYY")
        page_title {
          html
        }
        body {
          ... on PrismicCareerBodyBanner {
            ...PrismicCareerBodyBannerFragment
          }
          ... on PrismicCareerBodyCareerDetails {
            ...PrismicCareerBodyCareerDetailsFragament
          }
          ... on PrismicCareerBodyContent {
            ...PrismicCareerBodyContentFragment
          }
          ... on PrismicCareerBodyRelatedCareers {
            ...PrismicCareerBodyRelatedCareersFragment
          }
        }
      }
    }
  }
`;

const Career = ({
  data: {
    prismicCareer: { data },
    site: { siteMetadata: meta }
  }
}) => {
  const details = {
    date: data.date,
    location: data.location,
    pageTitle: data.page_title.html
  };
  const socialCardImage = data.body
    .find(section => section.slice_type === "banner")
    .primary.image.url.split("?")[0];
  return (
    <Layout>
      <Helmet
        htmlAttributes={{
          lang: `en`
        }}
        title={data.title && data.title.text ? data.title.text : meta.title}
        meta={[
          {
            name: `description`,
            content:
              data.description && data.description.text
                ? data.description.text
                : meta.description
          }
        ]}
      >
        <meta
          property="og:title"
          content={data.title && data.title.text ? data.title.text : meta.title}
        />
        <meta
          property="og:description"
          content={
            data.description && data.description.text
              ? data.description.text
              : meta.description
          }
        />
        <meta property="og:image" content={socialCardImage} />
        <meta property="og:image:secure_url" content={socialCardImage} />
        <meta
          property="og:url"
          content={typeof window !== "undefined" ? window.location.href : null}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content={meta.title} />
        <meta name="twitter:image:alt" content={meta.description} />
        <link
          rel="canonical"
          href={typeof window !== "undefined" ? window.location.href : null}
        />
      </Helmet>
      {data.body.map((section, index) => {
        if (section.slice_type === "banner") {
          return <Banner key={index} primary={section.primary} />;
        }
        if (section.slice_type === "career_details") {
          return <CareerDetails key={index} details={details} visible />;
        }
        if (section.slice_type === "content") {
          return <Content key={index} primary={section.primary} />;
        }
        if (section.slice_type === "related_careers") {
          return (
            <CareerRelated
              key={index}
              primary={section.primary}
              items={section.items}
            />
          );
        }
        return null;
      })}
    </Layout>
  );
};

Career.propTypes = {
  data: PropTypes.shape({
    prismicCareer: PropTypes.object.isRequired,
    site: PropTypes.object.isRequired
  })
};

export default Career;
