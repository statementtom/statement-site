import styled from "@emotion/styled";
import * as RBX from "rbx";
import { Link as GLink } from "gatsby";

export const Content = styled(RBX.Content)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 48px;
    line-height: 68px;
    letter-spacing: -0.43px;
    font-weight: 500;
    @media screen and (max-width: 768px) {
      font-size: 40px;
      line-height: 52px;
    }
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p {
    color: #000000;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 2;
`;

export const ImageContainer = styled.div`
  max-width: 450px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    max-width: 300px;
  }
`;

export const FloatColumn = styled(RBX.Column)`
  position: absolute;
  left: 40%;
  top: 60px;
  @media screen and (max-width: 768px) {
    left: 0;
  }
`;

export const Link = styled(GLink)`
  color: #000000;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: lowercase;
  svg {
    display: block;
    transition: all 0.2s cubic-bezier(0.42, 0, 0.58, 1); /* ease-in-out */
    margin-left: 10px;
    margin-top: 2px;
  }
  &:hover {
    color: #000000;
    svg {
      margin-left: 15px;
    }
  }
`;

export const Section = styled(RBX.Section)`
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    padding: 0;
    ${Container} {
      padding: 3rem 1.5rem;
    }
  }
`;
