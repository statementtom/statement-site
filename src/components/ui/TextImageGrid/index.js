import React from 'react';
import { Section, Container, Column, Content } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

const CustomContent = styled(Content)`
  padding: 80px 80px 80px 0;
  @media screen and (max-width: 1215px) {
    padding: 30px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    margin-bottom: 30px;
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
    margin-bottom: 30px;
    font-weight: 500;
    @media screen and (max-width: 768px) {
      font-size: 42px;
    }
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p {
    color: #ffffff;
    font-weight: 300;
    margin: 0;
  }
`;

const CustomSection = styled(Section)`
  background-color: #303030;
  margin-bottom: 9rem;
  @media screen and (max-width: 768px) {
    padding: 3rem 1.5rem !important;
    margin-bottom: 0;
  }
  .offset-column {
    margin-bottom: -250px !important;
    @media screen and (max-width: 1215px) {
      margin-bottom: 0 !important;
    }
  }
`;

const MainImageWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    margin: 0 auto 30px auto;
  }
`;

const SmallImageWrapper = styled.div`
  max-width: 200px;
  margin: 0 auto;
  ${props => (props.offsetPadding ? 'padding: 0 0 120px 0;' : 'padding: 0;')};
  @media screen and (max-width: 1215px) {
    padding: 0;
    margin-bottom: 30px;
  }
`;

const TextImageGrid = ({ items }) => (
  <>
    {items.length > 0 && (
      <CustomSection size="medium">
        <Container>
          {items.map((item, index) => {
            const last = index + 1 === items.length;
            return (
              <ColumnGroup
                key={index}
                className={
                  last
                    ? 'is-multiline is-vcentered offset-column'
                    : 'is-multiline is-vcentered'
                }
              >
                {item.small_image.localFile && (
                  <Column
                    mobile={{ size: 12 }}
                    tablet={{ size: 6 }}
                    desktop={{ size: 6 }}
                  >
                    <SmallImageWrapper offsetPadding={last}>
                      <Img
                        fluid={item.small_image.localFile.childImageSharp.fluid}
                        alt={item.small_image.alt}
                      />
                    </SmallImageWrapper>
                  </Column>
                )}
                {item.main_image.localFile && (
                  <Column
                    mobile={{ size: 12 }}
                    tablet={{ size: 6 }}
                    desktop={{ size: 6 }}
                  >
                    <MainImageWrapper>
                      <Img
                        fluid={item.main_image.localFile.childImageSharp.fluid}
                        alt={item.main_image.alt}
                      />
                    </MainImageWrapper>
                  </Column>
                )}

                {item.content.html && (
                  <Column
                    mobile={{ size: 12 }}
                    tablet={{ size: 6 }}
                    desktop={{ size: 6 }}
                  >
                    <CustomContent
                      dangerouslySetInnerHTML={{
                        __html: item.content.html,
                      }}
                    />
                  </Column>
                )}
              </ColumnGroup>
            );
          })}
        </Container>
      </CustomSection>
    )}
  </>
);

export default TextImageGrid;
