import styled from "@emotion/styled";
import * as RBX from "rbx";

export const Content = styled(RBX.Content)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 !important;
  @media screen and (max-width: 768px) {
    min-height: auto;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000000;
    font-size: 21px;
    letter-spacing: -0.19px;
    line-height: 32px;
    font-weight: 500;
    margin: 0;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
`;

export const Card = styled(RBX.Card)`
  box-shadow: none;
  max-width: 100%;
  position: relative;
  height: 100%;
`;

export const Section = styled(RBX.Section)`
  padding: 3rem;
  @media screen and (max-width: 768px) {
    padding: 0 1.5rem 3rem 1.5rem;
    margin-top: -11px;
  }
`;

export const Item = styled.p`
  position: relative;
  background-color: #ce0527;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 0 0px red;
  transition: all 0.3s ease;
  min-width: 170px;
  margin-right: 15px;
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
  @media screen and (max-width: 768px) {
    min-width: auto;
    margin-right: 0;
    margin-bottom: 15px;
    width: 47%;
    &:nth-of-type(2n - 1) {
      margin-right: 15px;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
  &:hover {
    background-color: #fff;
    color: #ce0527;
    box-shadow: 0 0 0 1px #ce0527;
  }
  &.active {
    background-color: #fff;
    color: #ce0527;
    box-shadow: 0 0 0 1px #ce0527;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  color: #000;
  text-decoration: underline;
`;

export const SelectedFilter = styled.p`
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;
  font-size: 17px;
  color: #000;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
