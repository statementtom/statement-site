import styled from "@emotion/styled";
import * as RBX from "rbx";

export const Content = styled(RBX.Content)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-bottom: 0 !important;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #ffffff;
    font-weight: 300;
    font-size: 48px;
    letter-spacing: -0.38px;
    line-height: 70px;
    margin: 0;
    @media screen and (max-width: 768px) {
      font-size: 32px;
      line-height: 48px;
    }
    &:last-of-type {
      margin-top: 0;
    }
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p {
    color: #fff;
  }
`;

export const Slide = styled.div`
  position: relative;
  z-index: 3;
  height: 65vh;
  .gatsby-image-wrapper {
    height: 100%;
    position: relative;
    &:after {
      content: "";
      background-color: #000;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.5;
    }
  }
  @media screen and (max-width: 768px) {
    height: auto;
    min-height: 550px;
    > .gatsby-image-wrapper {
      height: auto;
      min-height: inherit;
      > div {
        min-height: inherit;
      }
    }
  }
`;
