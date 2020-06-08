import React from 'react';
import { Column } from 'rbx';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { GeoPin } from '../../../Icons';

import { linkResolver } from '../../../../../util/links';

import * as S from './styles';

const Item = ({ item }) => {
  const { data, type, uid } = item.career.document[0];
  return (
    <Column
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
      <S.Content>
        {data.date && <p>{data.date}</p>}
        {data.role.text && <h2>{data.role.text}</h2>}
        {data.location && (
          <p className="location">
            <GeoPin height={16} fill="#959595" />
            {data.location}
          </p>
        )}
      </S.Content>
    </Column>
  );
};

export default Item;
