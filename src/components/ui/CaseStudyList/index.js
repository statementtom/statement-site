import React, { useRef, useState, useEffect } from "react";
import { navigate } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { useMedia } from "react-use";

import { AngleRightArrow, AngleLeftArrow } from "../Icons";
import Carousel from "../Carousel";
import Arrow from "./components/Arrow";

import { linkResolver } from "../../../util/links";

import { SETTINGS } from "./constants";

import * as S from "./styles";

const CaseStudyList = ({ cases }) => {
  const [mounted, setMounted] = useState(false);
  const sliderRef = useRef(null);
  const matchMedia = useMedia("(max-width: 768px)");

  const handleClick = link => {
    if (!link) return;
    navigate(linkResolver(link.type, link.uid));
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return (
      <S.Container>
        <Carousel ref={sliderRef} settings={SETTINGS}>
          {cases.map((item, index) => (
            <div key={index}>
              <S.Item onClick={() => handleClick(item.link)}>
                <Img
                  fluid={item.image.localFile.childImageSharp.fluid}
                  alt={item.image.alt}
                />
                <S.Content
                  dangerouslySetInnerHTML={{
                    __html: `${item.heading.html} ${item.excerpt.html}`
                  }}
                />
              </S.Item>
            </div>
          ))}
        </Carousel>
        {matchMedia || cases.length > 3 ? (
          <>
            <Arrow ml="10px" left onClick={() => sliderRef.current.slickPrev()}>
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
      </S.Container>
    );
  }

  return null;
};

CaseStudyList.propTypes = {
  cases: PropTypes.array.isRequired
};

export default CaseStudyList;
