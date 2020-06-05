import React from "react";
import { Section, Container, Column, Content } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import styled from "@emotion/styled";
import Img from "gatsby-image";

const CustomContent = styled(Content)`
  margin: 0;
  @media screen and (max-width: 768px) {
    margin: 0 0 30px 0;
    padding: ${props => (props.alternate ? "0 1.5rem" : "initial")};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000000;
    font-weight: 500;
    font-size: 30px;
    letter-spacing: -0.38px;
    line-height: 60px;
    strong {
      color: #ce0527;
    }
  }
  p {
    color: #000000;
    font-weight: 300;
  }
  ul {
    font-weight: 300;
    color: #000000;
  }
`;

const CustomSection = styled(Section)`
  padding: ${props =>
    props.alternate ? "9rem 8rem 0rem 0rem" : "9rem 1.5rem"};
  @media screen and (max-width: 768px) {
    padding: ${props => (props.alternate ? "3rem 0rem" : "3rem 1.5rem")};
  }
`;

const CaseStudyBanner = ({ primary }) => (
  <CustomSection
    alternate={primary.alternate_layout === "Yes"}
    style={{ paddingBottom: primary.remove_padding === "Yes" ? 0 : "auto" }}
  >
    {primary.alternate_layout === "No" ? (
      <Container>
        <ColumnGroup className="is-mobile is-multiline is-vcentered">
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 4 }}
            desktop={{ size: 4 }}
          >
            <CustomContent
              dangerouslySetInnerHTML={{
                __html: primary.content.html
              }}
            />
          </Column>
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 8 }}
            desktop={{ size: 7, offset: 1 }}
          >
            <Img
              fluid={primary.image.localFile.childImageSharp.fluid}
              alt={primary.image.alt}
            />
          </Column>
        </ColumnGroup>
      </Container>
    ) : (
      <>
        <ColumnGroup
          className="is-mobile is-multiline is-vcentered is-reversed"
          paddingless
        >
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 4, offset: 1 }}
            desktop={{ size: 4 }}
          >
            <CustomContent
              alternate={primary.alternate_layout === "Yes"}
              dangerouslySetInnerHTML={{
                __html: primary.content.html
              }}
            />
          </Column>
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 7, offset: 0 }}
            desktop={{ size: 7, offset: 0 }}
            paddingless
          >
            <Img
              fluid={primary.image.localFile.childImageSharp.fluid}
              alt={primary.image.alt}
            />
          </Column>
        </ColumnGroup>
      </>
    )}
  </CustomSection>
);

export default CaseStudyBanner;
