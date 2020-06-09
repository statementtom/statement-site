import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../containers/Layout";
import Banner from "../components/ui/Banner";
import ArticleDetails from "../components/ui/ArticleDetails";
import Content from "../components/ui/Content";
import PPCForm from "../components/ui/Forms/ppc";
// import ArticleRelated from '../components/ui/ArticleRelated';

import { SiteFragment } from "../fragments/global/site";
import { PrismicArticleFragment } from "../fragments/templates/article";
import { PrismicArticleBodyBannerFragment } from "../components/ui/Banner/fragment";
import { PrismicArticleBodyArticleDetailsFragament } from "../components/ui/ArticleDetails/fragment";
import { PrismicArticleBodyContentFragment } from "../components/ui/Content/fragment";
import { PrismicArticleBodyRelatedArticlesFragment } from "../components/ui/ArticleRelated/fragment";
import Newsletter from "../components/ui/Forms/newsletter";

export const pageQuery = graphql`
  query Article($uid: String) {
    site {
      ...SiteFragment
    }
    prismicArticle(uid: { eq: $uid }) {
      data {
        ...PrismicArticleFragment
        body {
          ... on PrismicArticleBodyBanner {
            ...PrismicArticleBodyBannerFragment
          }
          ... on PrismicArticleBodyArticleDetails {
            ...PrismicArticleBodyArticleDetailsFragament
          }
          ... on PrismicArticleBodyContent {
            ...PrismicArticleBodyContentFragment
          }
          ... on PrismicArticleBodyRelatedArticles {
            ...PrismicArticleBodyRelatedArticlesFragment
          }
        }
      }
    }
    prismicArticleNewsletter {
      data {
        body {
          ... on PrismicArticleNewsletterBodyForm {
            id
            slice_type
            primary {
              content_top_padding
              content_title {
                html
              }
              content_copy {
                html
              }
              content_additional {
                html
              }
            }
            items {
              content_preheading {
                html
              }
              content_title {
                html
              }
              content_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 500, maxHeight: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                alt
              }
              content_link {
                type
                link_type
                url
                uid
                document {
                  ... on PrismicArticle {
                    data {
                      date(formatString: "YYYY/MM")
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Article = ({
  data: {
    prismicArticleNewsletter: { data: newsletter },
    prismicArticle: { data },
    site: { siteMetadata: meta }
  }
}) => {
  const details = {
    date: data.date,
    pageTitle: data.page_title.html,
    author: data.author.text
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
          return (
            <Banner
              key={`${section.id}-${index}`}
              primary={section.primary}
              article
            />
          );
        }
        if (section.slice_type === "article_details") {
          return (
            <ArticleDetails
              key={`${section.id}-${index}`}
              details={details}
              visible
            />
          );
        }
        if (section.slice_type === "content") {
          return (
            <Content
              key={`${section.id}-${index}`}
              primary={section.primary}
              article
            />
          );
        }
        // if (section.slice_type === 'related_articles') {
        //   return (
        //     <ArticleRelated
        //       key={`${section.id}-${index}`}
        //       primary={section.primary}
        //       items={section.items}
        //       legacyTitles={pageContext.title}
        //     />
        //   );
        // }
        return null;
      })}
      {newsletter.body.map((section, index) => {
        if (section.slice_type === "form") {
          return (
            <Newsletter
              key={`${section.id}-${index}`}
              uid="newsletter"
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

Article.propTypes = {
  data: PropTypes.shape({
    prismicArticle: PropTypes.object.isRequired,
    site: PropTypes.object.isRequired
  })
};

export default Article;
