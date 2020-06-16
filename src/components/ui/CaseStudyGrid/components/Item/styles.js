import styled from "@emotion/styled";
import { Content as BContent } from "rbx/elements/content/content";

export const Item = styled.div`
  cursor: pointer;
  display: block;
  height: 70vh;
  position: relative;
  z-index: 3;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50%;
    z-index: 2;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  .gatsby-image-wrapper {
    height: 70vh;
  }
  @media screen and (max-width: 768px) {
    height: 650px;
    .gatsby-image-wrapper {
      height: 650px;
    }
  }
  @media screen and (max-width: 480px) {
    height: 500px;
    .gatsby-image-wrapper {
      height: 500px;
    }
  }
`;

export const Content = styled(BContent)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 30px;
  height: 100%;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  *,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    font-size: 30px;
    letter-spacing: -0.32px;
    line-height: 60px;
    margin-bottom: 0;
  }
  p {
    font-weight: 300;
  }
`;
