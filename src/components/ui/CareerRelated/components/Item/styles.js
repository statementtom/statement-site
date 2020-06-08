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
    font-size: 21px;
    margin-bottom: 20px;
    font-weight: 500;
    text-align: center;
    &:first-of-type {
      margin-top: 20px;
    }
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p {
    color: #000000;
    text-align: center;
  }
`;
