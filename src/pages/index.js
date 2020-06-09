// Modules
import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

// Containers
import Layout from "../containers/Layout";

// UI Components
import Slider from "../components/ui/Slider";
import Banner from "../components/ui/Banner";
import LogoList from "../components/ui/LogoList";
import TextImage from "../components/ui/TextImage";
import TextImageAlternate from "../components/ui/TextImageAlternate";
import CaseStudyList from "../components/ui/CaseStudyList";
import Stats from "../components/ui/Stats";
import TestimonialSlider from "../components/ui/TestimonialSlider";
import FullWidthLogoList from "../components/ui/FullWidthLogoList";
import Contact from "../components/ui/Contact";
import SplitText from "../components/ui/SplitText";
import EventList from "../components/ui/EventList";
import ContentGrid from "../components/ui/ContentGrid";
import CareersList from "../components/ui/CareersList";
import ResourceList from "../components/ui/ResourceList";
import ServicesList from "../components/ui/ServicesList";
import TextMaps from "../components/ui/TextMaps";
import Content from "../components/ui/Content";
import CaseStudyGrid from "../components/ui/CaseStudyGrid";
import CaseStudyBanner from "../components/ui/CaseStudyBanner";

// Component Level GraphQL Fragments
import { PageBodyBannerFragment } from "../components/ui/Banner/fragment";
import { PrismicPageBodyTextWithImageFragment } from "../components/ui/TextImage/fragment";
import { PrismicPageBodyTextWithImageAlternateFragment } from "../components/ui/TextImageAlternate/fragment";
import { PrismicPageBodyStatsFragment } from "../components/ui/Stats/fragment";
import { PrismicPageBodyTestimonialSliderFragment } from "../components/ui/TestimonialSlider/fragment";
import { PrismicPageBodyCaseStudyGridFragment } from "../components/ui/CaseStudyGrid/fragment";
import { PrismicPageBodyFullWidthLogoListFragment } from "../components/ui/FullWidthLogoList/fragment";
import { PrismicPageBodyContactFragment } from "../components/ui/Contact/fragment";
import { PrismicPageBodyCaseStudiesFragment } from "../components/ui/CaseStudyList/fragment";
import { PrismicPageBodySplitTextFragment } from "../components/ui/SplitText/fragment";
import { PrismicPageBodyEventListFragment } from "../components/ui/EventList/fragment";
import { PrismicPageBodyContentGridFragment } from "../components/ui/ContentGrid/fragment";
import { PrismicPageBodyCareersListFragment } from "../components/ui/CareersList/fragment";
import { PrismicPageBodyResourceListFragment } from "../components/ui/ResourceList/fragment";
import { PrismicPageBodyServicesListFragment } from "../components/ui/ServicesList/fragment";
import { PrismicPageBodyTextWithMapsFrament } from "../components/ui/TextMaps/fragment";
import { PrismicPageBodyContentFragment } from "../components/ui/Content/fragment";
import { PrismicPageBodySliderFragment } from "../components/ui/Slider/fragment";
import { PrismicPageBodyLogoListFragment } from "../components/ui/LogoList/fragment";
import { PrismicPageBodyCaseStudyBannerFragment } from "../components/ui/CaseStudyBanner/fragment";

export const pageQuery = graphql`
  query Home {
    site {
      siteMetadata {
        title
        description
      }
    }
    prismicPage(uid: { eq: "home" }) {
      data {
        description {
          text
        }
        title {
          text
        }
        body {
          ... on PrismicPageBodyBanner {
            ...PageBodyBannerFragment
          }
          ... on PrismicPageBodyTextWithImage {
            ...PrismicPageBodyTextWithImageFragment
          }
          ... on PrismicPageBodyTextWithImageAlternate {
            ...PrismicPageBodyTextWithImageAlternateFragment
          }
          ... on PrismicPageBodyStats {
            ...PrismicPageBodyStatsFragment
          }
          ... on PrismicPageBodyTestimonialSlider {
            ...PrismicPageBodyTestimonialSliderFragment
          }
          ... on PrismicPageBodyCaseStudyGrid {
            ...PrismicPageBodyCaseStudyGridFragment
          }
          ... on PrismicPageBodyFullWidthLogoList {
            ...PrismicPageBodyFullWidthLogoListFragment
          }
          ... on PrismicPageBodyContact {
            ...PrismicPageBodyContactFragment
          }
          ... on PrismicPageBodyCaseStudies {
            ...PrismicPageBodyCaseStudiesFragment
          }
          ... on PrismicPageBodySplitText {
            ...PrismicPageBodySplitTextFragment
          }
          ... on PrismicPageBodyEventList {
            ...PrismicPageBodyEventListFragment
          }
          ... on PrismicPageBodyContentGrid {
            ...PrismicPageBodyContentGridFragment
          }
          ... on PrismicPageBodyCareersList {
            ...PrismicPageBodyCareersListFragment
          }
          ... on PrismicPageBodyResourceList {
            ...PrismicPageBodyResourceListFragment
          }
          ... on PrismicPageBodyServicesList {
            ...PrismicPageBodyServicesListFragment
          }
          ... on PrismicPageBodyTextWithMaps {
            ...PrismicPageBodyTextWithMapsFrament
          }
          ... on PrismicPageBodyContent {
            ...PrismicPageBodyContentFragment
          }
          ... on PrismicPageBodySlider {
            ...PrismicPageBodySliderFragment
          }
          ... on PrismicPageBodyLogoList {
            ...PrismicPageBodyLogoListFragment
          }
          ... on PrismicPageBodyCaseStudySlider1 {
            ...PrismicPageBodyCaseStudyBannerFragment
          }
          ... on PrismicPageBodyActiveCampaignForm {
            id
            slice_type
            primary {
              form_snippet
            }
          }
        }
      }
    }
  }
`;

