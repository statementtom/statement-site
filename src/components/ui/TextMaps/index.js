import React from 'react';
import { Link } from 'gatsby';
import { Section, Container, Column } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { LongRightArrow } from '../Icons';

const ContentWrapper = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000000;
    font-weight: 500;
    margin-bottom: 36px;
    font-size: 42px;
    letter-spacing: -0.38px;
    line-height: 64px;
    @media screen and (max-width: 768px) {
      font-size: 32px;
      line-height: 42px;
      margin-bottom: 24px;
    }
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p {
    color: #000000;
    font-weight: 300;
    margin-bottom: 36px;
    @media screen and (max-width: 768px) {
      margin-bottom: 24px;
    }
  }
  li {
    color: #000000;
    font-weight: 300;
  }
`;

const CustomLink = styled(Link)`
  color: #000000;
  margin-top: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: lowercase;
  svg {
    display: block;
    transition: all 0.2s cubic-bezier(0.42, 0, 0.58, 1); /* ease-in-out */
    margin-top: 2px;
    margin-left: 10px;
  }
  &:hover {
    color: #000000;
    svg {
      margin-left: 15px;
    }
  }
`;

const Address = styled.div`
  padding: 60px;
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
    line-height: 38px;
    font-weight: 500;
    margin-bottom: 10px;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p {
    color: #000000;
    font-size: 17px;
    font-weight: 300;
    line-height: 24px;
  }
`;

const AddressWrapper = styled.div`
  min-height: 300px;
  padding: 30px;
  position: relative;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    min-height: 100%;
    padding: 0;
  }
`;

const TextMaps = ({ primary }) => (
  <Section size="medium">
    <Container>
      <ColumnGroup className="is-mobile is-multiline is-vcentered">
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 5 }}
          desktop={{ size: 5 }}
        >
          <ContentWrapper>
            <div
              dangerouslySetInnerHTML={{
                __html: primary.content.html,
              }}
            />
          </ContentWrapper>
        </Column>
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 6, offset: 1 }}
          desktop={{ size: 6, offset: 1 }}
        >
          <AddressWrapper>
            <Img
              fluid={primary.location_image.localFile.childImageSharp.fluid}
              backgroundColor="#CE0527"
            />
            <Address>
              <div
                dangerouslySetInnerHTML={{
                  __html: primary.location_content.html,
                }}
              />
              <CustomLink
                target="_blank"
                href={primary.location_directions.text}
              >
                {primary.location_label}
                <LongRightArrow size="20" fill="#CE0527" />
              </CustomLink>
            </Address>
          </AddressWrapper>
        </Column>
      </ColumnGroup>
    </Container>
  </Section>
);

export default TextMaps;
