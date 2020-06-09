import React from "react";
import { Container } from "rbx";

import List from "./components/List";

import * as S from "./styles";

const TextImageGrid = ({ items }) => {
  if (!items || items.length === 0) return null;
  return (
    <S.Section size="medium">
      <Container>
        <List items={items} />
      </Container>
    </S.Section>
  );
};

export default TextImageGrid;
