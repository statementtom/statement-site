import React from "react";
import { Container, Column, Content } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";

import * as S from "./styles";
import generateContent from "../../../util/generateContent";

const Quote = ({ primary }) => {
  const content = generateContent({
    body: primary.content_body.html,
    user: `<span>${primary.content_user}</span>`
  });
  return (
    <S.Section>
      <Container>
        <ColumnGroup className="is-mobile is-multiline is-vcentered is-centered">
          <Column
            mobile={{
              size: 12
            }}
            tablet={{
              size: 10
            }}
            desktop={{
              size: 10
            }}
          >
            <S.Content
              dangerouslySetInnerHTML={{
                __html: content
              }}
            />
          </Column>
        </ColumnGroup>
      </Container>
    </S.Section>
  );
};

export default Quote;
