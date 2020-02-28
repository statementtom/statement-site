import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Section, Container, Column, Content } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import styled from '@emotion/styled';
import { linkResolver } from '../../../util/links';
import { GeoPin } from '../Icons';

const CustomContent = styled(Content)`
  text-align: center;
  padding: 20px;
  p {
    color: #959595;
    font-weight: 300;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1.1em 0;
    color: #000000;
    font-size: 21px;
    letter-spacing: -0.19px;
    font-weight: 500;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  .location {
    color: #959595;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-right: 10px;
    }
  }
`;

const CustomSection = styled(Section)`
  padding: 6rem 1.5rem 3rem 1.5rem;
  @media screen and (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const CareersList = ({ items }) => (
  <>
    {items.length > 0 && (
      <CustomSection>
        <Container>
          <ColumnGroup>
            {items.map((item, index) => {
              const { data, type, uid } = item.career.document[0];
              return (
                <Column
                  key={index}
                  mobile={{ size: 12 }}
                  tablet={{ size: 6 }}
                  desktop={{ size: 4 }}
                  as={Link}
                  to={linkResolver(type, uid)}
                >
                  <Img
                    fluid={data.list_image.localFile.childImageSharp.fluid}
                    alt={data.list_image.alt}
                    backgroundColor="#959595"
                  />
                  <CustomContent>
                    {data.date && <p>{data.date}</p>}
                    {data.role.text && <h2>{data.role.text}</h2>}
                    {data.location && <p class="location">
                    <GeoPin height={16} fill="#959595" />
                    {data.location}
                    </p>}
                  </CustomContent>
                </Column>
              );
            })}
          </ColumnGroup>
        </Container>
      </CustomSection>
    )}
  </>
);

export default CareersList;
