import styled from "@emotion/styled";
import * as RBX from "rbx";
import { ColumnGroup as RBXColumnGroup } from "rbx/grid/columns/column-group";

export const Text = styled(RBX.Content)`
  background-color: #f5f5f5;
  @media screen and (max-width: 1023px) {
    padding: 10px 30px 30px 30px;
  }
  p {
    color: #000000;
    font-weight: 300;
    letter-spacing: -0.19px;
    margin: 0;
  }
  span {
    color: #000000;
    font-size: 16px;
    margin: 30px 0 0 0;
    @media screen and (max-width: 1215px) {
      margin: 30px 0 60px 0;
    }
  }
  img {
    margin-top: 30px;
  }
`;

export const ColumnGroup = styled(RBXColumnGroup)`
  position: relative;
  margin-bottom: 6rem !important;
  @media screen and (min-width: 1408px) {
    margin-bottom: 9rem !important;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 0 !important;
  }
`;

export const Column = styled(RBX.Column)`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding: 0;
  overflow: hidden;
  margin-top: 120px;
  z-index: -1;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

export const Buttons = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  @media screen and (max-width: 1215px) {
    right: 0;
  }
  @media screen and (max-width: 768px) {
    position: static;
    justify-content: flex-end;
  }
  .arrow {
    cursor: pointer;
    padding: 20px 30px;
    background-color: #fff;
    @media screen and (max-width: 768px) {
      padding: 15px 20px;
    }
  }
`;

export const SlideGroup = styled(RBXColumnGroup)`
  height: 100%;
  min-height: 500px;
  position: relative;
  @media screen and (max-width: 1023px) {
    min-height: 100%;
    > .column {
      &:first-of-type {
        padding: 0;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .mobile-image-wrapper {
      max-height: 350px;
    }
  }
`;

export const Section = styled(RBX.Section)`
  padding: 3rem;
  @media screen and (max-width: 1216px) {
    padding: 3rem 1.5rem;
  }
`;

export const SpeechContainer = styled.div`
  @media screen and (max-width: 1215px) {
    padding: 30px 30px 0 30px;
  }
`;
