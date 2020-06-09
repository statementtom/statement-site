import React from "react";
import Img from "gatsby-image";
import { Column } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import BackgroundImage from "gatsby-background-image";
import { useMedia } from "react-use";

import * as S from "./styles";

const TextImageAlternate = ({ primary }) => {
  const matchMedia = useMedia("(min-width: 1024px)");
  if (primary.alternate_layout === "Yes") {
    return (
      <S.ColumnGroup
        className="is-mobile is-multiline"
        spacing={primary.alternate_spacing === "Yes"}
      >
        <S.MainColumn
          mobile={{ size: 12 }}
          tablet={{ size: 12 }}
          desktop={{ size: 6 }}
          widescreen={{ size: 6 }}
          paddingless
        >
          <ColumnGroup
            className="is-mobile is-multiline is-centered is-vcentered is-reversed-mobile"
            style={{ height: "100%", minHeight: "600px" }}
          >
            <S.ImageContainer
              mobile={{ size: 12 }}
              tablet={{ size: 12 }}
              desktop={{ size: 6 }}
              className="is-hidden-desktop"
            >
              <Img
                fluid={primary.image.localFile.childImageSharp.fluid}
                alt={primary.image.alt}
              />
            </S.ImageContainer>
            <Column
              mobile={{ size: 12 }}
              tablet={{ size: 12 }}
              desktop={{ size: 8 }}
              widescreen={{ size: 8 }}
              style={{ backgroundColor: "#000" }}
            >
              {primary.subheading && primary.subheading.text && (
                <S.Subheading>{primary.subheading.text}</S.Subheading>
              )}
              <S.Content
                alternate
                dangerouslySetInnerHTML={{
                  __html: primary.content.html
                }}
              />
            </Column>
          </ColumnGroup>
        </S.MainColumn>
        {matchMedia && (
          <S.Column
            desktop={{ size: 6, offset: 6 }}
            widescreen={{ size: 7, offset: 5 }}
          >
            <BackgroundImage
              fluid={primary.image.localFile.childImageSharp.fluid}
              backgroundColor="#000"
              style={{ height: "100%", marginTop: "120px" }}
            />
          </S.Column>
        )}
      </S.ColumnGroup>
    );
  }
  return (
    <S.ColumnGroup
      className="is-mobile is-multiline"
      spacing={primary.alternate_spacing === "Yes"}
    >
      <S.MainColumn
        mobile={{ size: 12 }}
        tablet={{ size: 12 }}
        desktop={{ size: 6, offset: 6 }}
        widescreen={{ size: 7, offset: 5 }}
        paddingless
      >
        <ColumnGroup
          className="is-mobile is-multiline is-centered is-vcentered is-reversed-mobile"
          style={{ height: "100%", minHeight: "600px" }}
        >
          <S.ImageContainer
            mobile={{ size: 12 }}
            tablet={{ size: 12 }}
            desktop={{ size: 6 }}
            className="is-hidden-desktop"
          >
            <Img
              fluid={primary.image.localFile.childImageSharp.fluid}
              alt={primary.image.alt}
            />
          </S.ImageContainer>
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 12 }}
            desktop={{ size: 8 }}
            widescreen={{ size: 6 }}
            style={{ backgroundColor: "#000" }}
          >
            {primary.subheading && primary.subheading.text && (
              <S.Subheading>{primary.subheading.text}</S.Subheading>
            )}
            <S.Content
              dangerouslySetInnerHTML={{
                __html: primary.content.html
              }}
            />
          </Column>
        </ColumnGroup>
      </S.MainColumn>
      {matchMedia && (
        <S.Column desktop={{ size: 6 }} widescreen={{ size: 6 }}>
          <BackgroundImage
            fluid={primary.image.localFile.childImageSharp.fluid}
            backgroundColor="#000"
            style={{ height: "100%", marginTop: "120px" }}
          />
        </S.Column>
      )}
    </S.ColumnGroup>
  );
};

export default TextImageAlternate;
