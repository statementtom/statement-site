import React from "react";
import { Section, Container } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";

import List from "./components/List";

const ContentGrid = ({ items }) => {
  if (!items || items.length === 0) return null;
  return (
    <Section size="medium">
      <Container>
        <ColumnGroup className="is-mobile is-multiline is-centered">
          <List items={items} />
        </ColumnGroup>
      </Container>
    </Section>
  );
};

export default ContentGrid;
