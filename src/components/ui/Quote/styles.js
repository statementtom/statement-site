import { Section as BSection, Content as BContent } from "rbx";
import styled from "@emotion/styled";

export const Section = styled(BSection)`
  background-color: #303030;
`;

export const Content = styled(BContent)`
  color: #fff;
  text-align: center;
  p {
    font-weight: bold;
  }
  span {
    font-size: 14px;
  }
`;
