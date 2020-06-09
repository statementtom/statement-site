import styled from "@emotion/styled";
import * as RBX from "rbx";
import * as G from "gatsby";

export const Section = styled(RBX.Section)`
  padding: 9rem 1.5rem ${props => props.bottomPadding} 1.5rem !important;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100px;
  @media screen and (max-width: 768px) {
    min-height: 70px;
  }
`;

export const Image = styled.img`
  max-width: 150px;
  width: 100%;
  @media screen and (max-width: 768px) {
    max-width: 100px;
  }
`;

export const Content = styled(RBX.Content)`
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000000;
    font-weight: 500;
    font-size: 30px;
    letter-spacing: -0.38px;
    line-height: 60px;
    @media screen and (max-width: 768px) {
      font-size: 32px;
      line-height: 42px;
      margin-bottom: 24px;
    }
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p {
    color: #000000;
    font-weight: 300;
    margin-bottom: 20px;
  }
`;

export const Link = styled(G.Link)`
  color: #000000;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: lowercase;
  svg {
    display: block;
    transition: all 0.2s cubic-bezier(0.42, 0, 0.58, 1); /* ease-in-out */
    margin-top: 2px;
    margin-left: 10px;
  }
  &:hover {
    color: #000000;
    svg {
      margin-left: 15px;
    }
  }
`;

export const CTAContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
