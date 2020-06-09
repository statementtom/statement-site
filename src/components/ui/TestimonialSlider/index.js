import React, { useRef } from "react";
import { Column } from "rbx";
import { useMedia } from "react-use";
import Img from "gatsby-image";

import { AngleLeftArrow, AngleRightArrow, Speech } from "../Icons";
import Carousel from "../Carousel";

import { SETTINGS } from "./constants";

import * as S from "./styles";
import Item from "./components/Item";

const TestimonialSlider = ({ items, primary }) => {
  const mobile = useMedia("(max-width: 768px)");
  const sliderRef = useRef(null);
  return (
    <S.Section>
      <S.ColumnGroup className="is-mobile is-multiline">
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 12 }}
          desktop={{ size: 6 }}
          widescreen={{ size: 7 }}
          style={{ backgroundColor: "#F5F5F5" }}
          paddingless
        >
          <S.SlideGroup className="is-mobile is-multiline is-centered is-vcentered">
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
              <Carousel ref={sliderRef} settings={SETTINGS}>
                {items.map((item, index) => (
                  <Item item={item} key={index} />
                ))}
              </Carousel>
              <S.Buttons>
                <div
                  className="arrow"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <AngleLeftArrow height="30" />
                </div>
                <div
                  className="arrow"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <AngleRightArrow height="30" />
                </div>
              </S.Buttons>
            </Column>
          </S.SlideGroup>
          {!mobile && (
            <S.Column desktop={{ size: 6 }} widescreen={{ size: 6 }}>
              <Img
                fluid={primary.image.localFile.childImageSharp.fluid}
                alt={primary.image.alt}
              />
            </S.Column>
          )}
        </Column>
      </S.ColumnGroup>
    </S.Section>
  );
};

export default TestimonialSlider;
