import React from "react";
import Img from "gatsby-image";

import { Container, Column, Content } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import { LongRightArrow } from "../Icons";

import generateScrollTo from "../../../util/generateScrollTo";

import * as S from "./styles";

const Banner = ({
  primary,
  imageOverride,
  large,
  siteLink,
  article,
  category,
  featuredLogos
}) => {
  const enableScrollTo = primary.enable_scroll_to;
  return (
    <S.Item large={!!large} article={article}>
      {imageOverride ? (
        <Img fluid={imageOverride.childImageSharp.fluid} />
      ) : (
        <Img
          fluid={primary.image.localFile.childImageSharp.fluid}
          alt={primary.image.alt}
        />
      )}
      {primary.content && (
        <S.ContentContainer content={!!primary.content}>
          <Container style={{ height: "100%" }}>
            <ColumnGroup
              className="is-mobile is-multiline"
              style={{ height: "100%" }}
            >
              <Column
                mobile={{ size: 12 }}
                tablet={{ size: 10 }}
                desktop={{ size: 8 }}
                style={{ height: "100%" }}
              >
                <S.Content>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: primary.content.html
                    }}
                  />
                  {enableScrollTo && (
                    <S.CTAButton
                      to={generateScrollTo(primary.scroll_to_element_id)}
                    >
                      {primary.call_to_action_text.text}
                    </S.CTAButton>
                  )}

                  <S.FlexContainer>
                    {category && (
                      <S.FlexItem>
                        <div>
                          <strong>Category:</strong> {category}
                        </div>
                      </S.FlexItem>
                    )}
                    {siteLink && (
                      <S.FlexItem>
                        <S.Link href={siteLink} target="_blank">
                          View Site
                          <LongRightArrow size="20" fill="#CE0527" />
                        </S.Link>
                      </S.FlexItem>
                    )}
                  </S.FlexContainer>
                  {featuredLogos && featuredLogos.length > 0 && (
                    <div>
                      <ColumnGroup className="is-mobile is-multiline is-vcentered">
                        <Column
                          mobile={{ size: 12 }}
                          tablet={{ size: 12 }}
                          desktop={{ size: 12 }}
                          style={{ paddingLeft: 0, paddingBottom: 0 }}
                        >
                          <Content>
                            <p style={{ margin: 0, fontSize: 20 }}>
                              <strong>
                                Featured in
                                <span style={{ color: "#CE0527" }}>.</span>
                              </strong>
                            </p>
                          </Content>
                        </Column>
                        {featuredLogos.map((logo, index) => (
                          <Column
                            className="is-6-mobile is-narrow-tablet is-narrow-desktop"
                            key={index}
                            style={{ paddingLeft: index === 0 ? 0 : "auto" }}
                          >
                            <img
                              src={logo.featured_image.url}
                              alt={logo.featured_image.alt}
                              style={{ maxWidth: 150, width: "100%" }}
                            />
                          </Column>
                        ))}
                      </ColumnGroup>
                    </div>
                  )}
                </S.Content>
              </Column>
            </ColumnGroup>
          </Container>
        </S.ContentContainer>
      )}
    </S.Item>
  );
};

export default Banner;
