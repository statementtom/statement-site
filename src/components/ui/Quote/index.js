import React from "react";
import { Container, Column, Content } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";

import generateContent from "../../../util/generateContent";
import { Speech } from "../Icons";

import * as S from "./styles";

const Quote = ({ primary }) => {
  const content = generateContent({
    body: primary.content_body.html,
    user: `<span class="user">${primary.content_user}</span>`,
    company: `<span class="company">${primary.content_company}</span>`
  });
  return (
    <S.Section>
      <Container>
        <ColumnGroup className="is-mobile is-multiline is-vcentered">
          <Column
            mobile={{
              size: 12
            }}
            tablet={{
              size: 4
            }}
            desktop={{
              size: 4
            }}
          >
            <S.ImageContainer>
              <S.Image
                src={primary.content_image.url}
                alt={primary.content_image.alt}
              />
            </S.ImageContainer>
          </Column>
          <Column
            mobile={{
              size: 12
            }}
            tablet={{
              size: 8
            }}
            desktop={{
              size: 8
            }}
          >
            <Speech height={36} />
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
