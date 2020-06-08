import styled from "@emotion/styled";

export const Container = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  ${props => (props.left ? "left: 0;" : "right: 0;")}
  ${props => props.ml && `margin-left: ${props.ml};`}
  ${props => props.mr && `margin-right: ${props.mr};`}
`;
