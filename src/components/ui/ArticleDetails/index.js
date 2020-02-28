import React from 'react';
import { Column, Content } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import styled from '@emotion/styled';

import { useMedia } from 'react-use';

const CustomContent = styled(Content)`
  padding: 80px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: 40px;
    min-height: auto;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
    font-size: 30px;
    line-height: 60px;
    letter-spacing: -0.19px;
    font-weight: 500;
    margin: 25px 0;
    @media screen and (max-width: 768px) {
      font-size: 25px;
      line-height: 44px;
    }
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p {
    color: #fff;
    font-weight: 300;
  }
  .item-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    &:last-child,
    &:last-of-type {
      margin-bottom: 0;
    }
    svg {
      margin-right: 10px;
    }
  }
`;

const CustomColumn = styled(Column)`
  padding: 0;
  background-color: #000;
`;

const CustomColumnGroup = styled(ColumnGroup)`
  position: relative;
  z-index: 2;
  margin-top: -200px !important;
  @media screen and (max-width: 768px) {
    margin-top: 0 !important;
  }
`;

const ArticleDetails = ({ visible, details }) => {
  const mobile = useMedia('(max-width: 768px)');
  return (
    <>
      {visible && (
        <CustomColumnGroup>
          <CustomColumn
            mobile={{ size: 12 }}
            tablet={{ size: 8 }}
            desktop={{ size: 8 }}
          >
            <CustomContent>
              {details.date && (
                <div className="item-wrapper">
                  <p>{details.date}</p>
                </div>
              )}
              {details.pageTitle && (
                <div
                  className="item-wrapper"
                  dangerouslySetInnerHTML={{
                    __html: details.pageTitle,
                  }}
                />
              )}
              {details.author && (
                <div className="item-wrapper">
                  <p>{details.author}</p>
                </div>
              )}
            </CustomContent>
          </CustomColumn>
          {!mobile && <Column tablet={{ size: 4 }} desktop={{ size: 4 }} />}
        </CustomColumnGroup>
      )}
    </>
  );
};

export default ArticleDetails;
