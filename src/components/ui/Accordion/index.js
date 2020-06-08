import React from "react";
import { Container, Column, Content } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import generateContent from "../../../util/generateContent";

import Item from "./components/Item";

import * as S from "./styles";

const Accordion = ({ primary, items }) => {
  const content = generateContent({
    title: primary.content_title.html
  });
  return (
    <S.Section>
      <Container>
        <ColumnGroup className="is-mobile is-multiline is-vcentered is-centered">
          <Column
            paddingless
            mobile={{
              size: 12
            }}
            tablet={{
              size: 10
            }}
            desktop={{
              size: 8
            }}
          >
            <S.Title
              dangerouslySetInnerHTML={{
                __html: content
              }}
            />
          </Column>
        </ColumnGroup>
        {items && items.length && (
          <S.AccordionItems>
            {items.map((item, index) => {
              return <Item key={index} item={item} />;
            })}
          </S.AccordionItems>
        )}
      </Container>
    </S.Section>
  );
};

export default Accordion;
