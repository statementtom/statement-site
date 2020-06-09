import styled from "@emotion/styled";
import * as RBX from "rbx";

export const Content = styled(RBX.Content)`
  p {
    color: #000;
    font-weight: 300;
    letter-spacing: -0.23px;
    margin: 0;
  }
  span {
    color: #959595;
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  @media screen and (max-width: 768px) {
    ${props => (props.alternate ? "padding: 0 30px" : "padding: 0")}
  }
`;

export const TextContainer = styled.div`
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const TestimonialContainer = styled(RBX.Section)`
  margin-bottom: -350px;
  @media screen and (max-width: 1407px) {
    margin-bottom: -300px;
  }
  @media screen and (max-width: 1215px) {
    margin-bottom: 0;
  }
`;

export const SpeechContainer = styled.div`
  position: absolute;
  top: ${props => (props.flipped ? "auto" : "0")};
  bottom: ${props => (props.flipped ? "0" : "auto")};
  left: ${props => (props.flipped ? "auto" : "-25px")};
  right: ${props => (props.flipped ? "0" : "auto")};
  @media screen and (max-width: 768px) {
    left: ${props => (props.flipped ? "auto" : "0")};
    right: ${props => (props.flipped ? "0" : "auto")};
  }
  svg {
    transform: ${props => (props.flipped ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;

export const ContentContainer = styled.div`
  padding: 0 60px;
  margin-bottom: 220px;
  @media screen and (max-width: 1215px) {
    padding: 0;
    margin-bottom: 0;
  }
`;
