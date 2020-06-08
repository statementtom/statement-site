import React from "react";
import { Container, Column } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import Img from "gatsby-image";

import * as S from "./styles";

const CaseStudyBanner = ({ primary }) => {
  if (primary.alternate_layout === "No") {
    return (
      <S.Section
        alternate={primary.alternate_layout === "Yes"}
        style={{ paddingBottom: primary.remove_padding === "Yes" ? 0 : "auto" }}
      >
        <Container>
          <ColumnGroup className="is-mobile is-multiline is-vcentered">
            <Column
              mobile={{ size: 12 }}
              tablet={{ size: 4 }}
              desktop={{ size: 4 }}
            >
              <S.Content
                dangerouslySetInnerHTML={{
                  __html: primary.content.html
                }}
              />
            </Column>
            <Column
              mobile={{ size: 12 }}
              tablet={{ size: 8 }}
              desktop={{ size: 7, offset: 1 }}
            >
              <Img
                fluid={primary.image.localFile.childImageSharp.fluid}
                alt={primary.image.alt}
              />
            </Column>
          </ColumnGroup>
        </Container>
      </S.Section>
    );
  }

  return (
    <S.Section>
      <ColumnGroup
        className="is-mobile is-multiline is-vcentered is-reversed"
        paddingless
      >
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 4, offset: 1 }}
          desktop={{ size: 4 }}
        >
          <S.Content
            alternate={primary.alternate_layout === "Yes"}
            dangerouslySetInnerHTML={{
              __html: primary.content.html
            }}
          />
        </Column>
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 7, offset: 0 }}
          desktop={{ size: 7, offset: 0 }}
          paddingless
        >
          <Img
            fluid={primary.image.localFile.childImageSharp.fluid}
            alt={primary.image.alt}
          />
        </Column>
      </ColumnGroup>
    </S.Section>
  );
};

export default CaseStudyBanner;