const Home = ({
  data: {
    prismicPage: { data },
    site: { siteMetadata: meta }
  }
}) => {
  const activeCampaign =
    data.body.length > 0 &&
    data.body.find(section => section.slice_type === "active_campaign_form");
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
        {activeCampaign && Object.keys(activeCampaign).length > 0 && (
          <script
            src={`https://statement346.activehosted.com/f/embed.php?id=${
              activeCampaign.primary.form_snippet.split("?id=")[1]
            }`}
          />
        )}
      </Helmet>
      {data.body.map((section, index) => {
        if (section.slice_type === "slider") {
          return (
            <Slider key={`${section.id}-${index}`} items={section.items} />
          );
        }
        if (section.slice_type === "banner") {
          return <Banner key={index} primary={section.primary} />;
        }
        if (section.slice_type === "logo_list") {
          return (
            <LogoList
              key={`${section.id}-${index}`}
              primary={section.primary}
              logos={section.items}
            />
          );
        }
        if (section.slice_type === "text_with_image") {
          return (
            <TextImage
              key={`${section.id}-${index}`}
              primary={section.primary}
            />
          );
        }
        if (section.slice_type === "text_with_image_alternate") {
          return (
            <TextImageAlternate
              key={`${section.id}-${index}`}
              primary={section.primary}
            />
          );
        }
        if (section.slice_type === "stats") {
          return <Stats key={`${section.id}-${index}`} items={section.items} />;
        }
        if (section.slice_type === "testimonial_slider") {
          return (
            <TestimonialSlider
              key={`${section.id}-${index}`}
              items={section.items}
              primary={section.primary}
            />
          );
        }
        if (section.slice_type === "full_width_logo_list") {
          return (
            <FullWidthLogoList
              key={`${section.id}-${index}`}
              primary={section.primary}
              items={section.items}
            />
          );
        }
        if (section.slice_type === "contact") {
          return (
            <Contact key={`${section.id}-${index}`} primary={section.primary} />
          );
        }
        if (section.slice_type === "case_studies") {
          return (
            <CaseStudyList
              key={`${section.id}-${index}`}
              items={section.items}
            />
          );
        }
        if (section.slice_type === "case_study_grid") {
          return (
            <CaseStudyGrid
              key={`${section.id}-${index}`}
              items={section.items}
            />
          );
        }
        if (section.slice_type === "split_text") {
          return (
            <SplitText
              key={`${section.id}-${index}`}
              primary={section.primary}
            />
          );
        }
        if (section.slice_type === "event_list") {
          return (
            <EventList key={`${section.id}-${index}`} items={section.items} />
          );
        }
        if (section.slice_type === "content_grid") {
          return (
            <ContentGrid key={`${section.id}-${index}`} items={section.items} />
          );
        }
        if (section.slice_type === "careers_list") {
          return (
            <CareersList key={`${section.id}-${index}`} items={section.items} />
          );
        }
        if (section.slice_type === "resource_list") {
          return (
            <ResourceList
              key={`${section.id}-${index}`}
              items={section.items}
            />
          );
        }
        if (section.slice_type === "services_list") {
          return (
            <ServicesList
              key={`${section.id}-${index}`}
              items={section.items}
              primary={section.primary}
            />
          );
        }
        if (section.slice_type === "text_with_maps") {
          return (
            <TextMaps
              key={`${section.id}-${index}`}
              primary={section.primary}
            />
          );
        }
        if (section.slice_type === "content") {
          return (
            <Content key={`${section.id}-${index}`} primary={section.primary} />
          );
        }
        if (section.slice_type === "case_study_slider1") {
          return <CaseStudyBanner key={index} primary={section.primary} />;
        }
        if (section.slice_type === "active_campaign_form") {
          const id = section.primary.form_snippet.split("?id=")[1];
          return <div className={`_form_${id}`} />;
        }
        return null;
      })}
    </Layout>
  );
};

Home.propTypes = {
  data: PropTypes.shape({
    prismicPage: PropTypes.object.isRequired,
    site: PropTypes.object.isRequired
  })
};

export default Home;
