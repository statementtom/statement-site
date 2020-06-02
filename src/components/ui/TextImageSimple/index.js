import React from "react";
import { Section, Container, Column, Content } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import Img from "gatsby-image";

import * as S from "./styles";

import generateScrollTo from "../../../util/generateScrollTo";
import generateContent from "../../../util/generateContent";

const TextImageSimple = ({ primary }) => {
  const content = generateContent({
    title: primary.content_title.html,
    body: primary.content_body.html
  });

  return (
    <Section
      size="medium"
      style={{ paddingBottom: primary.content_padding_bottom ? 0 : "auto" }}
    >
      <Container>
        <ColumnGroup className="is-mobile is-multiline is-vcentered">
          <Column
            paddingless
            mobile={{ size: 12 }}
            tablet={{ size: 5, offset: 1 }}
            desktop={{ size: 5, offset: 1 }}
          >
            <S.Content
              dangerouslySetInnerHTML={{
                __html: content
              }}
            />
            <S.Button to={generateScrollTo("ppc-form")}>
              Book your free call with a Shopify expert
            </S.Button>
          </Column>
          <Column
            paddingless
            mobile={{ size: 12 }}
            tablet={{ size: 5, offset: 1 }}
            desktop={{ size: 5, offset: 1 }}
          >
            <Img
              fluid={primary.content_image.localFile.childImageSharp.fluid}
              alt={primary.content_image.alt}
            />
          </Column>
        </ColumnGroup>
      </Container>
    </Section>
  );
};

export default TextImageSimple;
