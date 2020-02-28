import React from 'react';
import { Link } from 'gatsby';
import { Section, Column, Content, Container } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import posed from 'react-pose';
import { LongRightArrow } from '../Icons';
import { linkResolver } from '../../../util/links';

const ContentWrapper = styled.div`
  position: relative;
  min-height: 300px;
  padding: 20px;
  @media screen and (max-width: 768px) {
    min-height: 100%;
  }
`;

const CustomContent = styled(Content)`
  text-align: center;
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
`;

const Address = styled.div`
  padding: 20px 0 0 0;
  width: 100%;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000;
    font-size: 30px;
    letter-spacing: -0.27px;
    line-height: 45px;
    font-weight: 500;
    margin-bottom: 20px;
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

const CustomLink = styled(Link)`
  text-align: center;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  background-color: #ce0527;
  transition: all 0.3s ease;
  border: 0;
  cursor: pointer;
  text-transform: lowercase;
  margin: 30px 0 0 0;
  @media screen and (max-width: 768px) {
    min-width: 100%;
  }
  svg {
    display: block;
    margin-left: 10px;
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
  &:disabled {
    cursor: not-allowed;
    background-color: #ebebeb;
    color: #000;
    svg,
    svg path {
      fill: #ce0527;
    }
  }
`;

const PosedCard = posed(ContentWrapper)({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',
  },
  hover: {
    scale: 1.025,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
  },
  press: {
    scale: 1.025,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
  },
});

const ServicesList = ({ items, primary }) => (
  <>
    {items.length > 0 && (
      <Section>
        <Container>
          <ColumnGroup className="is-mobile is-multiline is-centered">
            <Column
              mobile={{ size: 12 }}
              tablet={{ size: 10 }}
              desktop={{ size: 10 }}
            >
              <CustomContent
                dangerouslySetInnerHTML={{
                  __html: primary.content.html,
                }}
              />
            </Column>
          </ColumnGroup>
          <ColumnGroup className="is-mobile is-multiline is-centered">
            {items.map((item, index) => (
              <Column
                key={index}
                mobile={{ size: 12 }}
                tablet={{ size: 12 }}
                desktop={{ size: 4 }}
              >
                <PosedCard>
                  <Img
                    fluid={item.image.localFile.childImageSharp.fluid}
                    backgroundColor="#CE0527"
                  />
                  <Address>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.content.html,
                      }}
                    />
                    <CustomLink
                      to={linkResolver(item.cta_link.type, item.cta_link.uid)}
                    >
                      {item.cta_text}
                      <LongRightArrow
                        size="20"
                        style={{ marginTop: '2px' }}
                        fill="#fff"
                      />
                    </CustomLink>
                  </Address>
                </PosedCard>
              </Column>
            ))}
          </ColumnGroup>
        </Container>
      </Section>
    )}
  </>
);

export default ServicesList;
