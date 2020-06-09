import styled from "@emotion/styled";

export const Item = styled.div`
  position: relative;
  height: 65vh;
  .gatsby-image-wrapper {
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    min-height: 350px;
    > .gatsby-image-wrapper {
      height: auto;
      min-height: inherit;
      > div {
        min-height: inherit;
      }
    }
  }
`;
