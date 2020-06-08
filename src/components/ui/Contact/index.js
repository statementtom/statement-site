import React from "react";
import { Link } from "gatsby";
import { Section, Container, Column, Content } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { LongRightArrow } from "../Icons";
import { linkResolver } from "../../../util/links";

import * as S from "./styles";

const Contact = ({ primary }) => (
  <S.Section size="medium">
    <Container style={{ position: "static" }}>
      <ColumnGroup className="is-mobile is-multiline is-centered is-vcentered">
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 7 }}
          desktop={{ size: 7 }}
        >
          <S.Container>
            <S.Content
              dangerouslySetInnerHTML={{
                __html: primary.content.html
              }}
            />
            <S.Link
              to={linkResolver(primary.link_url.type, primary.link_url.uid)}
            >
              {primary.link_label.text}
              <LongRightArrow size="20" fill="#CE0527" />
            </S.Link>
          </S.Container>
        </Column>
        <S.FloatColumn
          mobile={{ size: 12 }}
          tablet={{ size: 6 }}
          desktop={{ size: 6 }}
        >
          <S.ImageContainer>
            <Img
              fluid={primary.image.localFile.childImageSharp.fluid}
              alt={primary.image.alt}
            />
          </S.ImageContainer>
        </S.FloatColumn>
      </ColumnGroup>
    </Container>
  </S.Section>
);

export default Contact;
