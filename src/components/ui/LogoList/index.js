import React from "react";
import PropTypes from "prop-types";
import { Section, Container, Column } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import { Link } from "gatsby";
import { LongRightArrow } from "../Icons";
import { linkResolver } from "../../../util/links";

import * as S from "./styles";

const LogoList = ({ primary, logos }) => (
  <S.Section
    size="medium"
    bottomPadding={primary.remove_padding === "Yes" ? "0px" : "auto"}
  >
    <Container>
      <ColumnGroup className="is-mobile is-multiline is-vcentered">
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 6 }}
          desktop={{ size: 6 }}
          paddingless
        >
          <ColumnGroup className="is-mobile is-multiline is-centered">
            {logos.map(({ logo, link }, index) => (
              <Column
                key={index}
                mobile={{ size: 6 }}
                tablet={{ size: 5 }}
                desktop={{ size: 5 }}
              >
                <S.ImageContainer>
                  {link ? (
                    <Link to={linkResolver(link.type, link.uid)}>
                      <S.Image src={logo.url} alt={logo.alt} />
                    </Link>
                  ) : (
                    <S.Image src={logo.url} alt={logo.alt} />
                  )}
                </S.ImageContainer>
              </Column>
            ))}
          </ColumnGroup>
        </Column>
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 6 }}
          desktop={{ size: 6 }}
        >
          <S.Content
            dangerouslySetInnerHTML={{
              __html: primary.content.html
            }}
          />
          <S.CTAContainer>
            <S.Link to={linkResolver(primary.link.type, primary.link.uid)}>
              {primary.link_label.text}
              <LongRightArrow size="20" fill="#CE0527" />
            </S.Link>
          </S.CTAContainer>
        </Column>
      </ColumnGroup>
    </Container>
  </S.Section>
);

LogoList.propTypes = {
  primary: PropTypes.object,
  logos: PropTypes.array
};

export default LogoList;
