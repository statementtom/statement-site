import styled from "@emotion/styled";
import { Content, Section as BSection } from "rbx";

export const Section = styled(BSection)`
  padding: 6rem 1.5rem;
`;

export const Title = styled(Content)`
  * {
    text-align: center;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    margin: 0;
    padding: 0;
    font-size: 38px;
    line-height: 58px;
    @media screen and (max-width: 768px) {
      font-size: 30px;
      line-height: 40px;
    }
  }
`;

export const AccordionItems = styled.div`
  margin-top: 6rem;
`;
