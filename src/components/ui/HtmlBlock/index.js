import React from "react";
import { Container, Column } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";

import * as S from "./styles";

const HtmlBlock = ({ primary }) => {
  if (!primary.html) return null;
  return (
    <S.Section size="medium">
      <Container>
        <ColumnGroup className="is-mobile is-multiline is-centered">
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 10 }}
            desktop={{ size: 8 }}
          >
            <S.Content
              dangerouslySetInnerHTML={{
                __html: primary.html.text
              }}
            />
          </Column>
        </ColumnGroup>
      </Container>
    </S.Section>
  );
};

export default HtmlBlock;
