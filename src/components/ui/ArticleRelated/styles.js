import styled from "@emotion/styled";
import { Content as BContent } from "rbx";

export const Content = styled(BContent)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000000;
    font-size: 30px;
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

export const Divider = styled.div`
  border-top: 1px solid #ebebeb;
  @media screen and (max-width: 768px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;
