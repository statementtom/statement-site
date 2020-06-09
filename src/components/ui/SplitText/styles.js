import styled from "@emotion/styled";
import * as RBX from "rbx";

export const Content = styled(RBX.Content)`
  position: relative;
  z-index: 2;
  @media screen and (max-width: 768px) {
    padding-bottom: ${props => (props.alternate ? "3rem" : "initial")};
  }
  p {
    color: #000000;
    font-weight: 300;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    font-size: 48px;
    line-height: 68px;
    letter-spacing: -0.43px;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
`;

export const Section = styled(RBX.Section)`
  padding: ${props =>
    props.removePadding === "Yes"
      ? "9rem 1.5rem 0 1.5rem"
      : "9rem 1.5rem 9rem 1.5rem"};
  @media screen and (max-width: 1023px) {
    margin-top: 72px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0;
    padding-bottom: 0;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: -100px;
  right: 0;
  min-width: 400px;
  @media screen and (max-width: 1023px) {
    position: absolute;
    top: 20px;
    right: 0;
    min-width: 220px;
  }
  @media screen and (max-width: 768px) {
    min-width: 240px;
  }
`;

export const Column = styled(RBX.Column)`
  position: relative;
`;
