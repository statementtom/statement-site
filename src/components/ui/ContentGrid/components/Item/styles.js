import styled from "@emotion/styled";

export const ImageContainer = styled.div`
  max-width: 120px;
  margin: 0 auto;
`;

export const ContentContainer = styled.div`
  text-align: center;
  padding: 0 20px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 30px;
    line-height: 60px;
    letter-spacing: -0.27px;
    font-weight: 500;
    margin: 20px 0;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p {
    color: #000000;
    font-weight: 300;
  }
  hr {
    display: none;
    margin: 24px 0 0px 0;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;

export const Link = styled.p`
  color: #000;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: lowercase;
  svg {
    display: block;
    transition: all 0.2s cubic-bezier(0.42, 0, 0.58, 1); /* ease-in-out */
    margin-left: 10px;
    margin-top: 2px;
  }
  &:hover {
    color: #000;
    svg {
      margin-left: 15px;
    }
  }
`;
