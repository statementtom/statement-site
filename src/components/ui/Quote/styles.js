import { Section as BSection, Content as BContent } from "rbx";
import styled from "@emotion/styled";

export const Section = styled(BSection)`
  background-color: #f5f5f5;
  padding: 6rem 1.5rem;
`;

export const Content = styled(BContent)`
  color: #000;
  p {
    font-size: 30px;
    font-weight: 500;
    line-height: 42px;
  }
  span {
    font-size: 20px;
  }
  .user,
  .company {
    display: block;
  }
`;

export const ImageContainer = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 200px;
`;
