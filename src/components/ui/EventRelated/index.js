import React from 'react';
import { Section, Container, Column, Content } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { linkResolver } from '../../../util/links';

const CustomSection = styled(Section)`
  > .container {
    border-top: 1px solid #ebebeb;
  }
`;

const CustomContent = styled(Content)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000000;
    font-size: 21px;
    margin-bottom: 20px;
    font-weight: 500;
    text-align: center;
    &:first-of-type {
      margin-top: 20px;
    }
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p {
    color: #000000;
    text-align: center;
  }
`;

const EventRelated = ({ items, primary }) => (
  <>
    {items.length > 0 && (
      <CustomSection>
        <Container>
          <ColumnGroup className="is-mobile is-multiline is-centered">
            <Column
              mobile={{ size: 12 }}
              tablet={{ size: 10 }}
              desktop={{ size: 10 }}
              paddingless
            >
              {primary.content.html && (
                <ColumnGroup className="is-mobile is-multiline is-centered">
                  <Column
                    mobile={{ size: 12 }}
                    tablet={{ size: 10 }}
                    desktop={{ size: 10 }}
                  >
                    <CustomContent
                      dangerouslySetInnerHTML={{
                        __html: primary.content.html,
                      }}
                    />
                  </Column>
                </ColumnGroup>
              )}
              <ColumnGroup className="is-mobile is-multiline is-centered">
                {items.map((item, index) => {
                  const { data, type, uid } = item.event.document[0];
                  return (
                    <Column
                      mobile={{ size: 12 }}
                      tablet={{ size: 6 }}
                      desktop={{ size: 4 }}
                      key={index}
                      as={Link}
                      to={linkResolver(type, uid)}
                    >
                      <Img
                        fluid={data.list_image.localFile.childImageSharp.fluid}
                        alt={data.list_image.alt}
                        style={{ marginBottom: '20px' }}
                      />
                      <CustomContent
                        dangerouslySetInnerHTML={{
                          __html: `<p>${data.title.text}</p>`,
                        }}
                      />
                    </Column>
                  );
                })}
              </ColumnGroup>
            </Column>
          </ColumnGroup>
        </Container>
      </CustomSection>
    )}
  </>
);

export default EventRelated;
