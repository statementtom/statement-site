import React from "react";
import { Column } from "rbx";
import { Link } from "gatsby";
import Img from "gatsby-image";

import * as S from "./styles";

const Item = ({ item }) => {
  const { url } = item.career;
  const { data } = item.career.document[0];

  return (
    <Column
      mobile={{ size: 12 }}
      tablet={{ size: 6 }}
      desktop={{ size: 4 }}
      as={Link}
      to={url}
    >
      <Img
        fluid={data.list_image.localFile.childImageSharp.fluid}
        alt={data.list_image.alt}
        style={{ marginBottom: "20px" }}
        backgroundColor="#959595"
      />
      <S.Content
        dangerouslySetInnerHTML={{
          __html: `<p>${data.role.text}</p>`
        }}
      />
    </Column>
  );
};

export default Item;
