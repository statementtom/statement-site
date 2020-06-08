import styled from "@emotion/styled";
import { Content as BContent, Section as BSection } from "rbx";
import getSectionSize from "../../../util/getSectionSize";

export const Content = styled(BContent)`
  * {
    color: #000;
    text-align: center;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000;
    font-size: 30px;
    letter-spacing: -0.27px;
    margin-bottom: 30px;
    font-weight: 500;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100px;
  @media screen and (max-width: 768px) {
    min-height: 70px;
    max-width: 120px;
    margin: 0 auto;
  }
`;

export const Image = styled.img`
  max-width: 150px;
  max-height: 80px;
  @media screen and (max-width: 768px) {
    max-width: 100px;
    max-height: 80px;
  }
`;

export const Section = styled.div`
  padding: ${props => getSectionSize(props.size)};
`;
