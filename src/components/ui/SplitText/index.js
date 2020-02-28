import React from 'react';
import { Section, Container, Column, Content } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

const CustomContent = styled(Content)`
  position: relative;
  z-index: 2;
  @media screen and (max-width: 768px) {
    padding-bottom: ${props => (props.alternate ? '3rem' : 'initial')};
  }
  p {
    color: #000000;
    font-weight: 300;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    font-size: 48px;
    line-height: 68px;
    letter-spacing: -0.43px;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
`;

const CustomSection = styled(Section)`
  padding: ${props =>
    props.removePadding === 'Yes'
      ? '9rem 1.5rem 0 1.5rem'
      : '9rem 1.5rem 9rem 1.5rem'};
  @media screen and (max-width: 1023px) {
    margin-top: 72px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0;
    padding-bottom: 0;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: -100px;
  right: 0;
  min-width: 400px;
  @media screen and (max-width: 1023px) {
    position: absolute;
    top: 20px;
    right: 0;
    min-width: 220px;
  }
  @media screen and (max-width: 768px) {
    min-width: 240px;
  }
`;

const SplitText = ({ primary }) => (
  <CustomSection removePadding={primary.remove_padding}>
    <Container>
      <ColumnGroup className="is-mobile is-multiline is-vcentered mobile-overflow-show">
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 6 }}
          desktop={{ size: 5, offset: 1 }}
          style={{ position: 'relative' }}
        >
          <CustomContent
            dangerouslySetInnerHTML={{
              __html: primary.heading.html,
            }}
          />
          <ImageWrapper>
            <Img
              fluid={primary.image.localFile.childImageSharp.fluid}
              alt={primary.image.alt}
            />
          </ImageWrapper>
        </Column>
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 6 }}
          desktop={{ size: 6 }}
        >
          <CustomContent
            alternate
            dangerouslySetInnerHTML={{
              __html: primary.content.html,
            }}
          />
        </Column>
      </ColumnGroup>
    </Container>
  </CustomSection>
);

export default SplitText;
