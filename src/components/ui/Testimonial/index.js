import React from "react";
import { Section, Container, Column } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import Img from "gatsby-image";

import { Speech } from "../Icons";

import * as S from "./styles";

const Testimonial = ({ primary }) => (
  <S.TestimonialContainer size="medium">
    <Container>
      <ColumnGroup className="is-mobile is-multiline is-vcentered is-reversed-mobile">
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 5 }}
          desktop={{ size: 5 }}
          widescreen={{ size: 5 }}
        >
          <S.ContentContainer>
            <S.TextContainer>
              <S.SpeechContainer>
                <Speech height="16" />
              </S.SpeechContainer>
              <S.Content
                dangerouslySetInnerHTML={{
                  __html: primary.content.html
                }}
              />
              <S.SpeechContainer flipped>
                <Speech height="16" />
              </S.SpeechContainer>
            </S.TextContainer>
            <S.Content
              style={{ marginTop: 35 }}
              alternate
              dangerouslySetInnerHTML={{
                __html: `${`<span>${primary.person.text}</span>`}`
              }}
            />
          </S.ContentContainer>
        </Column>
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 7 }}
          desktop={{ size: 7 }}
          widescreen={{ size: 7 }}
        >
          <Img
            fluid={primary.image.localFile.childImageSharp.fluid}
            alt={primary.image.alt}
          />
        </Column>
      </ColumnGroup>
    </Container>
  </S.TestimonialContainer>
);

export default Testimonial;
