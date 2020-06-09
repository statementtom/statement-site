import React from "react";
import { Column } from "rbx";
import Img from "gatsby-image";
import { ColumnGroup } from "rbx/grid/columns/column-group";

import * as S from "./styles";

const Item = ({ item, last }) => {
  return (
    <ColumnGroup
      className={
        last
          ? "is-multiline is-vcentered offset-column"
          : "is-multiline is-vcentered"
      }
    >
      {item.small_image.localFile && (
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 6 }}
          desktop={{ size: 6 }}
        >
          <S.SmallImageContainer offsetPadding={last}>
            <Img
              fluid={item.small_image.localFile.childImageSharp.fluid}
              alt={item.small_image.alt}
            />
          </S.SmallImageContainer>
        </Column>
      )}
      {item.main_image.localFile && (
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 6 }}
          desktop={{ size: 6 }}
        >
          <S.MainImageContainer>
            <Img
              fluid={item.main_image.localFile.childImageSharp.fluid}
              alt={item.main_image.alt}
            />
          </S.MainImageContainer>
        </Column>
      )}

      {item.content.html && (
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 6 }}
          desktop={{ size: 6 }}
        >
          <S.Content
            dangerouslySetInnerHTML={{
              __html: item.content.html
            }}
          />
        </Column>
      )}
    </ColumnGroup>
  );
};

export default Item;
