import styled from "@emotion/styled";
import * as RBX from "rbx";

export const Content  = styled(RBX.Content)`
  color: #000000;
  font-size: 18px;
  font-weight: 300;
  h1,
  h3,
  h4,
  h5,
  h6 {
    font-size: 30px;
    line-height: 60px;
    letter-spacing: -0.27px;
    font-weight: 500;
    margin: 0 0 20px 0;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  h2 {
    margin: 0 0 20px 0;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
`;

export const ImageContainer = styled.div`
  max-width: ${props => (props.fullWidth ? "100%" : "450px")};
  margin: 0 auto;
`;

export const Section = styled(RBX.Section)`
  margin-bottom: ${props => (props.overlap ? "-200px;" : "0;")};
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;
