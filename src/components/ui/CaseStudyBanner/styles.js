import styled from "@emotion/styled";
import * as RBX from "rbx";

export const Content = styled(RBX.Content)`
  margin: 0;
  @media screen and (max-width: 768px) {
    margin: 0 0 30px 0;
    padding: ${props => (props.alternate ? "0 1.5rem" : "initial")};
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
    strong {
      color: #ce0527;
    }
  }
  p {
    color: #000000;
    font-weight: 300;
  }
  ul {
    font-weight: 300;
    color: #000000;
  }
`;

export const Section = styled(RBX.Section)`
  padding: ${props =>
    props.alternate ? "9rem 8rem 0rem 0rem" : "9rem 1.5rem"};
  @media screen and (max-width: 768px) {
    padding: ${props => (props.alternate ? "3rem 0rem" : "3rem 1.5rem")};
  }
`;
