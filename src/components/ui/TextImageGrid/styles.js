import styled from "@emotion/styled";
import * as RBX from "rbx";

export const Section = styled(RBX.Section)`
  background-color: #303030;
  margin-bottom: 9rem;
  @media screen and (max-width: 768px) {
    padding: 3rem 1.5rem !important;
    margin-bottom: 0;
  }
  .offset-column {
    margin-bottom: -250px !important;
    @media screen and (max-width: 1215px) {
      margin-bottom: 0 !important;
    }
  }
`;
