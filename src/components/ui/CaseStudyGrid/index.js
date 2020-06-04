import React from "react";
import { Column } from "rbx";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import { linkResolver } from "../../../util/links";

import * as S from "./styles";

const CaseStudyGrid = ({ items }) => {
  if (!items || items.length === 0) return null;
  return (
    <S.Container>
      <ColumnGroup className="is-mobile is-multiline">
        {items.map((item, index) => (
          <Column
            paddingless
            mobile={{ size: 12 }}
            tablet={{ size: 12 }}
            desktop={{ size: 4 }}
            key={index}
          >
            <S.Item to={linkResolver(item.link.type, item.link.uid)}>
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
        ))}
      </ColumnGroup>
    </S.Container>
  );
};

CaseStudyGrid.propTypes = {
  items: PropTypes.array.isRequired
};

export default CaseStudyGrid;
