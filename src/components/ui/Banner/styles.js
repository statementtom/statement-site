import styled from "@emotion/styled";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Content as BContent } from "rbx";

export const CTAButton = styled(AnchorLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  max-width: 500px;
  background-color: #ce0527;
  color: #fff;
  text-transform: lowercase;
  text-decoration: none !important;
  margin-top: 3rem;
  &:hover,
  &:active {
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 30px;
  }
`;

export const Item = styled.div`
  position: relative;
  height: 65vh;
  .gatsby-image-wrapper {
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    margin-top: ${props => (props.large ? "0px" : "90px")};
    > .gatsby-image-wrapper {
      height: auto;
      min-height: inherit;
      > div {
        min-height: inherit;
      }
    }
    ${props =>
      props.article
        ? "min-height: 350px"
        : props.large
        ? "min-height: calc(100vh + 120px)"
        : "min-height: 650px"};
  }
`;

export const Content = styled(BContent)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  * {
    color: #fff;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
    font-size: 50px;
    line-height: 62px;
    letter-spacing: -0.43px;
    margin-bottom: 1rem;
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
    font-weight: 300;
    &:not(last-child) {
      margin-bottom: 0 !important;
    }
  }
  a {
    color: #fff;
    text-decoration: underline;
    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
`;

export const ContentContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  > .container {
    position: relative;
    z-index: 3;
  }
  &:after {
    content: "";
    background-color: #000;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    display: ${props => (props.content ? "block" : "none")};
  }
`;

export const Link = styled.a`
  color: #fff;
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
    color: #fff;
    svg {
      margin-left: 15px;
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1.5em;
`;

export const FlexItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 30px;
`;
