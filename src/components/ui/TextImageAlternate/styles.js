import styled from "@emotion/styled";
import * as RBX from "rbx";
import { ColumnGroup as RBXColumnGroup } from "rbx/grid/columns/column-group";

export const Content = styled(RBX.Content)`
  font-weight: 300;
  padding: 30px 0;
  ${props => props.alternate && "padding-right: 60px;"}
  @media screen and (max-width: 768px) {
    padding: 25px;
  }
  * {
    color: #ffffff;
  }
  h1,
  h3,
  h4,
  h5,
  h6 {
    font-size: 30px;
    font-weight: 500;
    letter-spacing: -0.27px;
    margin: 0 0 20px 0;
    color: #ffffff;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
    @media screen and (max-width: 768px) {
      font-size: 24px;
      line-height: 38px;
      margin: 0 0 15px 0 !important;
    }
  }
  h2 {
    color: #fff;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
`;

export const ColumnGroup = styled(RBXColumnGroup)`
  position: relative;
  margin-bottom: ${props =>
    props.spacing ? "300px !important" : "200px !important"};
  @media screen and (max-width: 768px) {
    margin-bottom: ${props =>
      props.spacing ? "20px !important" : "0 !important"};
  }
`;

export const Column = styled(RBX.Column)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  padding: 0;
`;

export const Subheading = styled.p`
  margin-top: 30px;
  color: #fff;
  font-size: 30px;
  text-transform: normal;
  @media screen and (max-width: 768px) {
    margin-left: 25px;
  }
`;

export const MainColumn = styled(RBX.Column)`
  background-color: #000;
  @media screen and (max-width: 768px) {
    background-color: transparent;
  }
`;

export const ImageContainer = styled(RBX.Column)`
  padding: 0;
  @media screen and (max-width: 768px) {
    padding: 0 16px;
    margin-top: -16px;
  }
`;
