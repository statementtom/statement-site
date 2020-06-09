import styled from "@emotion/styled";
import * as RBX from "rbx";
import getSectionSize from "../../../util/getSectionSize";

export const Section = styled.div`
  padding: ${props => getSectionSize(props.size)};
`;

export const Content = styled(RBX.Content)`
  text-align: ${props => props.align};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 30px;
    font-weight: 500;
  }
`;

export const Card = styled.div`
  padding: 20px;
  min-height: 300px;
`;

export const CardIcon = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

export const CardContent = styled(RBX.Content)`
  text-align: ${props => props.align};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 28px;
    font-weight: 500;
  }
  p {
    font-weight: 300;
  }
`;
