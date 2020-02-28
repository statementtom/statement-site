import React from 'react';
import { Link } from 'gatsby';
import { Section, Container, Column, Content } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { LongRightArrow } from '../Icons';
import { linkResolver } from '../../../util/links';

const CustomContent = styled(Content)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
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
  p {
    color: #000000;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const ImageWrapper = styled.div`
  max-width: 450px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    max-width: 300px;
  }
`;

const FloatColumn = styled(Column)`
  position: absolute;
  left: 40%;
  top: 60px;
  @media screen and (max-width: 768px) {
    left: 0;
  }
`;

const CustomLink = styled(Link)`
  color: #000000;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: lowercase;
  svg {
    display: block;
    transition: all 0.2s cubic-bezier(0.42, 0, 0.58, 1); /* ease-in-out */
    margin-left: 10px;
    margin-top: 2px;
  }
  &:hover {
    color: #000000;
    svg {
      margin-left: 15px;
    }
  }
`;

const CustomSection = styled(Section)`
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    padding: 0;
    ${ContentWrapper} {
      padding: 3rem 1.5rem;
    }
  }
`;

const Contact = ({ primary }) => (
  <CustomSection size="medium">
    <Container style={{ position: 'static' }}>
      <ColumnGroup className="is-mobile is-multiline is-centered is-vcentered">
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 7 }}
          desktop={{ size: 7 }}
        >
          <ContentWrapper>
            <CustomContent
              dangerouslySetInnerHTML={{
                __html: primary.content.html,
              }}
            />
            <CustomLink
              to={linkResolver(primary.link_url.type, primary.link_url.uid)}
            >
              {primary.link_label.text}
              <LongRightArrow size="20" fill="#CE0527" />
            </CustomLink>
          </ContentWrapper>
        </Column>
        <FloatColumn
          mobile={{ size: 12 }}
          tablet={{ size: 6 }}
          desktop={{ size: 6 }}
        >
          <ImageWrapper>
            <Img
              fluid={primary.image.localFile.childImageSharp.fluid}
              alt={primary.image.alt}
            />
          </ImageWrapper>
        </FloatColumn>
      </ColumnGroup>
    </Container>
  </CustomSection>
);

export default Contact;
