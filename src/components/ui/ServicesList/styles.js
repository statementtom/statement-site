import styled from "@emotion/styled";
import * as RBX from "rbx";
import * as G from "gatsby";

export const ContentContainer = styled.div`
  position: relative;
  min-height: 300px;
  padding: 20px;
  @media screen and (max-width: 768px) {
    min-height: 100%;
  }
`;

export const Content = styled(RBX.Content)`
  text-align: center;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000000;
    font-weight: 500;
    margin-bottom: 36px;
    font-size: 42px;
    letter-spacing: -0.38px;
    line-height: 64px;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p {
    color: #000000;
    font-weight: 300;
    margin-bottom: 36px;
    @media screen and (max-width: 768px) {
      margin-bottom: 24px;
    }
  }
`;

export const Address = styled.div`
  padding: 20px 0 0 0;
  width: 100%;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000;
    font-size: 30px;
    letter-spacing: -0.27px;
    line-height: 45px;
    font-weight: 500;
    margin-bottom: 20px;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p {
    color: #000000;
    font-size: 17px;
    font-weight: 300;
    line-height: 24px;
  }
`;

export const Link = styled(G.Link)`
  text-align: center;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  background-color: #ce0527;
  transition: all 0.3s ease;
  border: 0;
  cursor: pointer;
  text-transform: lowercase;
  margin: 30px 0 0 0;
  @media screen and (max-width: 768px) {
    min-width: 100%;
  }
  svg {
    display: block;
    margin-left: 10px;
    transition: all 0.3s ease;
    path {
      transition: all 0.3s ease;
    }
  }
  &:hover {
    color: #000;
    background-color: #fff;
    svg,
    svg path {
      fill: #ce0527;
    }
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #ebebeb;
    color: #000;
    svg,
    svg path {
      fill: #ce0527;
    }
  }
`;
