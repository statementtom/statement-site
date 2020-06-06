import React from "react";
import { Section, Container, Content, Column } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import styled from "@emotion/styled";

const CustomContent = styled(Content)`
  * {
    color: #000;
    text-align: center;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000;
    font-size: 30px;
    letter-spacing: -0.27px;
    margin-bottom: 30px;
    font-weight: 500;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100px;
  @media screen and (max-width: 768px) {
    min-height: 70px;
    max-width: 120px;
    margin: 0 auto;
  }
`;

const Image = styled.img`
  max-width: 150px;
  max-height: 80px;
  @media screen and (max-width: 768px) {
    max-width: 100px;
    max-height: 80px;
  }
`;

const FullWidthLogoList = ({ primary, items }) => (
  <Section>
    <Container>
      {primary && (
        <ColumnGroup className="is-mobile is-multiline is-centered">
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 12 }}
            desktop={{ size: 10 }}
          >
            <CustomContent
              dangerouslySetInnerHTML={{
                __html: primary.content.html
              }}
            />
          </Column>
        </ColumnGroup>
      )}
      {items && items.length > 0 && (
        <ColumnGroup className="is-mobile is-multiline is-centered">
          {items.map((item, index) => (
            <Column
              key={index}
              mobile={{ size: 6 }}
              tablet={{ size: 6 }}
              desktop={{ size: 3 }}
            >
              {item.link ? (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImageWrapper>
                    <Image src={item.logo.url} alt={item.logo.alt} />
                  </ImageWrapper>
                </a>
              ) : (
                <ImageWrapper>
                  <Image src={item.logo.url} alt={item.logo.alt} />
                </ImageWrapper>
              )}
            </Column>
          ))}
        </ColumnGroup>
      )}
    </Container>
  </Section>
);

export default FullWidthLogoList;
