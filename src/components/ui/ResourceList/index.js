import React, { useState } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Section, Column, Content, Card } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { linkResolver } from '../../../util/links';

const CustomContent = styled(Content)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 !important;
  @media screen and (max-width: 768px) {
    min-height: auto;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000000;
    font-size: 21px;
    letter-spacing: -0.19px;
    line-height: 32px;
    font-weight: 500;
    margin: 0;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
`;

const CustomCard = styled(Card)`
  box-shadow: none;
  max-width: 100%;
  position: relative;
  height: 100%;
`;

const CustomSection = styled(Section)`
  padding: 3rem;
  @media screen and (max-width: 768px) {
    padding: 0 1.5rem 3rem 1.5rem;
    margin-top: -11px;
  }
`;

const FilterItem = styled.p`
  position: relative;
  background-color: #ce0527;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 0 0px red;
  transition: all 0.3s ease;
  min-width: 170px;
  margin-right: 15px;
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
  @media screen and (max-width: 768px) {
    min-width: auto;
    width: 50%;
    margin-right: 0;
    margin-bottom: 15px;
    width: 47%;
    &:nth-of-type(2n - 1) {
      margin-right: 15px;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
  &:hover {
    background-color: #fff;
    color: #ce0527;
    box-shadow: 0 0 0 1px #ce0527;
  }
  &.active {
    background-color: #fff;
    color: #ce0527;
    box-shadow: 0 0 0 1px #ce0527;
  }
`;

const FilterTitle = styled.p`
  font-size: 18px;
  color: #000;
  text-decoration: underline;
`;

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const PosedCard = posed(CustomCard)({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',
  },
  hover: {
    scale: 1.025,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
  },
  press: {
    scale: 1.025,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
  },
});

const ResourceList = ({ items }) => {
  const [resources, setResources] = useState(items);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filters] = useState([
    'Replatforming',
    'Strategy',
    'Seasonal',
    'Growth',
  ]);

  const handleClick = filter => {
    setSelectedFilter(filter);
    if (filter === '') {
      setResources(items);
    } else {
      const filteredResources = items.filter(item =>
        item.resource.document[0].data.filters.some(
          elem => elem.filter_label === filter
        )
      );
      setResources(filteredResources);
    }
  };
  return (
    <>
      {resources.length > 0 && (
        <CustomSection>
          <ColumnGroup className="is-mobile is-multiline">
            <Column
              mobile={{ size: 12 }}
              tablet={{ size: 12 }}
              desktop={{ size: 12 }}
              className="pb-0"
            >
              <FilterTitle>Filter By:</FilterTitle>
              {selectedFilter !== '' && (
                <FilterTitle
                  style={{
                    marginTop: 10,
                    textDecoration: 'none',
                    cursor: 'pointer',
                    fontSize: 17,
                    color: '#000',
                  }}
                  onClick={() => handleClick('')}
                >
                  Clear Filter
                </FilterTitle>
              )}
            </Column>
            <Column
              mobile={{ size: 12 }}
              tablet={{ size: 12 }}
              desktop={{ size: 12 }}
            >
              <FilterWrapper>
                {filters.map(filter => (
                  <FilterItem
                    onClick={() => handleClick(filter)}
                    className={filter === selectedFilter ? 'active' : ''}
                  >
                    {filter}
                  </FilterItem>
                ))}
              </FilterWrapper>
            </Column>
          </ColumnGroup>
          <ColumnGroup className="is-mobile is-multiline">
            {resources.map((item, index) => {
              const { data, uid, type } = item.resource.document[0];
              const { image } = item;
              return (
                <Column
                  key={index}
                  mobile={{ size: 12 }}
                  tablet={{ size: 6 }}
                  desktop={{ size: 3 }}
                >
                  <PosedCard>
                    <Link to={linkResolver(type, uid)}>
                      <Img
                        fluid={image.localFile.childImageSharp.fluid}
                        alt={image.alt}
                        backgroundColor="#959595"
                      />
                      <div style={{ padding: 20 }}>
                        <CustomContent>
                          {data.page_title && data.page_title.text && (
                            <h2>{data.page_title.text}</h2>
                          )}
                        </CustomContent>
                      </div>
                    </Link>
                  </PosedCard>
                </Column>
              );
            })}
          </ColumnGroup>
        </CustomSection>
      )}
    </>
  );
};

export default ResourceList;
