import React from 'react';
import { Section, Container, Column, Content } from 'rbx';
import { Link } from 'gatsby';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import { LongRightArrow } from '../Icons';
import { linkResolver } from '../../../util/links';

const ImageWrapper = styled.div`
  max-width: 120px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  text-align: center;
  padding: 0 20px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 30px;
    line-height: 60px;
    letter-spacing: -0.27px;
    font-weight: 500;
    margin: 20px 0;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p {
    color: #000000;
    font-weight: 300;
  }
  hr {
    display: none;
    margin: 24px 0 0px 0;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;

const CustomLink = styled.p`
  color: #000;
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
    color: #000;
    svg {
      margin-left: 15px;
    }
  }
`;

const ContentGrid = ({ items }) => (
  <>
    {items.length > 0 && (
      <Section size="medium">
        <Container>
          <ColumnGroup className="is-mobile is-multiline is-centered">
            {items.map((item, index) => (
              <Column
                key={index}
                mobile={{ size: 12 }}
                tablet={{ size: 6 }}
                desktop={{ size: 4 }}
                as={Link}
                to={linkResolver(item.link_url.type, item.link_url.uid)}
              >
                <ImageWrapper>
                  <Img
                    fluid={item.image.localFile.childImageSharp.fluid}
                    alt={item.image.alt}
                  />
                </ImageWrapper>
                <ContentWrapper>
                  <Content
                    dangerouslySetInnerHTML={{
                      __html: item.content.html,
                    }}
                  />
                  <CustomLink>
                    {item.link_label.text}
                    <LongRightArrow size="20" fill="#CE0527" />
                  </CustomLink>
                  <hr />
                </ContentWrapper>
              </Column>
            ))}
          </ColumnGroup>
        </Container>
      </Section>
    )}
  </>
);

export default ContentGrid;
