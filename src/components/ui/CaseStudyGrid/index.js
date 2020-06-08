import React from "react";
import PropTypes from "prop-types";
import { ColumnGroup } from "rbx/grid/columns/column-group";

import List from "./components/List";

import * as S from "./styles";

const CaseStudyGrid = ({ items }) => {
  if (!items || items.length === 0) return null;
  return (
    <S.Container>
      <ColumnGroup className="is-mobile is-multiline">
        <List items={items} />
      </ColumnGroup>
    </S.Container>
  );
};

CaseStudyGrid.propTypes = {
  items: PropTypes.array.isRequired
};

export default CaseStudyGrid;
