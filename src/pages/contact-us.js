// Modules
import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

// Image Processing
import Img from 'gatsby-image';

// Framework
import { Section, Content, Column, Container } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';

// Styles
import styled from '@emotion/styled';

// Containers
import Layout from '../containers/Layout';

// UI Components
import { LongRightArrow, Location } from '../components/ui/Icons';
import { ContactForm } from '../components/ui/Forms/contact';

// Site Level GraphQL Fragments
import { SiteFragment } from '../fragments/global/site';

// Page Level GraphQL Fragments
import { PrismicContactFragment } from '../fragments/pages/contact-us';

export const pageQuery = graphql`
  query Contact {
    site {
      ...SiteFragment
    }
    prismicContact {
      ...PrismicContactFragment
    }
  }
`;

const CustomContent = styled(Content)`
  padding: 120px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: 30px;
    height: auto;
    ${props => props.spacing && 'margin-top: 60px'};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
    font-size: 48px;
    letter-spacing: -0.43px;
    line-height: 68px;
    font-weight: 500;
    margin-bottom: 0;
    strong {
      font-weight: inherit;
      color: #ce0527;
    }
    @media screen and (max-width: 768px) {
      font-size: 40px;
      line-height: 52px;
    }
  }
  p {
    color: #ffffff;
    font-weight: 300;
    margin-bottom: 1rem;
  }
`;

const CustomColumn = styled(Column)`
  background-color: ${props => props.background};
  height: 100vh;
  @media screen and (max-width: 768px) {
    padding: 0;
    height: auto;
  }
`;

const ContentWrapper = styled.div`
  min-height: 300px;
  padding: 30px;
  position: relative;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    min-height: 100%;
    padding: 0;
  }
`;

const Address = styled.div`
  padding: 45px;
  background-color: #fff;
  position: absolute;
  right: 30px;
  bottom: -60px;
  @media screen and (max-width: 1215px) {
    padding: 30px;
  }
  @media screen and (max-width: 768px) {
    position: static;
    padding: 30px 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000;
    font-size: 30px;
    letter-spacing: -0.27px;
    line-height: 60px;
    font-weight: 500;
    margin-bottom: 10px;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p,
  a {
    color: #000000;
    font-size: 17px;
    font-weight: 300;
    line-height: 24px;
    text-decoration: none;
  }
`;

const CustomLink = styled.a`
  color: #000000;
  font-size: 17px;
  line-height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
  text-transform: lowercase;
  svg {
    display: block;
    transition: all 0.2s cubic-bezier(0.42, 0, 0.58, 1); /* ease-in-out */
    margin-top: 2px;
    margin-left: 10px;
  }
  &:hover {
    color: #000000;
  }
`;

const ScrollCTA = styled.p`
  margin-top: 20px !important;
  font-weight: 600 !important;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  svg {
    display: block;
    transition: all 0.2s cubic-bezier(0.42, 0, 0.58, 1); /* ease-in-out */
    margin-top: 2px;
    margin-left: 10px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const Contact = ({
  data: {
    prismicContact: { data },
    site: { siteMetadata: meta },
  },
}) => {
  const handleClick = () => {
    if (window.innerWidth > 768) {
      if (typeof window !== 'undefined') {
        window.scrollTo({
          top: window.innerHeight,
          left: 0,
          behavior: 'smooth',
        });
      }
    } else if (window.innerWidth <= 768) {
      if (typeof window !== 'undefined') {
        window.scrollTo({
          top: 1209,
          left: 0,
          behavior: 'smooth',
        });
      }
    }
  };
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
      />
      <ColumnGroup className="is-mobile is-multiline">
        <CustomColumn
          mobile={{ size: 12 }}
          tablet={{ size: 6 }}
          desktop={{ size: 5 }}
          background="#000"
          paddingless
        >
          <CustomContent spacing="true">
            <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
            <ScrollCTA onClick={handleClick}>
              See Locations <Location size="20" fill="#CE0527" />
            </ScrollCTA>
          </CustomContent>
        </CustomColumn>
        <CustomColumn
          mobile={{ size: 12 }}
          tablet={{ size: 6 }}
          desktop={{ size: 7 }}
          background="#fff"
          paddingless
        >
          <CustomContent>
            <ContactForm />
          </CustomContent>
        </CustomColumn>
      </ColumnGroup>
      {data.body[0].items && data.body[0].items.length > 0 && (
        <Section size="medium">
          <Container>
            <ColumnGroup className="is-mobile is-multiline">
              {data.body[0].items.map((item, index) => (
                <Column
                  key={index}
                  mobile={{ size: 12 }}
                  tablet={{ size: 12 }}
                  desktop={{ size: 6 }}
                >
                  <ContentWrapper>
                    <Img
                      fluid={item.image.localFile.childImageSharp.fluid}
                      backgroundColor="#CE0527"
                    />
                    <Address>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${
                            item.content.html
                            }${`<a href="tel:${item.number}">${item.number}</a>`}`,
                        }}
                      />

                      <CustomLink target="_blank" href={item.directions.text}>
                        {item.directions_label}
                        <LongRightArrow size="20" fill="#CE0527" />
                      </CustomLink>
                    </Address>
                  </ContentWrapper>
                </Column>
              ))}
            </ColumnGroup>
          </Container>
        </Section>
      )}
    </Layout>
  );
};

export default Contact;
