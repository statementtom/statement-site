import React from "react";
import { Section, Container, Column } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import Img from "gatsby-image";

import { LongRightArrow } from "../Icons";

import * as S from "./styles";

const TextMaps = ({ primary }) => (
  <Section size="medium">
    <Container>
      <ColumnGroup className="is-mobile is-multiline is-vcentered">
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 5 }}
          desktop={{ size: 5 }}
        >
          <S.ContentContainer>
            <div
              dangerouslySetInnerHTML={{
                __html: primary.content.html
              }}
            />
          </S.ContentContainer>
        </Column>
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 6, offset: 1 }}
          desktop={{ size: 6, offset: 1 }}
        >
          <S.AddressContainer>
            <Img
              fluid={primary.location_image.localFile.childImageSharp.fluid}
              backgroundColor="#CE0527"
            />
            <S.Address>
              <div
                dangerouslySetInnerHTML={{
                  __html: primary.location_content.html
                }}
              />
              <S.Link target="_blank" href={primary.location_directions.text}>
                {primary.location_label}
                <LongRightArrow size="20" fill="#CE0527" />
              </S.Link>
            </S.Address>
          </S.AddressContainer>
        </Column>
      </ColumnGroup>
    </Container>
  </Section>
);

export default TextMaps;
