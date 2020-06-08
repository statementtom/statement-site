import React from "react";
import { Section, Container, Column } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";

import generateSectionSize from "../../../util/generateSectionSize";

import * as S from "./styles";

const FullWidthLogoList = ({ primary, items }) => {
  const size = generateSectionSize(primary.section_size);
  return (
    <S.Section size={size}>
      <Container>
        {primary && (
          <ColumnGroup className="is-mobile is-multiline is-centered">
            <Column
              mobile={{ size: 12 }}
              tablet={{ size: 12 }}
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
        {items && items.length > 0 && (
          <ColumnGroup className="is-mobile is-multiline is-centered">
            {items.map((item, index) => (
              <Column
                key={index}
                mobile={{ size: 6 }}
                tablet={{ size: 6 }}
                desktop={{ size: 3 }}
              >
                {item.link ? (
                  <a
                    href={item.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <S.ImageContainer>
                      <S.Image src={item.logo.url} alt={item.logo.alt} />
                    </S.ImageContainer>
                  </a>
                ) : (
                  <S.ImageContainer>
                    <S.Image src={item.logo.url} alt={item.logo.alt} />
                  </S.ImageContainer>
                )}
              </Column>
            ))}
          </ColumnGroup>
        )}
      </Container>
    </S.Section>
  );
};

export default FullWidthLogoList;
