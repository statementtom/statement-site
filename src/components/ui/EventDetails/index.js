import React from 'react';
import { Column, Content } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import styled from '@emotion/styled';

import { useMedia } from 'react-use';
import { Calendar, Clock, GeoPin } from '../Icons';

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
    font-size: 1.75rem;
    letter-spacing: -0.19px;
    font-weight: 500;
    margin: 0 0 25px 0;
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

const IconWrapper = styled.div`
  margin-right: 5px;
  display: flex;
  height: 100%;
  align-items: center;
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

const EventDetails = ({ visible, details }) => {
  const mobile = useMedia('(max-width: 768px)');
  return (
    <>
      {visible && (
        <CustomColumnGroup>
          <CustomColumn
            mobile={{ size: 12 }}
            tablet={{ size: 6 }}
            desktop={{ size: 6 }}
          >
            <CustomContent>
              {details.title && <h3>{details.title}</h3>}
              {details.date && (
                <div className="item-wrapper">
                  <IconWrapper>
                    <Calendar height={16} fill="#959595" />
                  </IconWrapper>
                  <p>{details.date}</p>
                </div>
              )}
              {details.endTime && details.startTime && (
                <div className="item-wrapper">
                  <IconWrapper>
                    <Clock height={16} fill="#959595" />
                  </IconWrapper>
                  <p>{`${details.endTime} - ${details.startTime}`}</p>
                </div>
              )}
              {details.location && (
                <div className="item-wrapper">
                  <IconWrapper>
                    <GeoPin height={16} fill="#959595" />
                  </IconWrapper>
                  <p>{details.location}</p>
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

export default EventDetails;
