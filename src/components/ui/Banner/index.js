import React from 'react';

import styled from '@emotion/styled';
import Img from 'gatsby-image';

import { Container, Column, Content } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import { LongRightArrow } from '../Icons';

const BannerItem = styled.div`
  position: relative;
  height: 90vh;
  .gatsby-image-wrapper {
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    margin-top: ${props => (props.large ? '0px' : '90px')};
    > .gatsby-image-wrapper {
      height: auto;
      min-height: inherit;
      > div {
        min-height: inherit;
      }
    }
    ${props =>
      props.article
        ? 'min-height: 350px'
        : props.large
        ? 'min-height: calc(100vh + 120px)'
        : 'min-height: 650px'};
  }
`;

const BannerContent = styled(Content)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  * {
    color: #fff;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
    font-size: 60px;
    line-height: 72px;
    letter-spacing: -0.43px;
    margin-bottom: 0;
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
    font-weight: 300;
  }
  a {
    color: #fff;
    text-decoration: underline;
    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
`;

const BannerContentWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  > .container {
    position: relative;
    z-index: 3;
  }
  &:after {
    content: '';
    background-color: #000;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    display: ${props => (props.content ? 'block' : 'none')};
  }
`;

const ScrollCTA = styled.div`
  cursor: pointer;
  z-index: 3;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: #ffffff;
    font-size: 11px;
    letter-spacing: 3px;
    line-height: 17px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 30px;
    @media screen and (max-width: 768px) {
      margin-bottom: 15px;
    }
  }
  div {
    height: 100px;
    border-left: 1px solid;
    border-image: linear-gradient(180deg, #fff 0, #fff 50%, #d0d0d0 0, #d0d0d0)
      1 100%;
    margin-bottom: -50px;
    background-color: #fff;
    @media screen and (max-width: 768px) {
      height: 80px;
      margin-bottom: -40px;
    }
  }
`;

const CustomLink = styled.a`
  color: #fff;
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
    color: #fff;
    svg {
      margin-left: 15px;
    }
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1.5em;
`;

const FlexItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 30px;
`;

const Banner = ({
  primary,
  imageOverride,
  large,
  siteLink,
  article,
  category,
  featuredLogos,
}) => {
  const handleClick = e => {
    const { bottom } = e.target.getBoundingClientRect();
    if (typeof window !== 'undefined') {
      window.scroll({
        top: bottom,
        left: 0,
        behavior: 'smooth',
      });
    }
  };
  return (
    <BannerItem large={!!large} article={article}>
      {imageOverride ? (
        <Img fluid={imageOverride.childImageSharp.fluid} />
      ) : (
        <Img
          fluid={primary.image.localFile.childImageSharp.fluid}
          alt={primary.image.alt}
        />
      )}
      {primary.content && (
        <BannerContentWrapper content={!!primary.content}>
          <Container style={{ height: '100%' }}>
            <ColumnGroup
              className="is-mobile is-multiline"
              style={{ height: '100%' }}
            >
              <Column
                mobile={{ size: 12 }}
                tablet={{ size: 8 }}
                desktop={{ size: 8 }}
                style={{ height: '100%' }}
              >
                <BannerContent>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: primary.content.html,
                    }}
                  />
                  <FlexWrapper>
                    {category && (
                      <FlexItem>
                        <div>
                          <strong>Category:</strong> {category}
                        </div>
                      </FlexItem>
                    )}
                    {siteLink && (
                      <FlexItem>
                        <CustomLink href={siteLink} target="_blank">
                          View Site
                          <LongRightArrow size="20" fill="#CE0527" />
                        </CustomLink>
                      </FlexItem>
                    )}
                  </FlexWrapper>
                  {featuredLogos && featuredLogos.length > 0 && (
                    <div>
                      <ColumnGroup className="is-mobile is-multiline is-vcentered">
                        <Column
                          mobile={{ size: 12 }}
                          tablet={{ size: 12 }}
                          desktop={{ size: 12 }}
                          style={{ paddingLeft: 0, paddingBottom: 0 }}
                        >
                          <Content>
                            <p style={{ margin: 0, fontSize: 20 }}>
                              <strong>
                                Featured in
                                <span style={{ color: '#CE0527' }}>.</span>
                              </strong>
                            </p>
                          </Content>
                        </Column>
                        {featuredLogos.map((logo, index) => (
                          <Column
                            className="is-6-mobile is-narrow-tablet is-narrow-desktop"
                            key={index}
                            style={{ paddingLeft: index === 0 ? 0 : 'auto' }}
                          >
                            <img
                              src={logo.featured_image.url}
                              alt={logo.featured_image.alt}
                              style={{ maxWidth: 150, width: '100%' }}
                            />
                          </Column>
                        ))}
                      </ColumnGroup>
                    </div>
                  )}
                </BannerContent>
              </Column>
            </ColumnGroup>
          </Container>
          {primary.hide_scroll === 'No' && (
            <ScrollCTA onClick={handleClick}>
              <p>Take a scroll</p>
              <div />
            </ScrollCTA>
          )}
        </BannerContentWrapper>
      )}
    </BannerItem>
  );
};

export default Banner;
