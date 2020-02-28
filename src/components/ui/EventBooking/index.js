import React from 'react';
import { Container, Column, Section, Content } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import styled from '@emotion/styled';
import { LongRightArrow } from '../Icons';

const CustomSection = styled(Section)`
  padding-top: 0 !important;
`;

const ContentWrapper = styled.div`
  padding: 60px;
  background-color: #000000;
  @media screen and (max-width: 768px) {
    padding: 60px 30px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
    font-size: 32px;
    letter-spacing: -0.21px;
    font-weight: 500;
    margin-bottom: 25px;
    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p {
    color: #fff;
    font-weight: 300;
  }
`;

const CustomLink = styled.a`
  text-align: center;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  background-color: #ce0527;
  transition: all 0.3s ease;
  min-width: 300px;
  text-transform: lowercase;
  @media screen and (max-width: 768px) {
    min-width: 100%;
  }
  svg {
    display: block;
    margin-left: 10px;
    margin-top: 2px;
    transition: all 0.3s ease;
    path {
      transition: all 0.3s ease;
    }
  }
  &:hover {
    color: #000;
    background-color: #fff;
    svg,
    svg path {
      fill: #ce0527;
    }
  }
`;

const EventBooking = ({ primary }) => (
  <CustomSection size="medium" style={{ paddingBottom: '3rem' }}>
    <Container>
      <ColumnGroup className="is-mobile is-multiline is-centered">
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 10 }}
          desktop={{ size: 8 }}
          paddingless
        >
          <ColumnGroup className="is-mobile is-multiline">
            <Column
              mobile={{ size: 12 }}
              tablet={{ size: 12 }}
              desktop={{ size: 12 }}
            >
              <ContentWrapper>
                <Content
                  dangerouslySetInnerHTML={{
                    __html: primary.content.html,
                  }}
                />
                <CustomLink href={primary.link_url.url} target="_blank">
                  {primary.link_label.text}
                  <LongRightArrow size="20" fill="#fff" />
                </CustomLink>
              </ContentWrapper>
            </Column>
          </ColumnGroup>
        </Column>
      </ColumnGroup>
    </Container>
  </CustomSection>
);

export default EventBooking;
