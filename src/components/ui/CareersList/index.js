import React from "react";
import { Container } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";

import List from "./components/List";

import * as S from "./styles";

const CareersList = ({ items }) => {
  if (!items || items.length === 0) return null;
  return (
    <S.Section>
      <Container>
        <ColumnGroup className="is-mobile is-multiline">
          <List items={items} />
        </ColumnGroup>
      </Container>
    </S.Section>
  );
};

export default CareersList;
