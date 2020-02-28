// Modules
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// Image Processing
import Img from 'gatsby-image';

// Styles
import styled from '@emotion/styled';

// Framework
import { Content, Column } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';

// Containers
import Layout from '../containers/Layout';

// Site Level GraphQL Fragments
import { SiteFragment } from '../fragments/global/site';

// Page Level GraphQL Fragments
import { PrismicResourceFragment } from '../fragments/templates/resource';

export const pageQuery = graphql`
  query Resource($uid: String!) {
    site {
      ...SiteFragment
    }
    prismicResource(uid: { eq: $uid }) {
      ...PrismicResourceFragment
    }
  }
`;

const CustomContent = styled(Content)`
  h1,
  h3,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
    font-size: 48px;
    line-height: 68px;
    letter-spacing: -0.43px;
    font-weight: 500;
    @media screen and (max-width: 768px) {
      font-size: 40px;
      line-height: 52px;
    }
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p,
  li {
    color: #ffffff;
    font-weight: 300;
    strong {
      color: #ffffff;
    }
  }
`;

const ContentWrapper = styled.div`
  padding: 120px 80px 80px 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #000;
  @media screen and (max-width: 768px) {
    padding: 100px 30px 60px 30px;
    height: auto;
  }
`;

const FormWrapper = styled.div`
  padding: 120px;
  .form-content-wrapper > div form {
    margin: 0 !important;
    width: 100% !important;
    padding: 0 !important;
    ._row._checkbox-radio {
      margin-top: 20px !important;
      > input[type='checkbox'] {
        margin-right: 5px !important;
      }
      * {
        font-size: 18px !important;
        font-weight: 300 !important;
      }
    }
    input[type='text'] {
      font-size: 18px;
    }
    ._html-code * {
      font-size: 18px !important;
      font-weight: 300 !important;
    }
    ._submit {
      font-size: 18px !important;
      font-weight: 300 !important;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 30px;
  }
`;

const FormContent = styled(Content)`
  margin: 0;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000;
    font-size: 45px;
    letter-spacing: -0.27px;
    font-weight: 500;
    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p {
    color: #959595;
    font-size: 16px;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const FormColumn = styled(Column)`
  background-color: #fff;
  height: 100vh;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

const ImageColumn = styled(Column)`
  height: 50vh;
  > .gatsby-image-wrapper {
    height: 100%;
  }
`;

const Resource = ({
  data: {
    prismicResource: { data },
    site: { siteMetadata: meta },
  },
}) => {
  const socialCardImage = data.image.url.split('?')[0];
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
          content={typeof window !== 'undefined' ? window.location.href : null}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content={meta.title} />
        <meta name="twitter:image:alt" content={meta.description} />
        <link
          rel="canonical"
          href={typeof window !== 'undefined' ? window.location.href : null}
        />
        <script
          defer
          src={`https://statement346.activehosted.com/f/embed.php?id=${
            data.form_snippet.split('?id=')[1]
            }`}
        />
      </Helmet>
      <ColumnGroup className="is-mobile is-multiline" paddingless>
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 6 }}
          desktop={{ size: 6 }}
          paddingless
        >
          <ColumnGroup className="is-mobile is-multiline" paddingless>
            <Column
              mobile={{ size: 12 }}
              tablet={{ size: 12 }}
              desktop={{ size: 12 }}
              paddingless
            >
              <ContentWrapper>
                {data.content && data.content.html && (
                  <CustomContent
                    dangerouslySetInnerHTML={{
                      __html: data.content.html,
                    }}
                  />
                )}
              </ContentWrapper>
            </Column>
            <ImageColumn
              mobile={{ size: 12 }}
              tablet={{ size: 12 }}
              desktop={{ size: 12 }}
              paddingless
            >
              <Img
                fluid={data.image.localFile.childImageSharp.fluid}
                alt={data.image.alt}
                backgroundColor="#CE0527"
              />
            </ImageColumn>
          </ColumnGroup>
        </Column>
        <FormColumn
          mobile={{ size: 12 }}
          tablet={{ size: 6 }}
          desktop={{ size: 6 }}
          paddingless
        >
          <FormWrapper>
            {data.form_title && data.form_title.html && (
              <FormContent
                dangerouslySetInnerHTML={{
                  __html: data.form_title.html,
                }}
              />
            )}
            <Content
              className="form-content-wrapper"
              dangerouslySetInnerHTML={{
                __html: `<div class="_form_${
                  data.form_snippet.split('?id=')[1]
                  }"></div>`,
              }}
            />
          </FormWrapper>
        </FormColumn>
      </ColumnGroup>
    </Layout>
  );
};

Resource.propTypes = {
  data: PropTypes.shape({
    prismicResource: PropTypes.object.isRequired,
    site: PropTypes.object.isRequired,
  }),
};

export default Resource;
