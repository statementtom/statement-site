import styled from "@emotion/styled";
import { Content } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";

export const Container = styled.div`
  margin-bottom: 1.5rem;
`;

export const Title = styled(Content)`
  cursor: pointer;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 30px;
    color: #000;
    font-weight: 500;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const Toggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 15px;
  cursor: pointer;
  svg {
    transition: all 0.3s ease;
    transform: ${props => (props.collapse ? "rotate(0deg)" : "rotate(45deg)")};
  }
  g {
    stroke: #000;
  }
`;

export const Body = styled(Content)`
  margin-top: 1rem;
`;

export const BodyContainer = styled(ColumnGroup)`
  transition: all 0.3s ease;
  overflow: hidden;
  height: ${props => (props.collapse ? 0 : "auto")};
`;
