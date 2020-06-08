import React from "react";
import { Container, Column } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";

import List from "./components/List";

import * as S from "./styles";

const CareerRelated = ({ items, primary }) => {
  if (!items || items.length === 0) return null;
  return (
    <>
      <S.Section>
        <Container>
          <ColumnGroup className="is-mobile is-multiline is-centered">
            <Column
              mobile={{ size: 12 }}
              tablet={{ size: 10 }}
              desktop={{ size: 10 }}
              paddingless
            >
              {primary.content.html && (
                <ColumnGroup className="is-mobile is-multiline is-centered">
                  <Column
                    mobile={{ size: 12 }}
                    tablet={{ size: 10 }}
                    desktop={{ size: 10 }}
                  >
                    <S.Content
                      dangerouslySetInnerHTML={{
                        __html: primary.content.html
                      }}
                    />
                  </Column>
                </ColumnGroup>
              )}
              <ColumnGroup className="is-mobile is-multiline is-centered">
                <List items={items} />
              </ColumnGroup>
            </Column>
          </ColumnGroup>
        </Container>
      </S.Section>
    </>
  );
};

export default CareerRelated;
