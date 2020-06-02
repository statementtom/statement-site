import { Content as BContent } from "rbx";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import styled from "@emotion/styled";

export const Content = styled(BContent)`
  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export const Button = styled(AnchorLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  background-color: #ce0527;
  color: #fff;
  text-transform: lowercase;
  &:hover,
  &:active {
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;
