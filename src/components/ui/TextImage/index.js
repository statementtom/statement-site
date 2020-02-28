import React from 'react';
import { Section, Container, Column, Content } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

const CustomContent = styled(Content)`
  color: #000000;
  font-size: 18px;
  font-weight: 300;
  h1,
  h3,
  h4,
  h5,
  h6 {
    font-size: 30px;
    line-height: 60px;
    letter-spacing: -0.27px;
    font-weight: 500;
    margin: 0 0 20px 0;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  h2 {
    margin: 0 0 20px 0;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
`;

const ImageWrapper = styled.div`
  max-width: ${props => (props.fullWidth ? '100%' : '450px')};
  margin: 0 auto;
`;

const CustomSection = styled(Section)`
  margin-bottom: ${props => (props.overlap ? '-200px;' : '0;')};
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const TextImage = ({ primary }) => (
  <CustomSection size="medium" overlap={primary.alternate_version === 'Yes'}>
    <Container>
      <ColumnGroup
        className={
          primary.alternate_layout === 'No'
            ? 'is-mobile is-multiline is-vcentered'
            : 'is-mobile is-multiline is-vcentered is-reversed-mobile'
        }
      >
        {primary.alternate_layout === 'No' ? (
          <>
            <Column
              mobile={{ size: 12 }}
              tablet={{ size: 6 }}
              desktop={{ size: 6 }}
            >
              <CustomContent
                dangerouslySetInnerHTML={{
                  __html: primary.content.html,
                }}
              />
            </Column>
            <Column
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
            </Column>
          </>
        ) : (
          <>
            <Column
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
            </Column>
            <Column
              mobile={{ size: 12 }}
              tablet={{ size: 6 }}
              desktop={{ size: 6 }}
            >
              <CustomContent
                dangerouslySetInnerHTML={{
                  __html: primary.content.html,
                }}
              />
            </Column>
          </>
        )}
      </ColumnGroup>
    </Container>
  </CustomSection>
);

export default TextImage;
