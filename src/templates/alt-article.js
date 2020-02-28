import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import styled from '@emotion/styled';
import Layout from '../containers/Layout';
import ArticleDetails from '../components/ui/ArticleDetails';
import Content from '../components/ui/Content';
import ServicesList from '../components/ui/ServicesList';

import { SiteFragment } from '../fragments/global/site';
import { BlogFallbackBannerImageFragment } from '../fragments/pages/blog';
import { PrismicAltArticleFragment } from '../fragments/templates/alt-article';
import { PrismicPageBodyServicesListFragment } from '../components/ui/ServicesList/fragment';

export const pageQuery = graphql`
  query AltArticle($title: String) {
    site {
      ...SiteFragment
    }
    allFile(filter: { relativePath: { regex: "/BlogFallback/" } }) {
      edges {
        ...BlogFallbackBannerImageFragment
      }
    }
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      ...PrismicAltArticleFragment
    }
    prismicPage(uid: { eq: "shopify-plus-replatforming-replatform" }) {
      data {
        body {
          ... on PrismicPageBodyServicesList {
            ...PrismicPageBodyServicesListFragment
          }
        }
      }
    }
  }
`;

const BannerItem = styled.div`
  position: relative;
  height: 100vh;
  .gatsby-image-wrapper {
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    min-height: 350px;
    > .gatsby-image-wrapper {
      height: auto;
      min-height: inherit;
      > div {
        min-height: inherit;
      }
    }
  }
`;

const AltArticle = ({
  data: {
    markdownRemark: { frontmatter, html },
    site: { siteMetadata: meta },
    allFile: { edges: randomImages },
    prismicPage,
  },
}) => {
  const randomNum = Math.floor(Math.random() * (14 - 0 + 1)) + 0;
  const randomImage = randomImages[randomNum];
  const details = {
    date: frontmatter.date,
    pageTitle: `<h1>${frontmatter.title}</h1>`,
    author: frontmatter.author,
  };
  return (
    <Layout>
      <Helmet
        htmlAttributes={{
          lang: `en`,
        }}
        title={
          frontmatter.meta[0].meta_title
            ? frontmatter.meta[0].meta_title
            : meta.title
        }
        meta={[
          {
            name: `description`,
            content: frontmatter.meta[0].meta_description
              ? frontmatter.meta[0].meta_description
              : meta.description,
          },
        ]}
      >
        {frontmatter.tags && !frontmatter.tags.includes('replatforming') && (
          <script
            defer
            src="https://statement346.activehosted.com/f/embed.php?id=7"
          />
        )}
        <meta
          property="og:title"
          content={
            frontmatter.meta[0].meta_title
              ? frontmatter.meta[0].meta_title
              : meta.title
          }
        />
        <meta
          property="og:description"
          content={
            frontmatter.meta[0].meta_description
              ? frontmatter.meta[0].meta_description
              : meta.description
          }
        />
        <meta
          property="og:image"
          content={`${meta.siteUrl}${randomImage.node.childImageSharp.fluid.src}`}
        />
        <meta
          property="og:image:secure_url"
          content={`${meta.siteUrl}${randomImage.node.childImageSharp.fluid.src}`}
        />
        <meta
          property="og:url"
          content={typeof window !== 'undefined' ? window.location.href : null}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content={meta.title} />
        <meta name="twitter:image:alt" content={meta.description} />
        <link
          rel="canonical"
          href={typeof window !== 'undefined' ? window.location.href : null}
        />
      </Helmet>
      <BannerItem>
        <Img fluid={randomImage.node.childImageSharp.fluid} />
      </BannerItem>
      <ArticleDetails details={details} visible />
      <Content
        primary={{ content: { html } }}
        event
        {...(frontmatter.tags && !frontmatter.tags.includes('replatforming')
          ? { blog: true }
          : {})}
      />
      {frontmatter.tags &&
        frontmatter.tags.includes('replatforming') &&
        prismicPage.data.body.map((section, index) => {
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

AltArticle.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
    site: PropTypes.object.isRequired,
    allFile: PropTypes.object.isRequired,
  }),
};

export default AltArticle;
