import React from "react";
import { Link } from "gatsby";
import { Column, Content } from "rbx";
import Img from "gatsby-image";

import { LongRightArrow } from "../../../Icons";

import { linkResolver } from "../../../../../util/links";

import * as S from "./styles";

const Item = ({ item }) => {
  return (
    <Column
      mobile={{ size: 12 }}
      tablet={{ size: 6 }}
      desktop={{ size: 4 }}
      as={Link}
      to={linkResolver(item.link_url.type, item.link_url.uid)}
    >
      <S.ImageContainer>
        <Img
          fluid={item.image.localFile.childImageSharp.fluid}
          alt={item.image.alt}
        />
      </S.ImageContainer>
      <S.ContentContainer>
        <Content
          dangerouslySetInnerHTML={{
            __html: item.content.html
          }}
        />
        <S.Link>
          {item.link_label.text}
          <LongRightArrow size="20" fill="#CE0527" />
        </S.Link>
        <hr />
      </S.ContentContainer>
    </Column>
  );
};

export default Item;
