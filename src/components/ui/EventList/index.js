import React from 'react';
import { Section, Container, Column, Content } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { useMedia } from 'react-use';
import { linkResolver } from '../../../util/links';

const CustomContent = styled(Content)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000000;
    font-size: 21px;
    letter-spacing: -0.19px;
    font-weight: 500;
    margin: 25px 0;
  }
  p {
    color: #959595;
    font-weight: 300;
  }
  .item-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    &:last-child,
    &:last-of-type {
      margin-bottom: 0;
    }
    svg {
      margin-right: 10px;
    }
  }
`;

const IconWrapper = styled.div`
  margin-right: 5px;
  display: flex;
  height: 100%;
  align-items: center;
`;

const EventList = ({ items }) => {
  const mobile = useMedia('(max-width: 768px)');
  return (
    <>
      {items && (
        <Section size="medium">
          <Container>
            <ColumnGroup className="is-mobile is-multiline">
              {items.map((item, index) => {
                const { data, type, uid } = item.event.document[0];
                return (
                  <>
                    <Column
                      mobile={{ size: 12 }}
                      tablet={{ size: 6 }}
                      desktop={{ size: 4 }}
                      as={Link}
                      to={linkResolver(type, uid)}
                      key={index}
                    >
                      <Img
                        fluid={data.list_image.localFile.childImageSharp.fluid}
                        alt={data.list_image.alt}
                        backgroundColor="#CE0527"
                      />
                      <CustomContent>
                        {data.title.text && <h3>{data.title.text}</h3>}
                        {/* {data.date && (
                          <div className="item-wrapper">
                            <IconWrapper>
                              <Calendar height={16} fill="#959595" />
                            </IconWrapper>
                            <p>{data.date}</p>
                          </div>
                        )}
                        {data.end_time.text && data.start_time.text && (
                          <div className="item-wrapper">
                            <IconWrapper>
                              <Clock height={16} fill="#959595" />
                            </IconWrapper>
                            <p>{`${data.end_time.text} - ${data.start_time.text}`}</p>
                          </div>
                        )}
                        {data.location.text && (
                          <div className="item-wrapper">
                            <IconWrapper>
                              <GeoPin height={16} fill="#959595" />
                            </IconWrapper>
                            <p>{data.location.text}</p>
                          </div>
                        )} */}
                      </CustomContent>
                    </Column>
                    {mobile && index !== items.length - 1 && (
                      <Column
                        paddingless
                        mobile={{ size: 12 }}
                        tablet={{ size: 12 }}
                        desktop={{ size: 12 }}
                      >
                        <hr />
                      </Column>
                    )}
                  </>
                );
              })}
            </ColumnGroup>
          </Container>
        </Section>
      )}
    </>
  );
};

export default EventList;
