import React from "react";
import { Container, Column } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import Img from "gatsby-image";

import * as S from "./styles";

const SplitText = ({ primary }) => (
  <S.Section removePadding={primary.remove_padding}>
    <Container>
      <ColumnGroup className="is-mobile is-multiline is-vcentered mobile-overflow-show">
        <S.Column
          mobile={{ size: 12 }}
          tablet={{ size: 6 }}
          desktop={{ size: 5, offset: 1 }}
        >
          <S.Content
            dangerouslySetInnerHTML={{
              __html: primary.heading.html
            }}
          />
          <S.ImageContainer>
            <Img
              fluid={primary.image.localFile.childImageSharp.fluid}
              alt={primary.image.alt}
            />
          </S.ImageContainer>
        </S.Column>
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 6 }}
          desktop={{ size: 6 }}
        >
          <S.Content
            alternate
            dangerouslySetInnerHTML={{
              __html: primary.content.html
            }}
          />
        </Column>
      </ColumnGroup>
    </Container>
  </S.Section>
);

export default SplitText;
