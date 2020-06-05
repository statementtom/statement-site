import styled from "@emotion/styled";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const CTAButton = styled(AnchorLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  max-width: 500px;
  background-color: #ce0527;
  color: #fff;
  text-transform: lowercase;
  text-decoration: none !important;
  margin-top: 3rem;
  &:hover,
  &:active {
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 30px;
  }
`;
