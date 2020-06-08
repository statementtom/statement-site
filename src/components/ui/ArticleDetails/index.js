import React from "react";
import { Column } from "rbx";
import { useMedia } from "react-use";

import * as S from "./styles";

const ArticleDetails = ({ visible, details }) => {
  const mobile = useMedia("(max-width: 768px)");
  if (visible) {
    return (
      <S.ColumnGroup>
        <S.Column
          mobile={{ size: 12 }}
          tablet={{ size: 8 }}
          desktop={{ size: 8 }}
        >
          <S.Content>
            {details.date && (
              <div className="item-wrapper">
                <p>{details.date}</p>
              </div>
            )}
            {details.pageTitle && (
              <div
                className="item-wrapper"
                dangerouslySetInnerHTML={{
                  __html: details.pageTitle
                }}
              />
            )}
            {details.author && (
              <div className="item-wrapper">
                <p>{details.author}</p>
              </div>
            )}
          </S.Content>
        </S.Column>
        {!mobile && <Column tablet={{ size: 4 }} desktop={{ size: 4 }} />}
      </S.ColumnGroup>
    );
  }
  return null;
};

export default ArticleDetails;
