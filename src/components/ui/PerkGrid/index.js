import React from "react";
import { Column, Container } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";

import generateContent from "../../../util/generateContent";

import * as S from "./styles";
import * as Animated from "./animations";
import getPerkIcon from "../../../util/content/getPerkIcon";

const PerkGrid = ({ primary, items }) => {
  console.log(items);
  const content = generateContent({
    title: primary.content_title.html
  });
  if (!items || items.length === 0) return null;
  return (
    <S.Section>
      <Container>
        <ColumnGroup className="is-mobile is-multiline is-centered">
          <Column
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
            <S.Content
              dangerouslySetInnerHTML={{ __html: content }}
              align="center"
            />
          </Column>
        </ColumnGroup>
        <ColumnGroup className="is-mobile is-multiline">
          {items.map((item, index) => {
            const Icon = getPerkIcon(item.content_icon);
            const content = generateContent({
              title: item.content_title.html,
              copy: item.content_copy.html
            });
            return (
              <Column
                mobile={{ size: 12 }}
                tablet={{ size: 6 }}
                desktop={{ size: 4 }}
              >
                <Animated.Card>
                  <S.CardIcon>
                    <Icon height={60} />
                  </S.CardIcon>
                  <S.CardContent
                    dangerouslySetInnerHTML={{ __html: content }}
                    align="center"
                  />
                </Animated.Card>
              </Column>
            );
          })}
        </ColumnGroup>
      </Container>
    </S.Section>
  );
};

export default PerkGrid;
