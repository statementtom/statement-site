import styled from "@emotion/styled";
import { Column as BColumn, Content as BContent } from "rbx";
import { ColumnGroup as BColumnGroup } from "rbx/grid/columns/column-group";

export const Content = styled(BContent)`
  padding: 80px;
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

export const Column = styled(BColumn)`
  padding: 0;
  background-color: #000;
`;

export const ColumnGroup = styled(BColumnGroup)`
  position: relative;
  z-index: 2;
  margin-top: -200px !important;
  @media screen and (max-width: 768px) {
    margin-top: 0 !important;
  }
`;
