import React from "react";
import { Section, Column, Container } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import Img from "gatsby-image";

import { LongRightArrow } from "../Icons";
import { linkResolver } from "../../../util/links";

import * as S from "./styles";
import * as Animated from "./animations";

const ServicesList = ({ items, primary }) => {
  if (!items || items.length === 0) return null;
  return (
    <Section>
      <Container>
        <ColumnGroup className="is-mobile is-multiline is-centered">
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 10 }}
            desktop={{ size: 10 }}
          >
            <S.Content
              dangerouslySetInnerHTML={{
                __html: primary.content.html
              }}
            />
          </Column>
        </ColumnGroup>
        <ColumnGroup className="is-mobile is-multiline is-centered">
          {items.map((item, index) => (
            <Column
              key={index}
              mobile={{ size: 12 }}
              tablet={{ size: 12 }}
              desktop={{ size: 4 }}
            >
              <Animated.Card>
                <Img
                  fluid={item.image.localFile.childImageSharp.fluid}
                  backgroundColor="#CE0527"
                />
                <S.Address>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.content.html
                    }}
                  />
                  <S.Link
                    to={linkResolver(item.cta_link.type, item.cta_link.uid)}
                  >
                    {item.cta_text}
                    <LongRightArrow
                      size="20"
                      style={{ marginTop: "2px" }}
                      fill="#fff"
                    />
                  </S.Link>
                </S.Address>
              </Animated.Card>
            </Column>
          ))}
        </ColumnGroup>
      </Container>
    </Section>
  );
};

export default ServicesList;
