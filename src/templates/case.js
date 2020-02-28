import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../containers/Layout';

import Contact from '../components/ui/Contact';
import Banner from '../components/ui/Banner';
// import Stats from '../components/ui/Stats';
import Testimonial from '../components/ui/Testimonial';
import TextImageGrid from '../components/ui/TextImageGrid';
import CaseStudyBanner from '../components/ui/CaseStudyBanner';
import ServicesList from '../components/ui/ServicesList';

import { PrismicCaseBodyBannerFragment } from '../components/ui/Banner/fragment';
import { PrismicCaseBodyContactragment } from '../components/ui/Contact/fragment';
import { PrismicCaseBodyStatsFragment } from '../components/ui/Stats/fragment';
import { PrismicCaseBodyTestimonialFragment } from '../components/ui/Testimonial/fragment';
import { PrismicCaseBodyTextImageGridFragment } from '../components/ui/TextImageGrid/fragment';
import { PrismicCaseBodyCaseStudySliderFragment } from '../components/ui/CaseStudyBanner/fragment';
import { PrismicCaseBodyServicesListFragment } from '../components/ui/ServicesList/fragment';

export const pageQuery = graphql`
  query Case($uid: String) {
    site {
      siteMetadata {
        title
        description
      }
    }
    prismicCase(uid: { eq: $uid }) {
      data {
        description {
          text
        }
        title {
          text
        }
        category
        site_link
        body {
          ... on PrismicCaseBodyBanner {
            ...PrismicCaseBodyBannerFragment
          }
          ... on PrismicCaseBodyContact {
            ...PrismicCaseBodyContactragment
          }
          ... on PrismicCaseBodyStats {
            ...PrismicCaseBodyStatsFragment
          }
          ... on PrismicCaseBodyTestimonial {
            ...PrismicCaseBodyTestimonialFragment
          }
          ... on PrismicCaseBodyTextImageGrid {
            ...PrismicCaseBodyTextImageGridFragment
          }
          ... on PrismicCaseBodyCaseStudySlider {
            ...PrismicCaseBodyCaseStudySliderFragment
          }
          ... on PrismicCaseBodyServicesList {
            ...PrismicCaseBodyServicesListFragment
          }
        }
      }
    }
  }
`;

const Case = ({
  data: {
    prismicCase: { data },
    site: { siteMetadata: meta },
  },
}) => {
  const socialCardImage = data.body
    .find(section => section.slice_type === 'banner')
    .primary.image.url.split('?')[0];
  return (
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
        <meta property="og:image" content={socialCardImage} />
        <meta property="og:image:secure_url" content={socialCardImage} />
        <meta
          property="og:url"
          content={typeof window !== 'undefined' ? window.location.href : null}
        />
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content={meta.title} />
        <meta name="twitter:image:alt" content={meta.description} />
        <link
          rel="canonical"
          href={typeof window !== 'undefined' ? window.location.href : null}
        />
      </Helmet>
      {data.body.map((section, index) => {
        if (section.slice_type === 'banner') {
          return (
            <Banner
              key={index}
              category={data.category}
              primary={section.primary}
              siteLink={data.site_link}
            />
          );
        }
        if (section.slice_type === 'contact') {
          return <Contact key={index} primary={section.primary} />;
        }
        if (section.slice_type === 'testimonial') {
          return <Testimonial key={index} primary={section.primary} />;
        }
        // if (section.slice_type === 'stats') {
        //   return (
        //     <Stats
        //       key={index}
        //       items={section.items}
        //       size="medium"
        //       background="#f5f5f5"
        //     />
        //   );
        // }
        if (section.slice_type === 'text_image_grid') {
          return <TextImageGrid key={index} items={section.items} />;
        }
        if (section.slice_type === 'case_study_slider') {
          return <CaseStudyBanner key={index} primary={section.primary} />;
        }
        if (section.slice_type === 'services_list') {
          return (
            <ServicesList
              key={`${section.id}-${index}`}
              items={section.items}
              primary={section.primary}
            />
          );
        }
        return null;
      })}
    </Layout>
  );
};

Case.propTypes = {
  data: PropTypes.shape({
    prismicCase: PropTypes.object.isRequired,
    site: PropTypes.object.isRequired,
  }),
};

export default Case;
