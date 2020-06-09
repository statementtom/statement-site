import React, { useState } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { Column } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import { linkResolver } from "../../../util/links";

import * as S from "./styles";
import * as Animated from "./animations";

import { FILTERS } from "./constants";

const ResourceList = ({ items }) => {
  const [resources, setResources] = useState(items);
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleClick = filter => {
    setSelectedFilter(filter);
    if (filter === "") {
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
  if (!resources || resources.length === 0) return null;
  return (
    <S.Section>
      <ColumnGroup className="is-mobile is-multiline">
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 12 }}
          desktop={{ size: 12 }}
          className="pb-0"
        >
          <S.Title>Filter By:</S.Title>
          {selectedFilter !== "" && (
            <S.SelectedFilter onClick={() => handleClick("")}>
              Clear Filter
            </S.SelectedFilter>
          )}
        </Column>
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 12 }}
          desktop={{ size: 12 }}
        >
          <S.Container>
            {FILTERS.map(filter => (
              <S.Item
                onClick={() => handleClick(filter)}
                className={filter === selectedFilter ? "active" : ""}
              >
                {filter}
              </S.Item>
            ))}
          </S.Container>
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
              <Animated.Card>
                <Link to={linkResolver(type, uid)}>
                  <Img
                    fluid={image.localFile.childImageSharp.fluid}
                    alt={image.alt}
                    backgroundColor="#959595"
                  />
                  <div style={{ padding: 20 }}>
                    <S.Content>
                      {data.page_title && data.page_title.text && (
                        <h2>{data.page_title.text}</h2>
                      )}
                    </S.Content>
                  </div>
                </Link>
              </Animated.Card>
            </Column>
          );
        })}
      </ColumnGroup>
    </S.Section>
  );
};

export default ResourceList;
