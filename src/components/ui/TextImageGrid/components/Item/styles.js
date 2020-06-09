import styled from "@emotion/styled";
import * as RBX from "rbx";

export const Content = styled(RBX.Content)`
  padding: 80px 80px 80px 0;
  @media screen and (max-width: 1215px) {
    padding: 30px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    margin-bottom: 30px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
    font-size: 48px;
    letter-spacing: -0.43px;
    margin-bottom: 30px;
    font-weight: 500;
    @media screen and (max-width: 768px) {
      font-size: 42px;
    }
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p {
    color: #ffffff;
    font-weight: 300;
    margin: 0;
  }
`;

export const MainImageContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    margin: 0 auto 30px auto;
  }
`;

export const SmallImageContainer = styled.div`
  max-width: 200px;
  margin: 0 auto;
  ${props => (props.offsetPadding ? "padding: 0 0 120px 0;" : "padding: 0;")};
  @media screen and (max-width: 1215px) {
    padding: 0;
    margin-bottom: 30px;
  }
`;
