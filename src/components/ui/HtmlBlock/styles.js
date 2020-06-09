import styled from "@emotion/styled";
import * as RBX from "rbx";

export const Content = styled(RBX.Content)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000000;
    margin: 30px 0;
    font-weight: 500;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
    img {
      margin-top: 30px;
    }
  }
  p,
  li {
    color: #000000;
    font-weight: 300;
  }
  a {
    color: #000;
    text-decoration: underline;
  }
  ul {
    list-style: none;
    margin: 0 0 0 25px;
  }
  li {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 16px;
      left: -20px;
      transform: translateY(-50%);
      height: 3px;
      width: 3px;
      background-color: #ce0527;
      border-radius: 50%;
    }
  }
`;

export const Section = styled(RBX.Section)`
  @media screen and (max-width: 768px) {
    padding-bottom: 3rem;
  }
`;
