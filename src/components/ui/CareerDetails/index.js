import React from "react";
import { Column, Content } from "rbx";
import { useMedia } from "react-use";
import { GeoPin } from "../Icons";

import * as S from "./styles";

const CareerDetails = ({ visible, details }) => {
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
            {details.location && (
              <div className="item-wrapper">
                <p className="location">
                  <GeoPin height={16} fill="#fff" />
                  {details.location}
                </p>
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
          </S.Content>
        </S.Column>
        {!mobile && <Column tablet={{ size: 4 }} desktop={{ size: 4 }} />}
      </S.ColumnGroup>
    );
  }
  return null;
};

export default CareerDetails;
