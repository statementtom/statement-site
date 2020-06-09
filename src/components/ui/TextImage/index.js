import React from "react";
import { Container, Column } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import Img from "gatsby-image";

import * as S from "./styles";

const TextImage = ({ primary }) => {
  if (primary.alternate_layout === "No") {
    return (
      <S.Section size="medium" overlap={primary.alternate_version === "Yes"}>
        <Container>
          <ColumnGroup
            className={
              primary.alternate_layout === "No"
                ? "is-mobile is-multiline is-vcentered"
                : "is-mobile is-multiline is-vcentered is-reversed-mobile"
            }
          >
            <Column
              mobile={{ size: 12 }}
              tablet={{ size: 6 }}
              desktop={{ size: 6 }}
            >
              <S.Content
                dangerouslySetInnerHTML={{
                  __html: primary.content.html
                }}
              />
            </Column>
            <Column
              mobile={{ size: 12 }}
              tablet={{ size: 6 }}
              desktop={{ size: 6 }}
            >
              <S.ImageContainer>
                <Img
                  fluid={primary.image.localFile.childImageSharp.fluid}
                  alt={primary.image.alt}
                />
              </S.ImageContainer>
            </Column>
          </ColumnGroup>
        </Container>
      </S.Section>
    );
  }
  return (
    <S.Section size="medium" overlap={primary.alternate_version === "Yes"}>
      <Container>
        <ColumnGroup
          className={
            primary.alternate_layout === "No"
              ? "is-mobile is-multiline is-vcentered"
              : "is-mobile is-multiline is-vcentered is-reversed-mobile"
          }
        >
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 6 }}
            desktop={{ size: 6 }}
          >
            <S.ImageContainer>
              <Img
                fluid={primary.image.localFile.childImageSharp.fluid}
                alt={primary.image.alt}
              />
            </S.ImageContainer>
          </Column>
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 6 }}
            desktop={{ size: 6 }}
          >
            <S.Content
              dangerouslySetInnerHTML={{
                __html: primary.content.html
              }}
            />
          </Column>
        </ColumnGroup>
      </Container>
    </S.Section>
  );
};

export default TextImage;
