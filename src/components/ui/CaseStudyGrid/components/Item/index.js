import React from "react";

import Img from "gatsby-image";
import { Column } from "rbx";

import { navigate } from "gatsby";
import { linkResolver } from "../../../../../util/links";

import * as S from "./styles";

const Item = ({ item }) => {
  const handleClick = link => {
    if (!link) return;
    navigate(linkResolver(link.type, link.uid));
  };
  return (
    <Column
      paddingless
      mobile={{ size: 12 }}
      tablet={{ size: 12 }}
      desktop={{ size: 4 }}
    >
      <S.Item onClick={() => handleClick(item.link)}>
        <Img
          fluid={item.image.localFile.childImageSharp.fluid}
          alt={item.image.alt}
        />
        <S.Content
          dangerouslySetInnerHTML={{
            __html: item.content.html
          }}
        />
      </S.Item>
    </Column>
  );
};

export default Item;
