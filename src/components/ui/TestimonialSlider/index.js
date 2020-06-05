import React, { useRef } from 'react';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import { Column, Content, Section } from 'rbx';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import { useMedia } from 'react-use';
import Img from 'gatsby-image';
import { AngleLeftArrow, AngleRightArrow, Speech } from '../Icons';

const TestimonialText = styled(Content)`
  background-color: #f5f5f5;
  @media screen and (max-width: 1023px) {
    padding: 10px 30px 30px 30px;
  }
  p {
    color: #000000;
    font-weight: 300;
    letter-spacing: -0.19px;
    margin: 0;
  }
  span {
    color: #000000;
    font-size: 16px;
    margin: 30px 0 0 0;
    @media screen and (max-width: 1215px) {
      margin: 30px 0 60px 0;
    }
  }
  img {
    margin-top: 30px;
  }
`;

const CustomColumnGroup = styled(ColumnGroup)`
  position: relative;
  margin-bottom: 6rem !important;
  @media screen and (min-width: 1408px) {
    margin-bottom: 9rem !important;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 0 !important;
  }
`;

const CustomColumn = styled(Column)`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding: 0;
  overflow: hidden;
  margin-top: 120px;
  z-index: -1;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  @media screen and (max-width: 1215px) {
    right: 0;
  }
  @media screen and (max-width: 768px) {
    position: static;
    justify-content: flex-end;
  }
  .arrow {
    cursor: pointer;
    padding: 20px 30px;
    background-color: #fff;
    @media screen and (max-width: 768px) {
      padding: 15px 20px;
    }
  }
`;

const SlideGroup = styled(ColumnGroup)`
  height: 100%;
  min-height: 500px;
  position: relative;
  @media screen and (max-width: 1023px) {
    min-height: 100%;
    > .column {
      &:first-of-type {
        padding: 0;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .mobile-image-wrapper {
      max-height: 350px;
    }
  }
`;

const CustomSection = styled(Section)`
  padding: 3rem;
  @media screen and (max-width: 1216px) {
    padding: 3rem 1.5rem;
  }
`;

const SpeechWrapper = styled.div`
  @media screen and (max-width: 1215px) {
    padding: 30px 30px 0 30px;
  }
`;

const TestimonialSlider = ({ items, primary }) => {
  const mobile = useMedia('(max-width: 768px)');
  const sliderTextRef = useRef(null);
  const textSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesTowShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
  };
  return (
    <CustomSection>
      <CustomColumnGroup className="is-mobile is-multiline">
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 12 }}
          desktop={{ size: 6 }}
          widescreen={{ size: 7 }}
          style={{ backgroundColor: '#F5F5F5' }}
          paddingless
        >
          <SlideGroup className="is-mobile is-multiline is-centered is-vcentered">
            {mobile && (
              <Column
                mobile={{ size: 12 }}
                tablet={{ size: 12 }}
                desktop={{ size: 12 }}
                widescreen={{ size: 12 }}
              >
                <Img
                  fluid={primary.image.localFile.childImageSharp.fluid}
                  alt={primary.image.alt}
                />
              </Column>
            )}
            <Column
              mobile={{ size: 12 }}
              tablet={{ size: 12 }}
              desktop={{ size: 8 }}
              widescreen={{ size: 8 }}
            >
              <Slider ref={sliderTextRef} {...textSliderSettings}>
                {items.map((item, index) => (
                    <div key={index}>
                      <SpeechWrapper>
                        <Speech height={36} />
                      </SpeechWrapper>

                      <TestimonialText>
                        <p>{item.content.text}</p>
                        <span>{item.person.text}</span>
                        {item.image && item.image.url && (
                          <img src={item.image.url} alt={item.image.alt} />
                        )}
                      </TestimonialText>
                    </div>
                  ))}
              </Slider>
              <SliderButtons>
                <div
                  className="arrow"
                  onClick={() => sliderTextRef.current.slickPrev()}
                >
                  <AngleLeftArrow height="30" />
                </div>
                <div
                  className="arrow"
                  onClick={() => sliderTextRef.current.slickNext()}
                >
                  <AngleRightArrow height="30" />
                </div>
              </SliderButtons>
            </Column>
          </SlideGroup>
          {!mobile && (
            <CustomColumn desktop={{ size: 6 }} widescreen={{ size: 6 }}>
              <Img
                fluid={primary.image.localFile.childImageSharp.fluid}
                alt={primary.image.alt}
              />
            </CustomColumn>
          )}
        </Column>
      </CustomColumnGroup>
    </CustomSection>
  );
};

export default TestimonialSlider;
