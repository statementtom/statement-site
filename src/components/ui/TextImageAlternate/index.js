import React from 'react';
import Img from 'gatsby-image';

import { Column, Content } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import { useMedia } from 'react-use';

const CustomContent = styled(Content)`
  font-weight: 300;
  padding: 30px 0;
  ${props => props.alternate && 'padding-right: 60px;'}
  @media screen and (max-width: 768px) {
    padding: 25px;
  }
  * {
    color: #ffffff;
  }
  h1,
  h3,
  h4,
  h5,
  h6 {
    font-size: 30px;
    font-weight: 500;
    letter-spacing: -0.27px;
    margin: 0 0 20px 0;
    color: #ffffff;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
    @media screen and (max-width: 768px) {
      font-size: 24px;
      line-height: 38px;
      margin: 0 0 15px 0 !important;
    }
  }
  h2 {
    color: #fff;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
`;

const CustomColumnGroup = styled(ColumnGroup)`
  position: relative;
  margin-bottom: ${props =>
    props.spacing ? '300px !important' : '200px !important'};
  @media screen and (max-width: 768px) {
    margin-bottom: ${props =>
    props.spacing ? '20px !important' : '0 !important'};
  }
`;

const CustomColumn = styled(Column)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  padding: 0;
`;

const Subheading = styled.p`
  margin-top: 30px;
  color: #fff;
  font-size: 30px;
  text-transform: normal;
  @media screen and (max-width: 768px) {
    margin-left: 25px;
  }
`;

const MainColumn = styled(Column)`
  background-color: #000;
  @media screen and (max-width: 768px) {
    background-color: transparent;
  }
`;

const MobileImageWrapper = styled(Column)`
  padding: 0;
  @media screen and (max-width: 768px) {
    padding: 0 16px;
    margin-top: -16px;
  }
`;

const TextImageAlternate = ({ primary }) => {
  const matchMedia = useMedia('(min-width: 1024px)');
  return (
    <CustomColumnGroup
      className="is-mobile is-multiline"
      spacing={primary.alternate_spacing === 'Yes'}
    >
      {primary.alternate_layout === 'Yes' ? (
        <>
          <MainColumn
            mobile={{ size: 12 }}
            tablet={{ size: 12 }}
            desktop={{ size: 6 }}
            widescreen={{ size: 6 }}
            paddingless
          >
            <ColumnGroup
              className="is-mobile is-multiline is-centered is-vcentered is-reversed-mobile"
              style={{ height: '100%', minHeight: '600px' }}
            >
              <MobileImageWrapper
                mobile={{ size: 12 }}
                tablet={{ size: 12 }}
                desktop={{ size: 6 }}
                className="is-hidden-desktop"
              >
                <Img
                  fluid={primary.image.localFile.childImageSharp.fluid}
                  alt={primary.image.alt}
                />
              </MobileImageWrapper>
              <Column
                mobile={{ size: 12 }}
                tablet={{ size: 12 }}
                desktop={{ size: 8 }}
                widescreen={{ size: 8 }}
                style={{ backgroundColor: '#000' }}
              >
                {primary.subheading && primary.subheading.text && (
                  <Subheading>{primary.subheading.text}</Subheading>
                )}
                <CustomContent
                  alternate
                  dangerouslySetInnerHTML={{
                    __html: primary.content.html,
                  }}
                />
              </Column>
            </ColumnGroup>
          </MainColumn>
          {matchMedia && (
            <CustomColumn
              desktop={{ size: 6, offset: 6 }}
              widescreen={{ size: 7, offset: 5 }}
            >
              <BackgroundImage
                fluid={primary.image.localFile.childImageSharp.fluid}
                backgroundColor="#000"
                style={{ height: '100%', marginTop: '120px' }}
              />
            </CustomColumn>
          )}
        </>
      ) : (
          <>
            <MainColumn
              mobile={{ size: 12 }}
              tablet={{ size: 12 }}
              desktop={{ size: 6, offset: 6 }}
              widescreen={{ size: 7, offset: 5 }}
              paddingless
            >
              <ColumnGroup
                className="is-mobile is-multiline is-centered is-vcentered is-reversed-mobile"
                style={{ height: '100%', minHeight: '600px' }}
              >
                <MobileImageWrapper
                  mobile={{ size: 12 }}
                  tablet={{ size: 12 }}
                  desktop={{ size: 6 }}
                  className="is-hidden-desktop"
                >
                  <Img
                    fluid={primary.image.localFile.childImageSharp.fluid}
                    alt={primary.image.alt}
                  />
                </MobileImageWrapper>
                <Column
                  mobile={{ size: 12 }}
                  tablet={{ size: 12 }}
                  desktop={{ size: 8 }}
                  widescreen={{ size: 6 }}
                  style={{ backgroundColor: '#000' }}
                >
                  {primary.subheading && primary.subheading.text && (
                    <Subheading>{primary.subheading.text}</Subheading>
                  )}
                  <CustomContent
                    dangerouslySetInnerHTML={{
                      __html: primary.content.html,
                    }}
                  />
                </Column>
              </ColumnGroup>
            </MainColumn>
            {matchMedia && (
              <CustomColumn desktop={{ size: 6 }} widescreen={{ size: 6 }}>
                <BackgroundImage
                  fluid={primary.image.localFile.childImageSharp.fluid}
                  backgroundColor="#000"
                  style={{ height: '100%', marginTop: '120px' }}
                />
              </CustomColumn>
            )}
          </>
        )}
    </CustomColumnGroup>
  );
};

export default TextImageAlternate;
