import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Content } from 'rbx';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import Slider from 'react-slick';

import { useMedia } from 'react-use';
import { AngleRightArrow, AngleLeftArrow } from '../Icons';

import '../Carousel/slick.css';
import '../Carousel/slick-theme.css';
import { linkResolver } from '../../../util/links';

const CaseStudyItem = styled(Link)`
  display: block;
  height: 80vh;
  position: relative;
  z-index: 3;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50%;
    z-index: 2;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.9) 100%
    );
  }
  .gatsby-image-wrapper {
    height: 80vh;
  }
  @media screen and (max-width: 768px) {
    height: 650px;
    .gatsby-image-wrapper {
      height: 650px;
    }
  }
  @media screen and (max-width: 480px) {
    height: 500px;
    .gatsby-image-wrapper {
      height: 500px;
    }
  }
`;

const CustomContent = styled(Content)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 30px;
  height: 100%;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  *,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    font-size: 30px;
    letter-spacing: -0.32px;
    line-height: 60px;
    margin-bottom: 0;
  }
  p {
    font-weight: 300;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  .slick-slide {
    max-height: 80vh;
  }
`;

const ArrowIconWrapper = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  ${props => (props.left ? 'left: 0;' : 'right: 0;')}
  ${props => props.ml && `margin-left: ${props.ml};`}
  ${props => props.mr && `margin-right: ${props.mr};`}
`;

const Arrow = ({ onClick, children, ml, mr, left }) => (
  <ArrowIconWrapper left={left} ml={ml} mr={mr} onClick={onClick}>
    {children}
  </ArrowIconWrapper>
);

const CaseStudyList = ({ cases }) => {
  const [mounted, setMounted] = useState(false);
  const sliderRef = useRef(null);
  const matchMedia = useMedia('(max-width: 768px) ');

  useEffect(() => {
    setMounted(true);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <>
      {mounted && (
        <CarouselWrapper>
          <Slider ref={sliderRef} {...settings}>
            {cases.map(item => (
              <div key={item.link.uid}>
                <CaseStudyItem
                  title={item.heading.html.replace(/<\/?[^>]+(>|$)/g, '')}
                  to={linkResolver(item.link.type, item.link.uid)}
                >
                  <Img
                    fluid={item.image.localFile.childImageSharp.fluid}
                    alt={item.image.alt}
                  />
                  <CustomContent
                    dangerouslySetInnerHTML={{
                      __html: `${item.heading.html} ${item.excerpt.html}`,
                    }}
                  />
                </CaseStudyItem>
              </div>
            ))}
          </Slider>
          {matchMedia || cases.length > 3 ? (
            <>
              <Arrow
                ml="10px"
                left
                onClick={() => sliderRef.current.slickPrev()}
              >
                <AngleLeftArrow height="24" />
              </Arrow>
              <Arrow
                mr="10px"
                right
                onClick={() => sliderRef.current.slickNext()}
              >
                <AngleRightArrow height="24" />
              </Arrow>
            </>
          ) : null}
        </CarouselWrapper>
      )}
    </>
  );
};

CaseStudyList.propTypes = {
  cases: PropTypes.array.isRequired,
};

export default CaseStudyList;
