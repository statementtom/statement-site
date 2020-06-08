import React, { useState } from "react";
import { Column, Content } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";

import generateContent from "../../../../../util/generateContent";

import * as S from "./styles";
import { Plus } from "../../../Icons";

const AccordionItem = ({ item }) => {
  const [collapse, setCollapse] = useState(true);
  const title = generateContent({
    title: item.accordion_title.html
  });
  const body = generateContent({
    content: item.accordion_content.html
  });
  const points = generateContent({
    points: item.accordion_points.html
  });

  const handleToggle = () => {
    setCollapse(!collapse);
  };

  return (
    <S.Container>
      <ColumnGroup className="is-mobile is-multiline is-centered">
        <Column
          paddingless
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
          <S.Header onClick={handleToggle}>
            <S.Toggle collapse={collapse}>
              <Plus height={30} fill="#000" />
            </S.Toggle>
            <S.Title
              active={collapse}
              dangerouslySetInnerHTML={{
                __html: title
              }}
            />
          </S.Header>
          <S.BodyContainer
            collapse={collapse}
            className="is-mobile is-multiline"
          >
            <Column
              paddingless
              mobile={{
                size: 12
              }}
              tablet={{
                size: 7
              }}
              desktop={{
                size: 7
              }}
            >
              <S.Body
                dangerouslySetInnerHTML={{
                  __html: body
                }}
              />
            </Column>
            <Column
              paddingless
              mobile={{
                size: 12
              }}
              tablet={{
                size: 4,
                offset: 1
              }}
              desktop={{
                size: 4,
                offset: 1
              }}
            >
              <S.Points
                dangerouslySetInnerHTML={{
                  __html: points
                }}
              />
            </Column>
          </S.BodyContainer>
        </Column>
      </ColumnGroup>
    </S.Container>
  );
};

export default AccordionItem;
