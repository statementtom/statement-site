import styled from "@emotion/styled";
import {
  Content as BContent,
  Input as BInput,
  Select as BSelect,
  Textarea as BTextarea
} from "rbx";
import GRecaptcha from "react-google-recaptcha";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const Input = styled(BInput)`
  border-radius: 0;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  box-shadow: none;
  border-color: #ebebeb;
  color: #000;
  transition: all 0.3s ease;

  @media screen and (max-width: 768px) {
    margin: 15px 0;
  }

  &::placeholder {
    transition: all 0.3s ease;
    color: #959595;
  }
  &:hover {
    border-color: #000;
    &::placeholder {
      color: #000;
    }
  }
`;

export const Textarea = styled(BTextarea)`
  border-radius: 0;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  box-shadow: none;
  border-color: #ebebeb;
  color: #000;
  transition: all 0.3s ease;

  @media screen and (max-width: 768px) {
    margin: 15px 0;
  }

  &::placeholder {
    transition: all 0.3s ease;
    color: #959595;
  }
  &:hover {
    border-color: #000;
    &::placeholder {
      color: #000;
    }
  }
`;

export const Form = styled.form`
  margin-top: 60px;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
  .field {
    margin-bottom: 1rem;
  }
`;

export const Button = styled.button`
  text-align: center;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  background-color: #ce0527;
  transition: all 0.3s ease;
  min-width: 300px;
  border: 0;
  cursor: pointer;
  text-transform: lowercase;
  @media screen and (max-width: 768px) {
    min-width: 100%;
  }
  svg {
    display: block;
    margin-left: 10px;
    margin-top: 2px;
    transition: all 0.3s ease;
    path {
      transition: all 0.3s ease;
    }
  }
  &:hover {
    color: #000;
    background-color: #fff;
    svg,
    svg path {
      fill: #ce0527;
    }
  }
`;

export const Select = styled(BSelect.Container)`
  @media screen and (max-width: 768px) {
    margin: 15px 0;
  }

  select {
    border-radius: 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    box-shadow: none;
    border-color: #ebebeb;
  }
`;

export const Notification = styled.div`
  padding: 30px;
  background-color: #ce0527;
  color: #fff;
  border: 0;
  text-align: center;
  color: #fff;
  line-height: 28px;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  background-color: #ce0527;
  transition: all 0.3s ease;
  width: 100%;
  margin-bottom: 30px;
`;

export const InlineNotification = styled.div`
  color: #ce0527;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const FormHelper = styled.p`
  font-size: 14px;
  color: #000 !important;
`;

export const Recaptcha = styled(GRecaptcha)`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Items = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const SuccessOverlay = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 1rem;
  position: relative;
  background-color: #ce0527;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    min-height: 300px;
  }
  .content {
    * {
      text-align: center;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: #fff;
      font-size: 30px;
      margin: 0;
      font-weight: 500;
    }
  }
`;

export const SuccessOverlayIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

export const Item = styled.div`
  cursor: pointer;
  position: relative;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  @media screen and (max-width: 768px) {
    padding: 1rem;
    min-height: 150px;
  }
  .content {
    position: absolute;
    z-index: 3;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media screen and (max-width: 768px) {
      position: relative;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 30px;
      text-transform: lowercase;
      font-weight: 500;
      color: #fff;
      margin: 0;
      @media screen and (max-width: 768px) {
        font-size: 24px;
      }
    }
  }
`;

export const Title = styled(BContent)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 30px;
    text-transform: lowercase;
    font-weight: 500;
  }
`;

export const Image = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  &:after {
    content: "";
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.7;
  }
`;

export const Content = styled(BContent)`
  padding: 1rem;
`;

export const AnchorButton = styled(AnchorLink)`
  text-align: center;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  background-color: #ce0527;
  transition: all 0.3s ease;
  min-width: 300px;
  border: 0;
  cursor: pointer;
  text-transform: lowercase;
  @media screen and (max-width: 768px) {
    min-width: 100%;
  }
  svg {
    display: block;
    margin-left: 10px;
    margin-top: 2px;
    transition: all 0.3s ease;
    path {
      transition: all 0.3s ease;
    }
  }
  &:hover {
    color: #000;
    background-color: #fff;
    svg,
    svg path {
      fill: #ce0527;
    }
  }
`;
