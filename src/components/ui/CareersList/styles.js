import styled from "@emotion/styled";
import * as RBX from "rbx";

export const Content = styled(RBX.Content)`
  text-align: center;
  padding: 20px;
  p {
    color: #959595;
    font-weight: 300;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1.1em 0;
    color: #000000;
    font-size: 21px;
    letter-spacing: -0.19px;
    font-weight: 500;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  .location {
    color: #959595;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-right: 10px;
    }
  }
`;

export const Section = styled(RBX.Section)`
  padding: 6rem 1.5rem 3rem 1.5rem;
  @media screen and (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;
