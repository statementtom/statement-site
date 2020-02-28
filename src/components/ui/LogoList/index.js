import React from 'react';
import PropTypes from 'prop-types';
import { Section, Container, Column, Content } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { LongRightArrow } from '../Icons';
import { linkResolver } from '../../../util/links';

const ImageWrapepr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100px;
  @media screen and (max-width: 768px) {
    min-height: 70px;
  }
`;

const Image = styled.img`
  max-width: 150px;
  width: 100%;
  @media screen and (max-width: 768px) {
    max-width: 100px;
  }
`;

const CustomContent = styled(Content)`
  @media screen and (max-width: 768px) {
    text-align: center;
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
    @media screen and (max-width: 768px) {
      font-size: 32px;
      line-height: 42px;
      margin-bottom: 24px;
    }
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p {
    color: #000000;
    font-weight: 300;
    margin-bottom: 20px;
  }
`;

const CustomLink = styled(Link)`
  color: #000000;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: lowercase;
  svg {
    display: block;
    transition: all 0.2s cubic-bezier(0.42, 0, 0.58, 1); /* ease-in-out */
    margin-top: 2px;
    margin-left: 10px;
  }
  &:hover {
    color: #000000;
    svg {
      margin-left: 15px;
    }
  }
`;

const CtaWrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const LogoList = ({ primary, logos }) => (
  <Section
    size="medium"
    style={{ paddingBottom: primary.remove_padding === 'Yes' ? 0 : 'auto' }}
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
                <ImageWrapepr>
                  {link ? (
                    <Link to={linkResolver(link.type, link.uid)}>
                      <Image src={logo.url} alt={logo.alt} />
                    </Link>
                  ) : (
                      <Image src={logo.url} alt={logo.alt} />
                    )}
                </ImageWrapepr>
              </Column>
            ))}
          </ColumnGroup>
        </Column>
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 6 }}
          desktop={{ size: 6 }}
        >
          <CustomContent
            dangerouslySetInnerHTML={{
              __html: primary.content.html,
            }}
          />
          <CtaWrapper>
            <CustomLink to={linkResolver(primary.link.type, primary.link.uid)}>
              {primary.link_label.text}
              <LongRightArrow size="20" fill="#CE0527" />
            </CustomLink>
          </CtaWrapper>
        </Column>
      </ColumnGroup>
    </Container>
  </Section>
);

LogoList.propTypes = {
  primary: PropTypes.object,
  logos: PropTypes.array,
};

export default LogoList;
